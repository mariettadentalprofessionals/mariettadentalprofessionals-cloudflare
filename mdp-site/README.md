# Marietta Dental Professionals — Website

A static 3-page website (Home, About Us, Contact Us) built with plain HTML, CSS, and JavaScript. No build step or framework required.

## Project structure

```
mdp-site/
├── index.html          Home page
├── about.html          About Us page
├── contact.html        Contact Us page
├── css/
│   └── styles.css      All site styling
├── js/
│   └── script.js       Nav toggle, form validation
├── assets/
│   ├── logo.svg             Full wordmark logo (used in hero)
│   ├── logo-mark.svg        Square icon mark (used in header/footer)
│   ├── favicon.ico, favicon-16.png, favicon-32.png, apple-touch-icon.png
│   ├── og-image.png         Open Graph / social share image
│   └── patient-1.png … patient-6.png   Illustrated patient avatars
├── _headers             Cloudflare Pages cache/security headers
└── README.md
```

> Note: the patient images are original flat-style illustrations, not photos of real people — this avoids misrepresenting real individuals as patients of the practice.

## Running it locally

No build tools needed. From the project folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deploying to GitHub

1. Create a new repository on GitHub (e.g. `marietta-dental-site`), without a README (to avoid conflicts).
2. From this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site: home, about, contact pages"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

## Deploying to Cloudflare Pages

**Option A — Connect GitHub (recommended, auto-deploys on every push):**
1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the GitHub repository you just pushed.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
4. Click **Save and Deploy**. Cloudflare will give you a URL like `your-project.pages.dev`.

**Option B — Direct upload (no GitHub required):**
1. Go to **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Drag and drop this entire project folder.
3. Deploy — you'll get a `pages.dev` URL immediately.

### Custom domain
Once deployed, go to your Pages project → **Custom domains** → add `mariettadentalpros.com` (or your chosen domain) and follow the DNS instructions if it's also managed in Cloudflare.

## Editing content later

- Text content lives directly in `index.html`, `about.html`, and `contact.html`.
- Shared styling is in `css/styles.css` (colors are defined as CSS variables at the top).
- The contact form currently validates fields in the browser but does not send email — connect it to a form backend (e.g. Cloudflare Pages Functions, Formspree, or similar) when ready to receive real submissions.
