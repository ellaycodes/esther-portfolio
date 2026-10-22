# estheryekini.com

One page, hand written static HTML. No build step, no framework, no dependencies.
Deployed to Netlify from this folder. Pushing to `main` deploys.

```
index.html    the page, calculator script at the bottom
thanks.html   form success page
styles.css    all styling, colour and type tokens at the top
og.png        1200x630 image for shared links
favicon.svg
netlify.toml  publish = "." , no build command, security headers
```

Fonts (Schibsted Grotesk and DM Mono) load from Google Fonts.

Full design notes, the final copy and the to-do list are in `../docs/`, outside the
published folder so they're never public.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Contact form

Netlify Forms. It works because `data-netlify="true"` and the hidden `form-name` input
are in the static HTML. Submissions appear under Forms in the Netlify dashboard. Turn on
email notifications there and test the form once after every deploy that touches it.

## The old sites

The previous React and Contentful portfolio is on the `archive/react-portfolio` branch.
The July 2026 "SaaS restyle" version is in git history before the Ledger redesign.
