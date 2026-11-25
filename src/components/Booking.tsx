"use client";

import { useEffect, useState, type FormEvent } from "react";
import { booking, site } from "@/data/site";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Day = { y: number; m: number; d: number };
type Status = "idle" | "sending" | "sent" | "error";

const OFF = booking.utcOffset;
const slotTime = (y: number, m: number, d: number, h: number) => Date.UTC(y, m, d, h - OFF, 0);
const fmtHour = (h: number) => `${((h + 11) % 12) + 1}:00 ${h >= 12 ? "PM" : "AM"}`;

export default function Booking() {
  // The calendar depends on "now", so it only renders after the page has loaded in the browser.
  const [now, setNow] = useState<Date | null>(null);
  const [tz, setTz] = useState("");
  const [view, setView] = useState({ y: 0, m: 0 });
  const [start, setStart] = useState({ y: 0, m: 0 });
  const [day, setDay] = useState<Day | null>(null);
  const [hour, setHour] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const n = new Date();
    const ph = new Date(n.getTime() + OFF * 3600e3);
    const ym = { y: ph.getUTCFullYear(), m: ph.getUTCMonth() };
    setNow(n);
    setView(ym);
    setStart(ym);
    setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || "your timezone");
  }, []);

  const freeHours = (y: number, m: number, d: number): number[] =>
    now
      ? booking.hours.filter((h) => slotTime(y, m, d, h) >= now.getTime() + booking.leadHours * 3600e3)
      : [];

  const dayLabel = (x: Day) =>
    new Date(Date.UTC(x.y, x.m, x.d)).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

  const localLabel = (x: Day, h: number) =>
    new Date(slotTime(x.y, x.m, x.d, h)).toLocaleString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });

  const monthDiff = (view.y - start.y) * 12 + (view.m - start.m);
  const shift = (delta: number) =>
    setView((v) => {
      const total = v.y * 12 + v.m + delta;
      return { y: Math.floor(total / 12), m: ((total % 12) + 12) % 12 };
    });

  const firstDow = new Date(Date.UTC(view.y, view.m, 1)).getUTCDay();
  const dim = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDow }, () => null),
    ...Array.from({ length: dim }, (_, i) => i + 1),
  ];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!day || hour === null) return;
    const when = `${dayLabel(day)}, ${fmtHour(hour)} (Philippine Time)`;
    const local = localLabel(day, hour);
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, note, when, local, tz, website: trap }),
      });
      if (res.status === 501) {
        // Email sending isn't configured yet: open the visitor's email app instead.
        const body = `Discovery call request\n\nName: ${name}\nEmail: ${email}\nRequested time: ${when}\nMy local time: ${local} (${tz})\n\nMessage:\n${note || "(none)"}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          `Call request: ${when}`,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setMessage(`Thanks, ${name.split(" ")[0]}! Your request was sent. I will reply to ${email} to confirm.`);
      setName("");
      setEmail("");
      setNote("");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Please email me directly at ${site.email}.`);
    }
  }

  const slots = day ? freeHours(day.y, day.m, day.d) : [];

  return (
    <section id="book">
      <div className="wrap">
        <div className="label reveal">Book a call</div>
        <h2 className="reveal" style={{ "--d": ".06s" }}>
          Pick a time for a free discovery call
        </h2>
        <p className="lead reveal" style={{ "--d": ".1s" }}>
          Choose a day and time that works for you. Your request goes straight to my inbox and I&apos;ll
          confirm by email.
        </p>

        <div className="book reveal" style={{ "--d": ".14s" }}>
          <div className="panel">
            {now && (
              <>
                <div className="cal-head">
                  <button type="button" aria-label="Previous month" disabled={monthDiff <= 0} onClick={() => shift(-1)}>
                    ‹
                  </button>
                  <b>
                    {MONTHS[view.m]} {view.y}
                  </b>
                  <button
                    type="button"
                    aria-label="Next month"
                    disabled={monthDiff >= booking.monthsAhead}
                    onClick={() => shift(1)}
                  >
                    ›
                  </button>
                </div>
                <div className="dow" aria-hidden="true">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div className="days">
                  {cells.map((d, i) => {
                    if (d === null) return <span key={`e${i}`} />;
                    const dow = new Date(Date.UTC(view.y, view.m, d)).getUTCDay();
                    const ok = booking.workdays.includes(dow) && freeHours(view.y, view.m, d).length > 0;
                    const selected = day?.y === view.y && day.m === view.m && day.d === d;
                    return (
                      <button
                        type="button"
                        key={d}
                        className={`day${selected ? " sel" : ""}`}
                        disabled={!ok}
                        onClick={() => {
                          setDay({ y: view.y, m: view.m, d });
                          setHour(null);
                          setStatus("idle");
                          setMessage("");
                        }}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
                <div className="tz">
                  Times shown in Philippine Time (GMT+8). Your timezone: {tz}.
                </div>
              </>
            )}
          </div>

          <div className="panel">
            <div className="st">{day ? dayLabel(day) : "Select a date"}</div>
            <div className="slots">
              {!day && <p className="hintp">Available times appear here.</p>}
              {slots.map((h, i) => (
                <button
                  type="button"
                  key={`${day?.d}-${h}`}
                  className={`slot${hour === h ? " sel" : ""}`}
                  style={{ animationDelay: `${i * 0.04}s` }}
                  onClick={() => setHour(h)}
                >
                  {fmtHour(h)}
                </button>
              ))}
            </div>

            {day && hour !== null && (
              <form onSubmit={onSubmit}>
                <div className="chosen">
                  {dayLabel(day)}, {fmtHour(hour)} PHT · your time: {localLabel(day, hour)}
                </div>
                <div>
                  <label htmlFor="bk-name">Name</label>
                  <input
                    id="bk-name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="bk-email">Email</label>
                  <input
                    id="bk-email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="bk-note">What would you like to discuss? (optional)</label>
                  <textarea
                    id="bk-note"
                    maxLength={2000}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                <input
                  className="hp"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  name="website"
                  value={trap}
                  onChange={(e) => setTrap(e.target.value)}
                />
                <button className="btn primary" type="submit" disabled={status === "sending" || status === "sent"}>
                  {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Request this time"}
                </button>
                <div className={`msg${status === "sent" ? " ok" : status === "error" ? " err" : ""}`} role="status">
                  {message}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
