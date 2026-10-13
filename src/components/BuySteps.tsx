import { assets, siteConfig } from "../config/siteConfig";
import {
  chartHref,
  contractAddress,
  dexHref,
} from "../config/destinations";
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
  const address = contractAddress();

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
              {buyHref ? (
                <>
                  Use the confirmed official swap link{" "}
                  <a href={buyHref} target="_blank" rel="noopener noreferrer">
                    {buyHref}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  .
                </>
              ) : (
                <>
                  Use the confirmed official swap link. {siteConfig.messages.linkPending}
                </>
              )}{" "}
              Check that the network is Ethereum and compare the contract with{" "}
              {address ? (
                <code>{address}</code>
              ) : (
                <>the contract address on this site. {siteConfig.messages.contractPending}</>
              )}{" "}
              Review the amount and fees before confirming.
            </p>
          </li>
        </ol>
        <div className="buy-actions">
          <DestinationControl
            label="Open official buy link"
            href={buyHref}
            pendingMessage={siteConfig.messages.linkPending}
            showNote={!buyHref}
            noteId="buy-step-note"
          />
          <DestinationControl
            label="View chart"
            href={chart}
            pendingMessage={siteConfig.messages.chartPending}
            variant="secondary"
            showNote={!chart}
            noteId="chart-step-note"
          />
        </div>
        <p className="safety-note">
          Crypto assets are risky. A token can lose value or become difficult
          to sell. Only proceed if you understand the transaction and can
          afford the loss.
        </p>
      </div>
    </section>
  );
}
