# SurgBioMech — Pocivavsek Lab website

Static site for the lab of Luka Pocivavsek, MD PhD (University of Chicago,
Department of Surgery).

## Stack

Hand-written HTML, CSS, and a small vanilla JS file — no build step, no
dependencies. Hosts fine on GitHub Pages.

## Local preview

```sh
cd surgbiomech-lab-website
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

- `index.html` — entire page
- `styles.css` — type system, layout, motion
- `script.js` — scroll reveals and a small parallax on the hero figure
- `favicon.svg`
- `robots.txt` — **currently `Disallow: /`** so the site does not get
  indexed while it is being staged. Remove or relax this before public launch.
- `.nojekyll` — disables Jekyll on GitHub Pages so files starting with `_`
  serve unchanged.

## Publishing checklist (before going live)

1. Replace the placeholder lab-members section with the real roster.
2. Confirm publication list — citation counts are pulled from Google Scholar
   on the date the site was built and will drift.
3. Decide on the public URL — recommended: a repo inside the `SurgBioMech`
   org (e.g. `SurgBioMech/lab-website`) with Pages enabled. This lands at
   `https://surgbiomech.github.io/lab-website/`. Avoid the bare
   `SurgBioMech.github.io` repo name unless you specifically want
   `https://surgbiomech.github.io/` as the URL — that repo auto-deploys
   on every push.
4. Once you are ready to be indexed, change `robots.txt` to:
   ```
   User-agent: *
   Allow: /
   ```
5. Add a meta `description` / `og:image` if you want previews on social.

## Type & color

- Display: **Fraunces** (variable, with optical sizing and SOFT/WONK axes)
- Body: **Newsreader**
- Mono: **JetBrains Mono**
- Palette: bone (`#F2EDE3`), ink (`#14110D`), arterial (`#8E2A2A`), slate
  (`#2C3C4B`).
