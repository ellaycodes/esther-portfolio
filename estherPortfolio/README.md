# estheryekini.com

One page, hand written static HTML. No build step, no framework, no dependencies.
Deployed to Netlify from this folder.

```
index.html    the page
thanks.html   form success page
styles.css    all styling, including the hero fill animation
og.png        1200x630 Open Graph image
favicon.svg
fonts/        Bricolage Grotesque, Public Sans, IBM Plex Mono. Latin subset, woff2.
netlify.toml  publish = "." , no build command
```

## Editing

Open `index.html` in a text editor and change the text. There is nothing to compile.
To preview locally:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Things left to fill in

Search `index.html` for these:

- **Screenshots.** Three placeholder slots in case study one. Replace each
  `<div class="shot__slot">` with an `<img>`. Dummy data only, no real payee names,
  amounts, references, or bank details.
- **Work strip.** Four placeholder cards. Replace with three to six real projects.
- **Case study two stamp.** Reads `Shipped`. Add the year once confirmed.

## Deploying

Netlify builds from the `estherPortfolio` base directory and publishes it as-is.
Pushing to `main` deploys.

The contact form uses Netlify Forms: it works because `data-netlify="true"` and the
hidden `form-name` input are present in the static HTML. Submissions appear under
Forms in the Netlify dashboard. Turn on email notifications there, then test the form
once end to end before sending the link to anyone.

## The old site

The previous React and Contentful portfolio is on the `archive/react-portfolio`
branch, including the uncommitted work in progress at the time.
