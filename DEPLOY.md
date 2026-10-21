# Deploying the Sabit Portfolio with VS Code + GitHub Pages

## New repository

1. Extract the downloaded ZIP.
2. Open the **sabit-iqbal-portofolio** folder in VS Code.
3. In the terminal, run:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Launch Sabit quality improvement portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

   Create the GitHub repository first; change `YOUR_USERNAME` and `YOUR_REPOSITORY` to the real values. Do not paste the placeholder URL unchanged.

4. Go to **Repository → Settings → Pages**. Select **Deploy from a branch**, branch **main**, folder **/(root)**. Save. Wait for deployment to complete.

## Updating an existing repository

1. Make a backup if you want to keep the earlier website.
2. Open the correct existing repository folder in VS Code.
3. Run `git pull origin main` if your branch is `main`.
4. Copy files **inside** this extracted folder into the repository folder and replace the old site files; do not delete its `.git` directory.
5. Run:

   ```bash
   git status
   git add .
   git commit -m "Redesign Sabit portfolio with unique industrial editorial style"
   git push origin main
   ```

**Important:** This is a different person's portfolio from Abdul Kholik's; use Sabit's own repository or hosted site, not Abdul's repository.

## Notes

- No database, PHP, or npm dependencies.
- All photos, project documentation and the CV are relative files under `assets/`.
- The fonts are requested from Google Fonts; browser fallback fonts are configured if external fonts cannot load.
- Review company presentation imagery and personal contact details for permission before public release.
