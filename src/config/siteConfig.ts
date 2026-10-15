/**
 * Single source for project facts and external destinations.
 * Leave a string empty until the value is confirmed. Empty values render as
 * pending states. Do not add guessed addresses, supply figures, or unofficial links.
 *
 * Still awaiting confirmation:
 * - projectContact
 *
 * year is the publication year of this website (2026).
 * siteUrl is the stated production domain, byebuy.online.
 *
 * Fonts: Fredoka and Inter are self-hosted with Fontsource under the SIL Open
 * Font License. The asset package did not include the original comp font files,
 * so this is the design guide's recommended pairing, with system sans fallbacks.
 */
export const siteConfig = {
  name: "Bye Buy",
  ticker: "$BYEBUY",
  siteUrl: "https://byebuy.online",
  year: 2026,
  contractAddress: "0xf7e4c55282bd3138bd241a45cf05188388c780cc",
  contractPlaceholder: "Coming Soon..",
  totalSupply: "1,000,000,000",
  buySellTax: "0%",
  liquidityStatus: "Burn",
  ownership: "Renounce",
  tokenomics: "",
  officialXUrl: "https://x.com/byebuy_byebuy",
  officialTelegramUrl: "https://t.me/byebuybye",
  dexLink:
    "https://app.uniswap.org/swap?chain=mainnet&use=v2&outputCurrency=0xf7e4c55282bd3138bd241a45cf05188388c780cc",
  chartLink:
    "https://www.dextools.io/app/ether/pair-explorer/0x0d0e5481550059b3509bb0b6b333815df7e6b0de",
  projectContact: "",
  messages: {
    linkPending: "Official link will be added after verification.",
    contractPending: "Official contract address will be added after verification.",
    tokenomicsPending: "Confirmed tokenomics will be published after verification.",
    contactPending: "Project contact will be added after verification.",
    chartPending: "Chart link will be added after verification.",
  },
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "how-to-buy", label: "How to Buy" },
  { id: "community", label: "Community" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

const base = import.meta.env.BASE_URL;

export function publicAsset(path: string): string {
  return `${base}${path.replace(/^\//, "")}`;
}

export const assets = {
  logo: publicAsset("assets/byebuy/branding/byebuy-logo-transparent.png"),
  heroBackground: publicAsset("assets/byebuy/home/byebuy-home-background.svg"),
  heroCharacter: publicAsset("assets/byebuy/home/byebuy-home-character.png"),
  storyBackground: publicAsset("assets/byebuy/story/byebuy-story-background.svg"),
  storyCharacter: publicAsset("assets/byebuy/story/byebuy-story-character.png"),
  tokenomicsBackground: publicAsset(
    "assets/byebuy/tokenomics/byebuy-tokenomics-background.svg",
  ),
  ethMark: publicAsset("assets/byebuy/tokenomics/byebuy-tokenomics-eth-mark.svg"),
  buyBackground: publicAsset(
    "assets/byebuy/how-to-buy/byebuy-how-to-buy-background.svg",
  ),
  walletIcon: publicAsset("assets/byebuy/how-to-buy/byebuy-how-to-buy-wallet.svg"),
  ethIcon: publicAsset("assets/byebuy/how-to-buy/byebuy-how-to-buy-eth.svg"),
  swapIcon: publicAsset("assets/byebuy/how-to-buy/byebuy-how-to-buy-swap.svg"),
  communityBackground: publicAsset(
    "assets/byebuy/community/byebuy-community-background.svg",
  ),
  communityCharacter: publicAsset(
    "assets/byebuy/community/byebuy-community-character.png",
  ),
  crew: publicAsset("assets/byebuy/community/byebuy-community-crew.svg"),
  telegramIcon: publicAsset("assets/byebuy/community/byebuy-community-telegram.svg"),
  xIcon: publicAsset("assets/byebuy/community/byebuy-community-x.svg"),
  footerLogo: publicAsset("assets/byebuy/footer/byebuy-footer-logo.png"),
  waveDivider: publicAsset("assets/byebuy/footer/byebuy-footer-wave-divider.svg"),
} as const;
