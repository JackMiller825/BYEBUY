# Bye Buy design guide

## Direction
A storybook ocean with the approved lavender two-faced whale: a sunny, friendly greeting above the waterline that reveals a deeper violet ocean and a hidden SELL joke. This keeps the selected #10 mascot, mask, wave, suitcase, and friendly-but-sly tone.

## Colors
| Token | Hex | Use |
|---|---|---|
| Ink | `#24132F` | Primary text/outline |
| Lavender | `#AA87E8` | Mascot accents, links |
| Lavender dark | `#7352B5` | Primary CTA |
| Cream | `#FFF5E4` | Cards and light surfaces |
| Coral | `#FF695C` | SELL accent and warnings |
| Gold | `#FFC84D` | ETH suitcase/shine |
| Deep ocean | `#21143A` | Tokenomics/community/footer |

## Type and spacing
Use a rounded display sans such as Fredoka for headings and Inter for body text; the exact approved mockup font cannot be confirmed because the preview images were not available in the workspace. Keep body copy 16–18 px desktop and at least 16 px mobile; headings scale from 38–64 px desktop and 32–44 px mobile. Use an 8 px spacing scale, 16–24 px card radii, 1120–1240 px content max-width, and 44 px minimum interactive targets. Load fonts locally or from a licensed provider; ensure a system-sans fallback.

## Layout / responsive
One continuous page. Header anchors: Home `#home`, Story `#story`, Tokenomics `#tokenomics`, How to Buy `#how-to-buy`, Community `#community`; FAQ uses `#faq`. Sticky header 80 px desktop, compact mobile menu. Use desktop multi-column hero/story/cards; stack content on narrow screens, keep CTA order and contract visibility, avoid crop of mascot face/suitcase. Assets are reusable; backgrounds use `cover` only when focal elements remain clear, otherwise use CSS gradients and SVG backgrounds.

## Signature moments
- **Mask Check:** a small, optional reveal pairs the wave with the hidden SELL action.
- **Shoreline Story:** page color shifts from warm dusk to deep water as visitors scroll; all copy remains visible without motion.
- **Bye Buy Meme Lab:** choose a template, caption, and share without connecting a wallet.

## Interactions and accessibility
- Same-document section links, smooth scrolling; immediate behavior when `prefers-reduced-motion: reduce`.
- Sticky-header scroll offset via `scroll-margin-top`; update current section link with IntersectionObserver and `aria-current`.
- Mobile menu button uses `aria-expanded`, accessible label, focus management, Escape to close, closes after a section link is chosen.
- Visible 2–3 px focus ring in gold/ink; all controls usable by keyboard; no hover-only information.
- Optional mask reveal: button toggles the mask/copy with button semantics; static alt shows both meanings. Respect reduced motion; use a short opacity/translation transition only.
- Bye Buy Meme Lab: choose a template, caption, copy/download/share; provide labels and an accessible text alternative. No wallet connection needed.
- Static fallback keeps all information and both visual intentions visible without animation or JavaScript.

## Performance
Use responsive image sizes, `loading=lazy` below hero, explicit intrinsic dimensions, SVG for simple icons/backgrounds, and compressed PNG/WebP derivatives where alpha is required. Avoid heavy 3D, autoplay video, and large animation libraries.
