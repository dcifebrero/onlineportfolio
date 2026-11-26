export default function Tools() {
  return (
    <>
      <section id="tools">
        <div className="wave w2"></div>
        <div className="wrap">
          <div className="label reveal">Tools I use</div>
          <h2 className="reveal" style={{"--d": ".06s"}}>The stack behind the workflows</h2>
          <p className="lead reveal" style={{"--d": ".1s"}}>From automation platforms and AI models to the everyday apps your team already lives in.</p>
        </div>
        <div className="marq reveal" style={{"--d": ".12s"}}><div className="track" id="trackA"></div></div>
        <div className="marq rev reveal" style={{"--d": ".16s"}}><div className="track" id="trackB"></div></div>
        <div className="wrap"><div className="hint-s reveal">Hover over the banner to pause it.</div></div>
      </section>
    </>
  );
}
