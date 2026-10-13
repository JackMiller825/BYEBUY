import { assets, navItems, siteConfig, type SectionId } from "../config/siteConfig";
import { dexHref } from "../config/destinations";
import { DestinationControl } from "./DestinationControl";
import { MobileMenu } from "./MobileMenu";

type SiteHeaderProps = {
  activeId: SectionId;
};

export function SiteHeader({ activeId }: SiteHeaderProps) {
  const buyHref = dexHref();

  return (
    <header className="site-header">
      <div className="header-bar">
        <a className="brand" href="#home">
          <img
            src={assets.logo}
            alt=""
            width={1024}
            height={1024}
          />
          <span>{siteConfig.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-cta">
          <DestinationControl
            label={`Buy ${siteConfig.ticker}`}
            href={buyHref}
            pendingMessage={siteConfig.messages.linkPending}
            track="buy"
          />
        </div>
        <MobileMenu activeId={activeId} />
      </div>
    </header>
  );
}
