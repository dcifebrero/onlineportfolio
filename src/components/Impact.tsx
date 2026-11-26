export default function Impact() {
  return (
    <>
      <section id="numbers">
        <div className="wrap">
          <div className="label reveal">By the numbers</div>
          <h2 className="reveal" style={{"--d": ".06s"}}>What research says about manual work</h2>
          <p className="lead reveal" style={{"--d": ".1s"}}>Independent studies on how much time goes into repetitive work, and how much of it technology can take over.</p>

          <div className="stats">
            <div className="stat reveal" data-tilt>
              <div className="num"><span className="count" data-to="28" data-suffix="%">0%</span></div>
              <p>of the workweek, about 13 hours, goes to reading and answering email.</p>
              <a className="src" href="https://www.govexec.com/technology/2012/07/workers-spend-650-hours-year-email/57097" target="_blank" rel="noopener noreferrer">McKinsey Global Institute, 2012 ↗</a>
            </div>
            <div className="stat reveal" style={{"--d": ".08s"}} data-tilt>
              <div className="num"><span className="count" data-to="50" data-prefix="~" data-suffix="%">0%</span></div>
              <p>of the activities people are paid to do could potentially be automated with technology that already exists.</p>
              <small>Yet under 5% of occupations can be fully automated. Human judgment stays essential.</small>
              <a className="src" href="https://www.mckinsey.com/capabilities/operations/our-insights/harnessing-automation-for-a-future-that-works" target="_blank" rel="noopener noreferrer">McKinsey Global Institute, 2017 ↗</a>
            </div>
            <div className="stat reveal" style={{"--d": ".16s"}} data-tilt>
              <div className="num"><span className="count" data-to="51" data-suffix="%">0%</span></div>
              <p>of activities in the US economy are data collection, data processing or predictable physical work, the most automatable kinds.</p>
              <a className="src" href="https://www.mckinsey.com/capabilities/operations/our-insights/harnessing-automation-for-a-future-that-works" target="_blank" rel="noopener noreferrer">McKinsey Global Institute, 2017 ↗</a>
            </div>
            <div className="stat reveal" data-tilt>
              <div className="num"><span className="count" data-to="60" data-suffix="%+">0%+</span></div>
              <p>of knowledge workers' time goes to "work about work," coordinating work instead of doing it.</p>
              <small>Survey of 13,000+ knowledge workers worldwide.</small>
              <a className="src" href="https://asana.com/resources/anatomy-of-work-index" target="_blank" rel="noopener noreferrer">Asana, Anatomy of Work Index 2021 ↗</a>
            </div>
            <div className="stat reveal" style={{"--d": ".08s"}} data-tilt>
              <div className="num"><span className="count" data-to="70" data-prefix="~" data-suffix="%">0%</span></div>
              <p>of small-business employees say automation software has made them more productive.</p>
              <small>Survey of 2,000 US knowledge workers at companies with under 250 employees.</small>
              <a className="src" href="https://zapier.com/blog/state-of-business-automation-2021/" target="_blank" rel="noopener noreferrer">Zapier, State of Business Automation 2021 ↗</a>
            </div>
            <div className="stat reveal" style={{"--d": ".16s"}} data-tilt>
              <div className="num"><span className="count" data-to="34" data-suffix="%">0%</span></div>
              <p>say automation lets them spend less time on administrative tasks.</p>
              <small>Same survey of 2,000 US small-business employees.</small>
              <a className="src" href="https://zapier.com/blog/state-of-business-automation-2021/" target="_blank" rel="noopener noreferrer">Zapier, State of Business Automation 2021 ↗</a>
            </div>
          </div>
          <p className="srcs reveal">Figures are quoted from the linked reports. The 2012 email figure is as reported by Government Executive from McKinsey Global Institute research. Surveys show what workers report and what is technically possible, not a guaranteed result for any one business.</p>

          <div className="calc reveal" id="calc">
            <div className="calc-in">
              <h3>What could automation give back to you?</h3>
              <p>Move the sliders to match your week. The default share is set below McKinsey's "about half" estimate to stay realistic.</p>
              <div className="fld"><label htmlFor="cHrs">Hours per week on repetitive tasks <output id="oHrs">10 h</output></label><input id="cHrs" type="range" min="1" max="40" defaultValue="10" /></div>
              <div className="fld"><label htmlFor="cShare">Share of those tasks automated <output id="oShare">40%</output></label><input id="cShare" type="range" min="10" max="80" step="5" defaultValue="40" /></div>
              <div className="fld"><label htmlFor="cRate">Value of one hour of your time</label>
                <div className="row2"><input id="cRate" type="number" min="1" max="1000" defaultValue="15" /><select id="cCur" aria-label="Currency"><option value="$">USD $</option><option value="₱">PHP ₱</option><option value="€">EUR €</option><option value="£">GBP £</option><option value="A$">AUD A$</option></select></div>
              </div>
            </div>
            <div className="calc-out">
              <div className="k">You could get back</div>
              <div className="big"><span id="rWeek">4</span><small>hours / week</small></div>
              <div className="mini">
                <div><b id="rYear">200</b><span>hours per year</span></div>
                <div><b id="rDays">25</b><span>full workdays per year</span></div>
                <div style={{gridColumn: "1/-1"}}><b id="rVal">$3,000</b><span>of time value per year</span></div>
              </div>
              <div className="bars">
                <div>Today<div className="bar-t"><i id="bBefore" style={{width: "100%"}}></i></div></div>
                <div>With automation<div className="bar-t"><i id="bAfter" style={{width: "60%"}}></i></div></div>
              </div>
              <p className="note">An illustration, not a promise. It assumes 50 working weeks a year and an 8-hour workday. A discovery call turns it into a real estimate for your workflows.</p>
              <a className="btn yellow sm" href="#book">Get my real estimate <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
