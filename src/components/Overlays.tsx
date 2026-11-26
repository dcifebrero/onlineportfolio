export default function Overlays() {
  return (
    <>
      <dialog id="lb" aria-label="Workflow screenshot">
        <button className="close" id="lbx" type="button" aria-label="Close">×</button>
        <img id="lbimg" alt="" />
        <div className="cap"><span id="lbcap"></span><span className="soon">Demo video coming soon</span></div>
      </dialog>
      <button id="up" type="button" aria-label="Back to top">↑</button>
      <div id="toast" role="status"></div>
    </>
  );
}
