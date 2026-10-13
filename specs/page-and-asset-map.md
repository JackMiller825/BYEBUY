# Page and asset map

## Route
Single homepage `/` only. Header links scroll within the same document. The FAQ has `#faq` but is not required in the visible navigation if header space is constrained.

## Section order
1. Header (shared across the one-page site)
2. Hero `#home`
3. Story `#story`
4. Tokenomics `#tokenomics`
5. How to Buy `#how-to-buy`
6. Community `#community`
7. FAQ `#faq`
8. Footer

## Asset placement and preview references
| Section | Production assets | Placement | Preview references |
|---|---|---|---|
| Header | `branding/byebuy-logo-transparent.png`, `website/home/byebuy-home-logo.png` | Left mark; desktop links and one Buy CTA; mobile accessible menu | `02-byebuy-home-hero-desktop.png`, `08-byebuy-home-footer-and-header-desktop.png`, `12-byebuy-header-mobile-menu-open.png` |
| Hero | `branding/byebuy-character-cutout.png`, `website/home/byebuy-home-background.svg` | Character right desktop; stacked beneath hook on mobile. Background behind HTML copy | `01-byebuy-home-overview-desktop.png`, `02-byebuy-home-hero-desktop.png`, `09-byebuy-home-overview-mobile.png` |
| Story | `website/story/byebuy-story-character.png`, `website/story/byebuy-story-background.svg` | Three narrative beats beside mascot desktop; stack mobile | `03-byebuy-home-story-desktop.png`, `10-byebuy-home-story-mobile.png`, `13-byebuy-story-mask-interaction.png` |
| Tokenomics | `website/tokenomics/byebuy-tokenomics-background.svg`, `website/tokenomics/byebuy-tokenomics-eth-mark.svg` | Background plus HTML metric cards and copy control | `04-byebuy-home-tokenomics-desktop.png`, `11-byebuy-home-tokenomics-how-to-buy-mobile.png` |
| How to Buy | `website/how-to-buy/byebuy-how-to-buy-background.svg`, `website/how-to-buy/byebuy-how-to-buy-wallet.svg`, `website/how-to-buy/byebuy-how-to-buy-eth.svg`, `website/how-to-buy/byebuy-how-to-buy-swap.svg` | 3-card flow desktop, stack mobile | `05-byebuy-home-how-to-buy-desktop.png`, `11-byebuy-home-tokenomics-how-to-buy-mobile.png` |
| Community | `website/community/byebuy-community-background.svg`, `website/community/byebuy-community-character.png`, `website/community/byebuy-community-crew.svg`, social icons | Crew art and Meme Lab card; social buttons | `06-byebuy-home-community-desktop.png`, `14-byebuy-community-meme-lab-state.png` |
| FAQ | HTML accordion or disclosure list | Keep answers readable without JS; allow multiple open or one open | `07-byebuy-home-faq-desktop.png` |
| Footer | `website/footer/byebuy-footer-logo.png`, `website/footer/byebuy-footer-wave-divider.svg` | Divider then dark footer; link list/risk note in HTML | `08-byebuy-home-footer-and-header-desktop.png`, `09-byebuy-home-overview-mobile.png` |
| Share/social | `social/byebuy-social-share-1200x630.png`, `social/byebuy-banner-3to1.png`, `social/byebuy-banner-1100x520.png` | OG/Twitter card, X profile/banner, Telegram channel banner | Social rather than page preview |

## Preview notes
All files in `previews/` are front-facing design mockups, not working webpage controls. The source images contain representative states; implement functionality as described in design-guide.md.

## Missing confirmed data
Contract, exact tokenomics, deployed buy/chart link, official X/Telegram URLs, contact, and copyright year remain placeholders. Do not replace them with invented values.

## Source/version status
The selected token concept, mascot, logo, and both exact-size banners are reused from approved project files. Website section backgrounds and simple vector accents are reconstructed from written section descriptions because original website preview files were not available locally; these are labeled reconstructed in the manifest. Preview PNGs are newly rendered in this workflow.
