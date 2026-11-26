export default function Footer() {
  return (
    <>
      <footer>
        <div className="wave wc"></div>
        <div className="wrap">
          <img className="flogo lt" src="/img/logo-full.png" alt="PhewFlow Business Automation Solutions" width="1100" height="189" />
          <img className="flogo dk" src="/img/logo-full-dark.png" alt="PhewFlow Business Automation Solutions" width="1100" height="189" />
          <div className="fl"><a href="#about">About</a><a href="#tools">Tools</a><a href="#numbers">Impact</a><a href="#services">Services</a><a href="#work">Work</a><a href="#book">Book a call</a></div>
          <div className="fnote">© <span id="y"></span> Deo Febrero · Your business, flowing smarter.</div>
        </div>
      </footer>
    </>
  );
}
