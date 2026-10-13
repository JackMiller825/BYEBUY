import { useState } from "react";
import { assets } from "../config/siteConfig";
import { SectionHeading } from "./SectionHeading";

const beats = [
  {
    title: "The greeting",
    copy: "At first, the whale looks like the friendliest trader in the ocean. One fin waves hello.",
  },
  {
    title: "The mask slips",
    copy: "The other fin finds the SELL button. Then the mask slips.",
  },
  {
    title: "The exit",
    copy: "The suitcase is packed, and the chart is left to sink.",
  },
];

export function StorySection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="story"
      className="section story"
      aria-labelledby="story-heading"
      style={{ backgroundImage: `url("${assets.storyBackground}")` }}
    >
      <div className="wrap">
        <SectionHeading
          id="story-heading"
          title="A wave with two meanings."
          lede="At first, the whale looks like the friendliest trader in the ocean. One fin waves hello. The other finds the SELL button. Then the mask slips, the suitcase is packed, and the chart is left to sink."
        />
        <p className="story-note">
          That is the whole Bye Buy joke: “bye-bye” sounds like a sweet goodbye,
          while “buy” sits beside the whale’s very different plan.
        </p>
        <div className="story-grid">
          <ol className="beat-list">
            {beats.map((beat, index) => (
              <li key={beat.title} className="beat-card">
                <span className="step-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{beat.title}</h3>
                  <p>{beat.copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="story-art">
            <img
              src={assets.storyCharacter}
              alt="The Bye Buy whale with its cream farewell mask raised, a sly grin, a waving fin, a red SELL control, and a gold ETH suitcase."
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="mask-check">
          <div
            id="mask-reveal"
            className="mask-card"
            data-revealed={revealed ? "true" : "false"}
          >
            <p className="mask-wave">The wave says “bye-bye.”</p>
            <p className="mask-sell" hidden={!revealed}>
              The other fin says SELL.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            aria-expanded={revealed}
            aria-controls="mask-reveal"
            onClick={() => setRevealed((current) => !current)}
          >
            {revealed ? "Hide the other side" : "Show the other side"}
          </button>
        </div>
      </div>
    </section>
  );
}
