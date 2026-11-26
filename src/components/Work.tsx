export default function Work() {
  return (
    <>
      <section id="work">
        <div className="wave wg"></div>
        <div className="wrap">
          <div className="label reveal">Work samples</div>
          <h2 className="reveal" style={{"--d": ".06s"}}>Systems, built and tested.</h2>
          <p className="lead reveal" style={{"--d": ".1s"}}>Real n8n workflows from my own builds. Hover to peek at the demo, click to zoom.</p>
          <div className="wgrid">

            <div className="reveal" style={{"--d": ".1s"}}><article className="wc">
              <button className="shot" type="button" data-cap="Email management with Ollama and Gmail (n8n workflow)">
                <div className="chrome"><i></i><i></i><i></i><span>n8n · Email management workflow</span></div>
                <img src="/img/shot-email.jpg" alt="n8n workflow: Gmail trigger, AI categorizer with Ollama, rules for reply, draft or nothing, then a draft flagged for human review" width="1329" height="545" />
                <div className="ov"><div><div className="play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg></div><b>Demo coming soon</b><span>Click to zoom the workflow</span></div></div>
                <span className="zoom">Click to zoom</span>
              </button>
              <div className="wb">
                <div className="wtag">Case study 01</div>
                <h3>Automate email management with Ollama and Gmail for smart responses</h3>
                <dl>
                  <div><dt>The solution</dt><dd>Integrated Gmail with local Ollama LLMs to triage incoming messages and draft tailored replies automatically.</dd></div>
                  <div><dt>Key benefit</dt><dd>Eliminates third-party cloud data exposure and recurring AI API costs while keeping human-in-the-loop approval.</dd></div>
                  <div><dt>Impact</dt><dd>Reduces inbox management time by hours each week with near-instant draft generation.</dd></div>
                </dl>
                <div className="chips"><i>n8n</i><i>Gmail</i><i>Ollama</i><i>Human-in-the-loop</i></div>
              </div>
            </article></div>

            <div className="reveal" style={{"--d": ".2s"}}><article className="wc">
              <button className="shot" type="button" data-cap="Automated YouTube clipping pipeline (n8n workflow)">
                <div className="chrome"><i></i><i></i><i></i><span>n8n · YouTube clipping workflow</span></div>
                <img src="/img/shot-clip.jpg" alt="n8n workflow: videos to clip, analyze, check status, clip and create high-res video, export, schedule, upload and update status" width="1339" height="546" />
                <div className="ov"><div><div className="play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg></div><b>Demo coming soon</b><span>Click to zoom the workflow</span></div></div>
                <span className="zoom">Click to zoom</span>
              </button>
              <div className="wb">
                <div className="wtag">Case study 02</div>
                <h3>Automate YouTube clipping</h3>
                <dl>
                  <div><dt>The solution</dt><dd>Built an automated content repurposing pipeline that monitors new YouTube uploads, transcribes audio, identifies high-engagement hooks, and cuts them into vertical 9:16 shorts with burned-in captions.</dd></div>
                  <div><dt>Key benefit</dt><dd>Eliminates hours of manual scrubbing, cropping, and subtitling, turning every long-form video into ready-to-publish TikToks, Reels, and YouTube Shorts automatically.</dd></div>
                  <div><dt>Impact</dt><dd>Scales daily short-form content output consistently without hiring dedicated video editors or slowing down production schedules.</dd></div>
                </dl>
                <div className="chips"><i>n8n</i><i>Google Sheets</i><i>Klap</i><i>Blotato</i><i>YouTube Shorts</i></div>
              </div>
            </article></div>

          </div>
        </div>
      </section>
    </>
  );
}
