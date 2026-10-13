# Bye Buy / $BYEBUY

The production site is a Vite + React + TypeScript app in this repository. Project facts and external links live only in `src/config/siteConfig.ts`. Contract, tokenomics, buy, chart, X, Telegram, and contact are empty until confirmed, and the page shows a pending state for each one.

```bash
npm install
npm run dev
npm run lint
npm run build
```

`npm run build` writes `dist/`. GitHub Pages deploys that folder from `.github/workflows/pages.yml`, with `public/CNAME` set to `byebuy.online`.

Fredoka (headings) and Inter (body) are self-hosted through Fontsource under the SIL Open Font License. The asset package did not include the original section-comp font files, so this is the design guide’s recommended pairing, with system sans fallbacks.

Section backgrounds and simple vector accents in `website/` are reconstructed assets from the package. Text and controls are HTML. Preview files in `previews/` are design references and are not used as page images.

# Bye Buy / $BYEBUY — complete website design and asset package

This package is prepared for a later Cursor build. It includes one-page responsive design mockups, reusable brand and section artwork, social graphics, complete website copy, implementation specifications, and an asset manifest.

## Start here
1. Read `brand-info.txt` and `content/website-copy.md`.
2. Review `specs/design-guide.md` and `specs/page-and-asset-map.md`.
3. Inspect `previews/` in numeric order; files are design mockups, not live pages.
4. Use the production images in `branding/`, `website/`, and `social/`; implement all text and controls as HTML/CSS.
5. Keep unknown facts as placeholders until verified.

## Reference sites inspected
- Dogecoin: https://dogecoin.com/ and https://dogecoin.com/dogepedia/ — approachable getting-started steps, community entry points, FAQ/resources, and accessible educational grouping.
- Shiba Inu: https://shib.io/ — topic-grouped ecosystem/tokens/community/developers navigation.
- Floki: https://floki.com/ — mascot-led visual sections, prominent action links, ecosystem storytelling, and footer resources.

Observed structures inform navigation and clarity only. Bye Buy artwork and copy are original to this project. The linked sites may change after this review.

## Fonts and external assets
Suggested font pairing is Fredoka (headings) and Inter (body), with system sans fallbacks. These are recommendations, not confirmed fonts from the missing approved preview images. No external stock artwork is required. For web font hosting, use official font files under their applicable open licenses or locally self-host.

## Accuracy and missing data
Token name/ticker and mascot direction are approved. Project has Ethereum mainnet intent, but no contract or tokenomics values were supplied. Buy, chart, X, Telegram, project contact, and year remain placeholders. Avoid making claims about supply, taxes, LP locks, ownership renouncement, listing, returns, or audience size until confirmed.

## Integrity
`assets-manifest.csv` lists every image/SVG asset in this package. Preview mockups are PNGs; social banner files use their exact required dimensions.
