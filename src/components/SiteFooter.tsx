import { assets, navItems, siteConfig } from "../config/siteConfig";
import { telegramHref, xHref } from "../config/destinations";

function FooterExternal({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  if (!href) {
    return (
      <span className="footer-pending">
        {label}: {siteConfig.messages.linkPending}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <img
        className="wave-divider"
        src={assets.waveDivider}
        alt=""
        width={1920}
        height={220}
      />
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img
            src={assets.footerLogo}
            alt=""
            width={1024}
            height={1024}
          />
          <p className="footer-name">
            {siteConfig.name} / {siteConfig.ticker}
          </p>
          <p className="footer-tagline">A wave, a wink, and a questionable exit.</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <FooterExternal href={xHref()} label="X" />
            </li>
            <li>
              <FooterExternal href={telegramHref()} label="Telegram" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrap footer-legal">
        <p>
          BYEBUY is a meme token. Digital assets involve risk, may be highly
          volatile, and may lose all value. This site is informational and is
          not financial advice. Verify all details independently before
          interacting with a token or wallet.
        </p>
        <p className="copyright">© {siteConfig.year} Bye Buy community.</p>
      </div>
    </footer>
  );
}
