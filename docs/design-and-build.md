# estheryekini.com design and build notes

Hand this file and `site-copy.md` to any AI or developer working on the site. It explains what the site is for, how it looks, how it's built, and what's left to do.

## What the site is for

One job. Get a charity to send an enquiry about replacing a software subscription they pay for monthly with a tool Esther builds once and hands over.

- **Audience.** Charity CEOs, finance leads and trustees. Not technical. Under budget pressure. Wary of tech suppliers overselling.
- **Offer.** Stop renting your software. Own it. One-off fixed fee. Prices are deliberately not shown on the site so smaller jobs still enquire. Hosting is often free, worst case around £10 a month. Handover docs plus 3 months support included. Optional support after that, always cheaper than the old subscription.
- **Proof.** A payment approval system replacing Jotform for a national church charity, live since July 2026. Keep the client anonymous everywhere. Talk about scale as capability (every branch, built to handle thousands of requests a day, grows without a bigger bill), never as small fixed counts.
- **Every visitor arrives from a cold email** linking to the site, so the first screen has to make the offer clear in five seconds.

## Design direction: "Ledger"

Printed paper, black ink, one deep green accent. Money figures are set in a monospace face like a till receipt. The savings calculator in the hero is styled as a receipt with a torn bottom edge. This ties the look to the money message and to Esther's finance background.

The site is deliberately light only. It's meant to look like paper.

### Colours (CSS variables in `styles.css`)

| Token | Hex | Use |
|---|---|---|
| `--page` | #EDEEE9 | Page background, off-white paper |
| `--slip` | #FFFFFF | Receipt, cards, form |
| `--ink` | #1B1F1C | Text, primary button |
| `--ink-soft` | #5A615B | Secondary text |
| `--rule` | #C9CBC2 | Dividers, dotted leaders, input borders |
| `--green` | #1E5B40 | The one accent. Savings, highlights, focus rings, button hover |
| `--green-tint` | #E3EEE7 | "You keep" box, approved pill |
| `--red` | #A8352B | Renting cost and "Keep paying for" heading only |
| `--navy` | #1E2A3A | Top bar of the app illustration only |

### Type

- **Schibsted Grotesk** (Google Fonts), weights 400, 500, 600, 800. Everything except figures. Headlines are 800 with tight negative letter-spacing.
- **DM Mono** (Google Fonts), 400 and 500. Prices, totals, reference numbers, step numbers. Always with `tabular-nums`.

### Rules that keep it from looking AI-made

- No gradients, no purple, no glow, no emoji.
- No all-caps eyebrow labels above headings.
- No identical rounded cards with soft shadows everywhere. White boxes are used only where something is a "document" (receipt, ledger, form, the two rebuild lists).
- Dotted leader lines join labels to figures, like a receipt or a bank statement.
- Left-aligned text. Nothing centred except inside the receipt header.
- One accent colour. Red appears only for "renting" costs.

## How it's built

- Plain static HTML and CSS. No framework, no build step, no dependencies.
- Repo `ellaycodes/esther-portfolio`. The site lives in `estherPortfolio/`. Netlify publishes that folder as is.
- **Pushing to `main` deploys to estheryekini.com.** Use a branch and a pull request to get a preview link first.
- `docs/` sits outside the published folder, so nothing in here is public.

| File | What it is |
|---|---|
| `estherPortfolio/index.html` | The whole page, including the calculator script at the bottom |
| `estherPortfolio/styles.css` | All styling, tokens at the top |
| `estherPortfolio/thanks.html` | Page shown after the form is sent |
| `estherPortfolio/og.png` | 1200 x 630 image shown when the link is shared |
| `estherPortfolio/favicon.svg` | Green "EY" tab icon |
| `estherPortfolio/netlify.toml` | Publish settings and security headers |

### Page sections, in order

1. Header with name, tagline, anchor nav
2. Hero. Headline, subline, two calls to action on the left. Receipt calculator on the right.
3. `#proof` Case study, ledger of facts, feature list, app illustration with invented demo data showing a large multi-country queue
4. `#rebuild` What I can rebuild vs keep paying for
5. `#how` Five numbered steps (a real sequence, so numbering is justified)
6. `#questions` FAQ
7. `#about` Who you'd be working with
8. `#contact` Netlify form
9. Footer

### Calculator

Inputs are monthly subscription, years, one-off build and monthly hosting. It shows renting total, owning total, the amount kept, and the payback month. If owning costs more, it tells the visitor to keep their subscription. The example figures are written into the HTML, so the receipt reads correctly even if JavaScript fails.

### Contact form

Netlify Forms. It works because `data-netlify="true"` and the hidden `form-name` input are in the static HTML. Don't render the form with JavaScript or Netlify won't detect it. Spam is caught by the honeypot `bot-field`. Submissions appear in the Netlify dashboard under Forms. The form name is `enquiry` and fields are `name`, `email`, `charity`, `tool`, `monthly_cost`, `message`.

### Responsive

One column below 860px. Calculator inputs stack below 420px. The app illustration table scrolls sideways inside its own box on phones, the page never does.

## To do before the cold emails go out

- [ ] Merge the pull request, then submit the live form once to test it end to end
- [ ] Netlify dashboard, Forms, turn on email notifications for `enquiry`
- [ ] Open https://payment-requests-demo.netlify.app/admin in an incognito window and confirm it opens without a login
- [ ] Confirm the ~£2,000 a year Enterprise figure
- [ ] Decide whether to keep promising a reply "within two working days"

## To do soon after

- [ ] Rewrite the About section (broader, organisation-level, gender-neutral) and add a photo. Instructions are in an HTML comment above `#about`.
- [ ] Get a two-sentence quote from the charity's finance lead and uncomment the `.quote` block in `#proof`
- [ ] Swap the coded app illustration for real screenshots or a short screen recording of the demo site. Demo data only, never real payees, amounts or bank details.
- [ ] Consider a hello@estheryekini.com address instead of the Gmail one

## Prompt for an AI picking this up

> You're editing a static one-page website in `estherPortfolio/` of the repo `ellaycodes/esther-portfolio`. Read `docs/design-and-build.md` and `docs/site-copy.md` first. Keep the Ledger design exactly as described, using only the existing CSS variables and the two fonts. Don't add frameworks, build steps, gradients or new colours. Keep the Netlify form in static HTML. Make changes on a new branch and open a pull request, never push to `main`. Then do the following: [your change here]
