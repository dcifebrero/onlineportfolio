export default function TrustStrip() {
  return (
    <>
      <div className="wrap">
        <div className="strip">
          <div className="reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg><p><b>Philippines · PHT (UTC+8)</b><span>Flexible overlap for US &amp; international clients</span></p></div>
          <div className="reveal" style={{"--d": ".1s"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><p><b>Replies within 24 business hours</b><span>Clear, reliable communication</span></p></div>
          <div className="reveal" style={{"--d": ".2s"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg><p><b>Human-checked automation</b><span>AI does the heavy lifting, I check the details</span></p></div>
        </div>
      </div>
    </>
  );
}
