import CopyEmail from "./CopyEmail";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wave green" />
      <div className="ring2 r1" />
      <div className="ring2 r2" />
      <div className="wrap">
        <div className="label reveal">Contact</div>
        <h2 className="reveal" style={{ "--d": ".06s" }}>
          Tired of repetitive tasks? <em>Make your busywork my problem.</em>
        </h2>
        <p className="reveal" style={{ "--d": ".1s" }}>
          Reach me on Gmail or LinkedIn. Based in the {site.location} with flexible overlap for US and
          international clients.
        </p>
        <div className="cbtns reveal" style={{ "--d": ".16s" }}>
          <a className="btn yellow mag" href={`mailto:${site.email}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="M3.5 7l8.5 6 8.5-6" />
            </svg>
            Email me on Gmail
          </a>
          <a
  className="btn yellow mag"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dcifebrero@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Email me on Gmail
</a>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.5 3A2 2 0 1 0 4.5 7 2 2 0 0 0 4.5 3zM3 9h3v12H3zM9 9h2.9v1.7h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.5 2.4 4.5 5.6V21h-3v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
        <CopyEmail email={site.email} />
        <div className="loc">Replies within 24 business hours · {site.timezoneLabel}</div>
      </div>
    </section>
  );
}
