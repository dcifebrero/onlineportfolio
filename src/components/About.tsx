const pillars = [
  {
    n: "01",
    title: "AI automation",
    text: "I explore AI-powered solutions and automated workflows that reduce repetitive tasks and simplify business processes.",
  },
  {
    n: "02",
    title: "Administrative support",
    text: "I bring structure to everyday operations through organized records, document preparation, research, and assistance.",
  },
  {
    n: "03",
    title: "Continuous learning",
    text: "Staying curious, exploring new technologies, and continuously improving my skills to deliver better support.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <div className="label reveal">A little about me</div>
          <h2 className="reveal" style={{ "--d": ".06s" }}>
            Your reliable partner in smarter business operations.
          </h2>
          <p className="reveal" style={{ "--d": ".1s" }}>
            I&apos;m passionate about helping business owners work smarter, stay organized, and simplify
            their day-to-day operations.
          </p>
          <p className="reveal" style={{ "--d": ".14s" }}>
            I believe running a business shouldn&apos;t mean getting buried in repetitive tasks. That&apos;s
            why I combine{" "}
            <strong>administrative support, attention to detail, and AI-powered tools</strong> to
            streamline workflows and make everyday processes more efficient.
          </p>
          <p className="reveal" style={{ "--d": ".18s" }}>
            From managing information and organizing business operations to exploring automation
            opportunities, I enjoy finding practical ways to make work easier and more manageable.
          </p>
          <div className="quote reveal" style={{ "--d": ".22s" }}>
            Technology works best when it&apos;s guided by human judgment.
          </div>
        </div>

        <div className="vals">
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className="val reveal"
              style={{ "--d": `${i * 0.08}s` }}
              data-tilt
            >
              <span className="n">{p.n}</span>
              <p>
                <b>{p.title}</b>
                <span className="t">{p.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
