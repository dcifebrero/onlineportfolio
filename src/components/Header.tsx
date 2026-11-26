export default function Header() {
  return (
    <>
      <header id="hdr">
        <div className="wrap">
          <nav aria-label="Main">
            <a href="#top" className="brand">
              <img className="lt" src="/img/pf-light.png" alt="PhewFlow logo" /><img className="dk" src="/img/pf-dark.png" alt="PhewFlow logo" />
              <span className="bt"><span className="pf">PhewFlow<span className="bas"> Business Automation Solutions</span></span></span>
            </a>
            <div className="nav-r">
              <ul>
                <li className="hm"><a href="#about">About</a></li>
                <li className="hm"><a href="#tools">Tools</a></li>
                <li className="hm"><a href="#numbers">Impact</a></li>
                <li className="hm"><a href="#services">Services</a></li>
                <li className="hm"><a href="#work">Work</a></li>
                <li><a className="btn primary sm" href="#book">Book a call</a></li>
              </ul>
              <div className="rope" id="rope">
                <div className="rope-in" id="ropeIn">
                  <div className="cord"></div>
                  <button className="knob" id="theme" type="button" aria-label="Pull the cord to switch to night mode" title="Pull the cord">
                    <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
                    <svg className="moon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
                  </button>
                </div>
                <span className="rope-tip">Pull for day / night</span>
              </div>
            </div>
          </nav>
        </div>
        <div id="bar"></div>
      </header>
    </>
  );
}
