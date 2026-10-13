import { assets, siteConfig } from "../config/siteConfig";
import { chartHref, dexHref } from "../config/destinations";
import { DestinationControl } from "./DestinationControl";

export function Hero() {
  const buyHref = dexHref();
  const chart = chartHref();

  return (
    <section
      id="home"
      className="section hero"
      aria-labelledby="home-heading"
      style={{ backgroundImage: `url("${assets.heroBackground}")` }}
    >
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">THE FRIENDLY FAREWELL</p>
          <h1 id="home-heading">
            Say bye. <span className="accent">Buy?</span>
          </h1>
          <p className="hero-text">
            A smiling whale waves goodbye while secretly selling and leaving
            with the ETH. Meet Bye Buy: the token joke where the farewell is
            friendly and the exit is suspicious.
          </p>
          <div className="action-row">
            <DestinationControl
              label={`Buy ${siteConfig.ticker}`}
              href={buyHref}
              pendingMessage={siteConfig.messages.linkPending}
              showNote={!buyHref}
              noteId="hero-buy-note"
            />
            <DestinationControl
              label="View chart"
              href={chart}
              pendingMessage={siteConfig.messages.chartPending}
              variant="secondary"
              showNote={!chart}
              noteId="hero-chart-note"
            />
          </div>
          <p className="trust-line">
            Ethereum token • Verify the contract before swapping
          </p>
        </div>
        <div className="hero-art">
          <img
            src={assets.heroCharacter}
            alt="Bye Buy, a lavender whale, waves with one fin while the other holds a red SELL control and a gold ETH suitcase. A cream farewell mask sits on its head."
            width={1254}
            height={1254}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
