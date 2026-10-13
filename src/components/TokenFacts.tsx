import { useId, useState } from "react";
import { assets, siteConfig } from "../config/siteConfig";
import { contractAddress } from "../config/destinations";
import { SectionHeading } from "./SectionHeading";

export function TokenFacts() {
  const address = contractAddress();
  const tokenomics = siteConfig.tokenomics.trim();
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const statusId = useId();
  const manualId = useId();

  async function copyAddress() {
    if (!address) return;
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is unavailable.");
      }
      await navigator.clipboard.writeText(address);
      setCopyState("success");
    } catch {
      setCopyState("error");
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
          <div className="fact-card">
            <dt>Network</dt>
            <dd>Ethereum</dd>
            <p className="fact-hint">Project intent. Deployment is not confirmed.</p>
          </div>
          <div className="fact-card">
            <dt>Ticker</dt>
            <dd>{siteConfig.ticker}</dd>
          </div>
          <div className="fact-card">
            <dt>Contract address</dt>
            <dd>{address ?? siteConfig.messages.contractPending}</dd>
          </div>
          <div className="fact-card">
            <dt>Tokenomics</dt>
            <dd>
              {tokenomics || siteConfig.messages.tokenomicsPending}
            </dd>
          </div>
        </dl>
        <div className="contract-tools">
          <button
            type="button"
            className="btn btn-primary"
            onClick={copyAddress}
            disabled={!address}
            aria-describedby={statusId}
          >
            Copy contract address
          </button>
          <p id={statusId} className="copy-status" aria-live="polite">
            {!address
              ? siteConfig.messages.contractPending
              : copyState === "success"
                ? "Contract copied"
                : copyState === "error"
                  ? "Copy failed — select and copy the address manually."
                  : ""}
          </p>
          {address && copyState === "error" ? (
            <label className="manual-copy" htmlFor={manualId}>
              Contract address
              <input
                id={manualId}
                readOnly
                value={address}
                onFocus={(event) => event.currentTarget.select()}
              />
            </label>
          ) : null}
          <p className="helper">
            Always verify the contract address on an independent Ethereum
            explorer. A token name or ticker alone does not identify a token.
          </p>
        </div>
      </div>
    </section>
  );
}
