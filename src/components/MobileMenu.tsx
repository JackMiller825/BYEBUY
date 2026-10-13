import { useEffect, useId, useRef, useState } from "react";
import { navItems, siteConfig, type SectionId } from "../config/siteConfig";
import { dexHref } from "../config/destinations";
import { DestinationControl } from "./DestinationControl";

type MobileMenuProps = {
  activeId: SectionId;
};

export function MobileMenu({ activeId }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const buyHref = dexHref();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1081px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeAfterNavigate = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="menu-icon" aria-hidden="true">
          {open ? "×" : "☰"}
        </span>
      </button>
      <div id={menuId} className="mobile-panel" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "location" : undefined}
                  onClick={closeAfterNavigate}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <DestinationControl
          label={`Buy ${siteConfig.ticker}`}
          href={buyHref}
          pendingMessage={siteConfig.messages.linkPending}
        />
      </div>
    </div>
  );
}
