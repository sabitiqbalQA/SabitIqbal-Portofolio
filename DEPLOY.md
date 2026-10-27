# GitHub Pages — Fast deployment

The ZIP is ready to upload. **Do not upload the ZIP as a single file.** Extract it and upload the files to the root of the existing Sabit portfolio repository (or a new one).

The repository root should look like this:

```
index.html
styles.css
redesign.css
script.js
README.md
DEPLOY.md
assets/
  favicon.svg
  sabit-iqbal-portrait.webp
  CV-Sabit-Iqbal-Maulana.pdf
  project-cover-d/
    presentation-cover.svg
    root-cause-phase-1.svg
    countermeasure-phase-1.svg
    root-cause-phase-2.svg
    double-stopper.svg
    improvement-results.svg
```

On GitHub, open your portfolio repository, choose **Add file → Upload files**, upload all the extracted files/folders, commit to your Pages branch. GitHub Pages can host this site directly because it uses relative paths and no build tooling.

Hard-refresh (`Ctrl+F5`) if a previous style persists due to browser caching. In particular verify `redesign.css` exists at the site's root. Keep a backup of your prior design if you may want to revert.

If using a GitHub Pages project repository with a URL like `https://username.github.io/repository-name/`, the relative `assets/...` paths work automatically.

Only publish company-related content once the relevant employer/publication permissions are confirmed.
