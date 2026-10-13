import { CommunitySection } from "./components/CommunitySection";
import { BuySteps } from "./components/BuySteps";
import { Hero } from "./components/Hero";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StorySection } from "./components/StorySection";
import { TokenFacts } from "./components/TokenFacts";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const activeId = useActiveSection();

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
