import { siteConfig } from "../config/siteConfig";
import {
  contactText,
  contractAddress,
  telegramHref,
  tokenomicsText,
  xHref,
} from "../config/destinations";
import { SectionHeading } from "./SectionHeading";

function linkOrPending(href: string | null, pending: string) {
  if (!href) return pending;
  return href;
}

export function FaqList() {
  const address = contractAddress();
  const contractPhrase = address ?? siteConfig.messages.contractPending;
  const xPhrase = linkOrPending(xHref(), siteConfig.messages.linkPending);
  const telegramPhrase = linkOrPending(
    telegramHref(),
    siteConfig.messages.linkPending,
  );
  const contact = contactText();
  const tokenomics = tokenomicsText();

  const items = [
    {
      question: "What is Bye Buy?",
      answer:
        "Bye Buy is an Ethereum token project built around a fictional whale who waves goodbye while secretly selling. The name plays on “bye-bye” and “buy.”",
    },
    {
      question: "Is the whale a real person?",
      answer:
        "No. The whale is an original fictional mascot. The story is a trading joke and does not imply endorsement or involvement by any person or project.",
    },
    {
      question: "How do I verify the token?",
      answer: address
        ? `Compare ${contractPhrase} on this site with the contract shown by a trusted Ethereum block explorer. Never rely on the name, ticker, logo, or search result alone.`
        : "Compare the contract address on this site with the contract shown by a trusted Ethereum block explorer. Official contract address will be added after verification. Never rely on the name, ticker, logo, or search result alone.",
    },
    {
      question: "What are the tokenomics?",
      answer: siteConfig.tokenomics.trim()
        ? `Confirmed details will be published here as ${tokenomics}. Do not assume supply, taxes, liquidity, ownership, or lock status until independently verified.`
        : "Confirmed details will be published here after verification. Do not assume supply, taxes, liquidity, ownership, or lock status until independently verified.",
    },
    {
      question: "Is buying BYEBUY safe or guaranteed to make money?",
      answer:
        "No. Crypto tokens are volatile and you could lose all the money you spend. This website makes no promise of profit or future value.",
    },
    {
      question: "Where are the official social channels?",
      answer:
        xHref() && telegramHref()
          ? `Use only ${xPhrase} and ${telegramPhrase} shown on this website. Treat unsolicited direct messages and lookalike accounts with caution.`
          : "Use only the official X and Telegram links shown on this website. Official link will be added after verification. Treat unsolicited direct messages and lookalike accounts with caution.",
    },
    {
      question: "How do I get help?",
      answer: telegramHref()
        ? `Ask in ${telegramPhrase} or contact ${contact}. Never share your wallet recovery phrase or private keys.`
        : "Ask in the official Telegram channel or contact the project. Official link will be added after verification. Never share your wallet recovery phrase or private keys.",
    },
  ];

  return (
    <section id="faq" className="section faq" aria-labelledby="faq-heading">
      <div className="wrap narrow">
        <SectionHeading id="faq-heading" title="FAQ" />
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>
                <h3>{item.question}</h3>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
