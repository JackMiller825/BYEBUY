import { lazy, Suspense, useEffect, useState } from "react";
import { startPublicAnalytics } from "./analytics/tracker";
import { CommunitySection } from "./components/CommunitySection";
import { BuySteps } from "./components/BuySteps";
import { Hero } from "./components/Hero";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StorySection } from "./components/StorySection";
import { TokenFacts } from "./components/TokenFacts";
import { isDashboardLocation } from "./dashboard/path";
import { useActiveSection } from "./hooks/useActiveSection";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export default function App() {
  const [dashboard, setDashboard] = useState(() => isDashboardLocation());
  const activeId = useActiveSection();

  useEffect(() => {
    const sync = () => setDashboard(isDashboardLocation());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    if (!dashboard) return;
    const previousTitle = document.title;
    document.title = "Private Visitor Dashboard";
    const meta = document.querySelector('meta[name="robots"]');
    if (meta) {
      const previous = meta.getAttribute("content");
      meta.setAttribute("content", "noindex, nofollow");
      return () => {
        if (previous) meta.setAttribute("content", previous);
        document.title = previousTitle;
      };
    }
    const created = document.createElement("meta");
    created.name = "robots";
    created.content = "noindex, nofollow";
    document.head.appendChild(created);
    return () => {
      created.remove();
      document.title = previousTitle;
    };
  }, [dashboard]);

  useEffect(() => {
    if (dashboard) return;
    return startPublicAnalytics();
  }, [dashboard]);

  if (dashboard) {
    return (
      <Suspense
        fallback={
          <main className="dash" id="dashboard-main">
            <h1>Private Visitor Dashboard</h1>
            <p role="status">Loading dashboard…</p>
          </main>
        }
      >
        <Dashboard />
      </Suspense>
    );
  }

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <SiteHeader activeId={activeId} />
      <main>
        <Hero />
        <StorySection />
        <TokenFacts />
        <BuySteps />
        <CommunitySection />
      </main>
      <SiteFooter />
    </>
  );
}
