import { useEffect, useState } from "react";
import { navItems, type SectionId } from "../config/siteConfig";

const sectionIds = navItems.map((item) => item.id);

function sectionFromHash(): SectionId {
  const hash = window.location.hash.replace("#", "");
  const match = sectionIds.find((id) => id === hash);
  return match ?? "home";
}

export function useActiveSection(): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(sectionFromHash);

  useEffect(() => {
    const onHashChange = () => setActiveId(sectionFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id && sectionIds.includes(id as SectionId)) {
          setActiveId(id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
