export default function Hero() {
  return (
    <>
      <div className="hero" id="hero">
        <div className="blob b1"></div><div className="blob b2"></div><div className="glow"></div>
        <div className="wrap">
          <div>
            <span className="pill reveal"><i className="dot"></i>Open to remote roles, freelance &amp; part-time</span>
            <h1 className="reveal" style={{"--d": ".08s"}}>Less manual work, more room to <span className="grow">grow.<svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 C 25 1, 55 12, 98 3"/></svg></span></h1>
            <p className="sub reveal" style={{"--d": ".16s"}}>Hi, I'm Deo, an AI Automation Virtual Assistant helping business owners streamline daily operations through smart automation and reliable administrative support.</p>
            <div className="rot-line reveal" style={{"--d": ".22s"}}>Let's take <span className="rot" id="rot">email triage</span> off your plate.</div>
            <div className="btns reveal" style={{"--d": ".3s"}}>
              <a className="btn primary mag" href="#book">Book a discovery call <span className="arr">→</span></a>
              <a className="btn ghost mag" href="#work">Explore my work</a>
            </div>
          </div>
          <div className="stage reveal" style={{"--d": ".2s"}} data-tilt>
            <div className="ring"></div>
            <div className="photo"><img src="/img/deo.jpg" alt="Deo Febrero" width="900" height="900" /></div>
            <span className="chip-f c1" data-tool="n8n"></span>
            <span className="chip-f c2" data-tool="Claude"></span>
            <span className="chip-f c3" data-tool="Gmail"></span>
            <span className="chip-f c4" data-tool="Zapier"></span>
          </div>
        </div>
      </div>
    </>
  );
}
