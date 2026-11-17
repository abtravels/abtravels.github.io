# abtravels.github.io

AB Travels (Ahmed Brothers Travels) website — English + Urdu, static, served by GitHub Pages.
No build step: the site is plain HTML, CSS and JS at the repository root.

- Live: https://abtravels.github.io/
- Hisab app (separate project): https://abtravels.github.io/travel-office-hisab/
- Previous design backup: branch `old-design`

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, icon sprite, meta/SEO tags, JSON-LD |
| `style.css` | Design system, layout, responsive + RTL rules |
| `main.js` | English/Urdu dictionary, quote widget, calendar, route shortcuts, WhatsApp message builder |
| `assets/logo.png` | Logo (header, footer, favicon) |
| `assets/fonts/Manrope.ttf` | Self-hosted Manrope variable font (SIL OFL 1.1, see `assets/fonts/OFL.txt`) |
| `assets/fonts/OFL.txt` | Manrope font license |

## Sections

1. Sticky header — brand, nav, language toggle, WhatsApp button.
2. Hero — headline, chips, boarding-pass sample card.
3. Quote widget — five tabs: Flights, Umrah, Visa, Hotels, Tours.
   - Flights: one-way/return, 34-city combobox, swap, custom calendar, travellers + cabin, direct-only.
   - Other tabs: short validated forms.
   - Every form only builds a WhatsApp message; nothing is booked or charged on the site.
4. Support strip, popular routes (rendered from `main.js`), Umrah banner.
5. Services, why us, how it works, contact + quick quote form.
6. Footer and mobile WhatsApp/call bar.

## Language

- Toggle stores the choice in `localStorage` (`abt-lang`) and switches `lang`/`dir` on `<html>`.
- All copy lives in the `EN` and `UR` dictionaries at the top of `main.js`; markup uses `data-i18n`,
  `data-i18n-ph` (placeholder) attributes.
- Fares are never cached or hard-coded: the site asks visitors to confirm the live price on WhatsApp.

## Editing

- Text: change the dictionary value in `main.js` (and keep EN/UR in sync).
- Markup copy: `data-i18n="key"` on the element, then add `key` to both dictionaries.
- Cities: `CITIES` array in `main.js` (`code`, `city`, `ur`, `airport`, `country`, `countryUr`).
- Colours and spacing: CSS custom properties in `:root` inside `style.css`.

## Local preview

Because the site is static, any static file server works. For example:

```sh
npx serve .
# or
python -m http.server 4180
```

Then open http://localhost:4180/.

## Deploy

Push to `main`; GitHub Pages publishes the repository root automatically.
