import WorkCard from "./WorkCard";
import { cases } from "@/data/site";

export default function Work() {
  return (
    <section id="work">
      <div className="wave green" />
      <div className="wrap">
        <div className="label reveal">Work samples</div>
        <h2 className="reveal" style={{ "--d": ".06s" }}>
          Systems, built and tested.
        </h2>
        <p className="lead reveal" style={{ "--d": ".1s" }}>
          Hover a project to peek at its demo.
        </p>
        <div className="wgrid">
          {cases.map((c, i) => (
            <WorkCard key={c.title} study={c} delay={0.1 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}
