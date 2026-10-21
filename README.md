# Global Prime Engineering Website

Official website for **Global Prime Engineering Turning Workshop LLC**, built with **SvelteKit + Vite + Tailwind CSS**.

---

## Project Structure

- [site](site) → SvelteKit application source
- [site/src/routes](site/src/routes) → website pages (`/`, `/about`, `/services`, `/equipment`, `/blog`, `/contact`)
- [site/src/lib/blog/posts](site/src/lib/blog/posts) → one file per service article
- [site/static/images](site/static/images) → static assets

---

## Tech Stack

- SvelteKit
- Vite
- TypeScript
- Tailwind CSS
- Netlify (hosting + form handling)

---

## Local Development

From repository root:

1. Go to app folder:
	- `cd site`
2. Install dependencies:
	- `npm install`
3. Start dev server:
	- `npm run dev -- --host`

---

## Quality Checks

Run type/check validation:

- `cd site && npm run check`

Continuous checking while editing:

- `cd site && npm run check:watch`

---

## Build & Preview

- Build: `cd site && npm run build`
- Preview production build: `cd site && npm run preview`

---

## Deployment

This project is connected to Netlify and **main branch deploys automatically**.

### ⚠️ Branch Policy (Important)

**Do not push directly to `main`.**

Always use feature branches and PRs:

1. Create a branch:
	- `git checkout -b feature/<short-name>`
2. Commit changes:
	- `git add .`
	- `git commit -m "feat: <summary>"`
3. Push branch:
	- `git push -u origin feature/<short-name>`
4. Open Pull Request to `main`
5. Merge only after review/checks pass

Recommended branch names:

- `feature/home-hero-copy`
- `feature/about-mission-vision`
- `fix/contact-form-options`
- `chore/content-cleanup`

---

## Blog (Service Guides) & SEO

Each service has an article at `/blog/<slug>`. Posts marked `featured: true` appear as cards on the home page; all posts are listed on `/blog`.

To add or edit a post:

1. Create or edit `site/src/lib/blog/posts/<slug>.ts` (copy an existing post as a template).
2. Register a new post in [site/src/lib/blog/index.ts](site/src/lib/blog/index.ts).
3. Generate its images (needs ImageMagick):
	- `cd site && scripts/blog-images.sh static/images/<photo> <slug>`
4. Run `npm run check && npm run build`.

The sitemap (`/sitemap.xml`), the AI-assistant summary (`/llms.txt`), page titles, descriptions, canonical URLs, social previews and structured data (JSON-LD) are generated automatically. Shared business details (phone, WhatsApp, address, hours, map embed) live in [site/src/lib/site.ts](site/src/lib/site.ts).

---

## Contact Form (Netlify)

The contact form is configured as a Netlify Form and is captured from:

- [site/src/routes/contact/+page.svelte](site/src/routes/contact/+page.svelte)

To receive submission emails:

1. Netlify Dashboard → Site → Forms
2. Select `contact` form
3. Notifications → Add Email Notification
4. Add recipient email(s)

---

## Production Notes

- Keep all customer-facing content aligned with approved company wording.
- Optimize and compress image assets before commit.
- Test mobile and desktop before creating PR.

