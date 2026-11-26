export default function HowIWork() {
  return (
    <>
      <section id="how">
        <div className="wave w2"></div>
        <div className="wrap">
          <div className="label reveal">How I work</div>
          <h2 className="reveal" style={{"--d": ".06s"}}>Automation, with a human in the loop</h2>
          <p className="lead reveal" style={{"--d": ".1s"}}>Tap a step, or just watch it flow.</p>
          <div className="flow reveal" style={{"--d": ".14s"}} id="flow">
            <div className="rail" aria-hidden="true"><i id="fill"></i></div>
            <div className="nodes" id="nodes"></div>
            <div className="fdesc" id="fdesc" aria-live="polite"></div>
          </div>

          <div className="sim reveal" id="sim">
            <div>
              <h3>Try it: watch my email workflow decide</h3>
              <p className="sub2">This mirrors a real n8n workflow I built (see Work samples). Pick a sample email and follow it through. The emails are made up for illustration.</p>
              <div className="emails" id="emails"></div>
            </div>
            <div>
              <div className="pipe" id="pipe"></div>
              <div className="sim-out" id="simOut"><p>Select an email to start.</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
