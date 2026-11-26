export default function Booking() {
  return (
    <>
      <section id="book">
        <div className="wave wb"></div>
        <div className="wrap">
          <div className="label reveal">Book a call</div>
          <h2 className="reveal" style={{"--d": ".06s"}}>Pick a time for a free discovery call</h2>
          <p className="lead reveal" style={{"--d": ".1s"}}>Choose a day and time that works for you. Your request goes straight to my inbox and I'll confirm by email.</p>
          <div className="book reveal" style={{"--d": ".14s"}}>
            <div className="panel">
              <div className="cal-head"><button id="cprev" type="button" aria-label="Previous month">‹</button><b id="cmonth"></b><button id="cnext" type="button" aria-label="Next month">›</button></div>
              <div className="dow" aria-hidden="true"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>
              <div className="days" id="days"></div>
              <div className="tz" id="tz"></div>
            </div>
            <div className="panel">
              <div className="st" id="st">Select a date</div>
              <div className="slots" id="slots"></div>
              <form id="form" hidden>
                <div className="chosen" id="chosen"></div>
                <div><label htmlFor="name">Name</label><input id="name" name="name" type="text" required autoComplete="name" /></div>
                <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
                <div><label htmlFor="note">What would you like to discuss? (optional)</label><textarea id="note" name="note"></textarea></div>
                <input className="hp" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button className="btn primary" id="send" type="submit">Request this time</button>
                <div className="msg" id="msg" role="status"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
