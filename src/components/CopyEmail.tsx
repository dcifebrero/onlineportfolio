"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const show = (text: string) => {
    setToast(text);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2200);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      show("Email copied ✓");
    } catch {
      show(email);
    }
  };

  return (
    <>
      <button className="copy" type="button" onClick={copy}>
        or copy {email}
      </button>
      <div id="toast" className={toast ? "on" : ""} role="status">
        {toast}
      </div>
    </>
  );
}
