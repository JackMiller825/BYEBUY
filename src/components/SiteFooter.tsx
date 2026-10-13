import { trackCta } from "../analytics/tracker";
import { assets, navItems, siteConfig } from "../config/siteConfig";
import { telegramHref, xHref } from "../config/destinations";

export function SiteFooter() {
  const xUrl = xHref();
  const telegram = telegramHref();

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
        </div>
        <nav aria-label="Footer">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-social">
          {xUrl ? (
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta("x")}
            >
              <img src={assets.xIcon} alt="" width={128} height={128} />
              <span className="sr-only">Follow on X (opens in a new tab)</span>
            </a>
          ) : null}
          {telegram ? (
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta("telegram")}
            >
              <img
                src={assets.telegramIcon}
                alt=""
                width={128}
                height={128}
              />
              <span className="sr-only">
                Join Telegram (opens in a new tab)
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
