# Marietta Dental Professionals - Web 2.0 Static Site

Three-page HTML/CSS/JavaScript website prepared for a GitHub repository and Cloudflare Pages deployment.

## Pages
- `index.html` - Home
- `about.html` - About Us
- `contact.html` - Contact Us

## Assets
- `assets/marietta-dental-professionals.jpg` is the uploaded Marietta Dental Professionals logo and is used for the favicon, hero logo, header, footer, and social sharing image metadata.
- Patient imagery is loaded from Unsplash image URLs in the page markup.

## Cloudflare Pages
For a plain static deployment, connect the GitHub repository to Cloudflare Pages and use:
- Framework preset: None
- Build command: leave blank
- Build output directory: `/` (repository root)

No Node.js build step is required.

## Contact form
The contact form is front-end only. It displays a success message but does not send email until a backend/form service is connected.
