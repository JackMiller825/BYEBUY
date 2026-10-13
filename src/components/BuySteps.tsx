import { assets } from "../config/siteConfig";
import { chartHref, dexHref } from "../config/destinations";
import { DestinationControl } from "./DestinationControl";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Set up a wallet",
    icon: assets.walletIcon,
    iconWidth: 200,
    iconHeight: 160,
    body: "Choose a self-custody wallet that supports Ethereum. Back up your recovery phrase offline. Never share it with anyone.",
  },
  {
    title: "Add ETH",
    icon: assets.ethIcon,
    iconWidth: 160,
    iconHeight: 200,
    body: "Fund the wallet with ETH. Keep some ETH available for Ethereum network fees.",
  },
] as const;

export function BuySteps() {
  const buyHref = dexHref();
  const chart = chartHref();

  return (
    <section
      id="how-to-buy"
      className="section how-to-buy"
      aria-labelledby="buy-heading"
      style={{ backgroundImage: `url("${assets.buyBackground}")` }}
    >
      <div className="wrap">
        <SectionHeading
          id="buy-heading"
          title="Three steps. Take your time."
        />
        <ol className="step-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="step-card">
              <img
                src={step.icon}
                alt=""
                width={step.iconWidth}
                height={step.iconHeight}
              />
              <span className="step-index" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
          <li className="step-card">
            <img
              src={assets.swapIcon}
              alt=""
              width={200}
              height={170}
            />
            <span className="step-index" aria-hidden="true">
              3
            </span>
            <h3>Swap carefully</h3>
            <p>
              Use the confirmed official swap link. Check that the network is
              Ethereum and compare the contract with the contract address on
              this site.
            </p>
          </li>
        </ol>
        <div className="buy-actions">
          <DestinationControl
            label="Open official buy link"
            href={buyHref}
            pendingMessage=""
          />
          <DestinationControl
            label="View chart"
            href={chart}
            pendingMessage=""
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
