import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Best-effort rate limit (per server instance): 5 requests per IP per 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number): string =>
  typeof v === "string" ? v.replace(/\u0000/g, "").trim().slice(0, max) : "";

const oneLine = (s: string): string => s.replace(/[\r\n]+/g, " ");

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const b = (typeof raw === "object" && raw !== null ? raw : {}) as Record<string, unknown>;

  // Honeypot: real visitors never fill this hidden field.
  if (clean(b.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(b.name, 100);
  const email = clean(b.email, 200);
  const note = clean(b.note, 2000);
  const when = clean(b.when, 200);
  const local = clean(b.local, 200);
  const tz = clean(b.tz, 100);

  if (!name || !when || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet: the browser falls back to opening the visitor's email app.
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 501 });
  }

  const to = process.env.BOOKING_TO_EMAIL ?? "dcifebrero@gmail.com";
  const from = process.env.BOOKING_FROM_EMAIL ?? "PhewFlow Bookings <onboarding@resend.dev>";

  const text = [
    "New discovery call request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Requested time: ${when}`,
    `Visitor's local time: ${local || "n/a"}${tz ? ` (${tz})` : ""}`,
    "",
    "Message:",
    note || "(none)",
    "",
    "Reply to this email to confirm the call.",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: oneLine(`Call request: ${when} (${name})`),
        text,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
