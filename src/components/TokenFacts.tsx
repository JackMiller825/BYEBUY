import { useId, useState } from "react";
import { assets, siteConfig } from "../config/siteConfig";
import { contractAddress } from "../config/destinations";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Total supply", value: siteConfig.totalSupply },
  { label: "Buy / sell tax", value: siteConfig.buySellTax },
  { label: "Liquidity status", value: siteConfig.liquidityStatus },
  { label: "Ownership", value: siteConfig.ownership },
];

export function TokenFacts() {
  const publishedAddress = contractAddress();
  const displayAddress = publishedAddress ?? siteConfig.contractPlaceholder;
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const statusId = useId();
  const manualId = useId();

  async function copyAddress() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(displayAddress);
        setCopyState("success");
        return;
      }
      throw new Error("Clipboard API is unavailable.");
    } catch {
      const field = document.createElement("textarea");
      field.value = displayAddress;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      setCopyState(copied ? "success" : "error");
    }
  }

  return (
    <section
      id="tokenomics"
      className="section tokenomics"
      aria-labelledby="tokenomics-heading"
      style={{ backgroundImage: `url("${assets.tokenomicsBackground}")` }}
    >
      <div className="wrap">
        <div className="tokenomics-heading-row">
          <SectionHeading
            id="tokenomics-heading"
            title="The facts, clearly labeled."
            lede="No mystery numbers. Check the verified contract and confirmed token details before you trade."
            tone="dark"
          />
          <img
            className="eth-mark"
            src={assets.ethMark}
            alt=""
            width={160}
            height={200}
          />
        </div>
        <dl className="fact-grid">
          {facts.map((fact) => (
            <div key={fact.label} className="fact-card">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="contract-tools">
          <p className="contract-label">Contract address</p>
          <p className="contract-value">{displayAddress}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={copyAddress}
            aria-describedby={statusId}
          >
            Copy contract address
          </button>
          <p id={statusId} className="copy-status" aria-live="polite">
            {copyState === "success"
              ? "Contract copied"
              : copyState === "error"
                ? "Copy failed — select and copy the address manually."
                : ""}
          </p>
          {copyState === "error" ? (
            <label className="manual-copy" htmlFor={manualId}>
              Contract address
              <input
                id={manualId}
                readOnly
                value={displayAddress}
                onFocus={(event) => event.currentTarget.select()}
              />
            </label>
          ) : null}
        </div>
      </div>
    </section>
  );
}
