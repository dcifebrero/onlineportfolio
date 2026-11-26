export default function About() {
  return (
    <>
      <section id="about">
        <div className="wrap about">
          <div>
            <div className="label reveal">A little about me</div>
            <h2 className="reveal" style={{"--d": ".06s"}}>Your reliable partner in smarter business operations.</h2>
            <p className="reveal" style={{"--d": ".1s"}}>I'm passionate about helping business owners work smarter, stay organized, and simplify their day-to-day operations.</p>
            <p className="reveal" style={{"--d": ".14s"}}>I believe running a business shouldn't mean getting buried in repetitive tasks. That's why I combine <strong>administrative support, attention to detail, and AI-powered tools</strong> to streamline workflows and make everyday processes more efficient.</p>
            <p className="reveal" style={{"--d": ".18s"}}>From managing information and organizing business operations to exploring automation opportunities, I enjoy finding practical ways to make work easier and more manageable.</p>
            <div className="quote reveal" style={{"--d": ".22s"}}>Technology works best when it's guided by human judgment.</div>
          </div>
          <div className="vals">
            <div className="val reveal" data-tilt><span className="n">01</span><p><b>AI automation</b><span className="t">I explore AI-powered solutions and automated workflows that reduce repetitive tasks and simplify business processes.</span></p></div>
            <div className="val reveal" style={{"--d": ".08s"}} data-tilt><span className="n">02</span><p><b>Administrative support</b><span className="t">I bring structure to everyday operations through organized records, document preparation, research, and assistance.</span></p></div>
            <div className="val reveal" style={{"--d": ".16s"}} data-tilt><span className="n">03</span><p><b>Continuous learning</b><span className="t">Staying curious, exploring new technologies, and continuously improving my skills to deliver better support.</span></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
