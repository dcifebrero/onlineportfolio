# Deo Febrero — Portfolio (Next.js)

A Next.js 15 (App Router) + TypeScript portfolio for Deo Febrero / PhewFlow.
Brand colors: `#064f43` · `#f2c94c` · `#fff9ef` · `#292e2b`.

## Project structure

```
phewflow-next/
├── public/                     Static files served from "/"
│   ├── deo.jpg                 Your photo
│   ├── logo-pf.png             PF mark (header)
│   ├── logo-wordmark.png       Dark wordmark
│   └── logo-wordmark-light.png Light wordmark (footer)
├── src/
│   ├── app/
│   │   ├── layout.tsx          Fonts, SEO metadata, <html>
│   │   ├── page.tsx            Home page: assembles every section
│   │   ├── globals.css         All styles and animations
│   │   ├── icon.png            Favicon (auto-detected by Next.js)
│   │   ├── apple-icon.png      iOS home-screen icon
│   │   ├── opengraph-image.jpg Link-preview image (WhatsApp, LinkedIn, Facebook…)
│   │   ├── twitter-image.jpg   Link-preview image for X/Twitter
│   │   ├── robots.ts           /robots.txt
│   │   ├── sitemap.ts          /sitemap.xml
│   │   └── api/book/route.ts   Booking endpoint: emails requests to you
│   ├── components/             One file per section / interactive piece
│   │   ├── Header.tsx          Sticky nav, scroll progress, active link
│   │   ├── Hero.tsx            Photo, headline, floating tool chips
│   │   ├── RotatingWord.tsx    "Let's take ___ off your plate"
│   │   ├── TrustStrip.tsx      Timezone / reply time / human-checked
│   │   ├── About.tsx           Bio + three pillars
│   │   ├── Tools.tsx           Filterable tools grid
│   │   ├── HowIWork.tsx        Animated 4-step flow
│   │   ├── Services.tsx        Accordion
│   │   ├── Work.tsx            Work samples section
│   │   ├── WorkCard.tsx        Card with hover "Demo coming soon"
│   │   ├── Booking.tsx         Calendar + booking form
│   │   ├── Contact.tsx         Gmail + LinkedIn buttons
│   │   ├── CopyEmail.tsx       "Copy email" with toast
│   │   ├── Footer.tsx
│   │   ├── RevealObserver.tsx  Fade-in on scroll
│   │   └── Interactions.tsx    Cursor glow, tilt, magnetic buttons
│   ├── data/site.ts            ★ ALL your content (text, tools, work, hours)
│   └── lib/siteUrl.ts          Resolves the site's public URL
├── .env.example                Environment variables you need
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Run it on your computer

1. Install Node.js 18.18 or newer from https://nodejs.org
2. In a terminal, inside this folder:
   ```bash
   npm install
   cp .env.example .env.local     # Windows: copy .env.example .env.local
   npm run dev
   ```
3. Open http://localhost:3000

Check a production build before deploying:

```bash
npm run build && npm start
```

## Change your content

Open **`src/data/site.ts`**. Everything is there: email, LinkedIn, tools, services,
work samples, booking hours. Save, and the page updates.

* **Add a demo** to a work sample later: edit `src/components/WorkCard.tsx`
  (replace the "Demo coming soon" overlay with a video or link).
* **Add certifications**: create `src/components/Certifications.tsx` and add it to `src/app/page.tsx`.

## Make the booking form email you

The form posts to `/api/book`, which sends the request to **dcifebrero@gmail.com**
using [Resend](https://resend.com) (free tier).

1. Sign up at https://resend.com **with dcifebrero@gmail.com**.
2. Create an API key.
3. Put it in `.env.local` as `RESEND_API_KEY=...` (and in Vercel, see below).

With the default sender (`onboarding@resend.dev`) Resend delivers only to the email you
signed up with, which is exactly what you want here. Until the key is set, the form
falls back to opening the visitor's email app with the details pre-filled.

## Deploy to Vercel

**Option A: GitHub (recommended, auto-redeploys on every change)**

1. Create a repository on GitHub and push this folder to it.
2. On https://vercel.com click **Add New → Project**, import the repository.
3. Framework Preset: **Next.js** (detected automatically). Leave the build settings alone.
4. Open **Environment Variables** and add:
   * `RESEND_API_KEY` = your key
   * `BOOKING_TO_EMAIL` = `dcifebrero@gmail.com`
   * `NEXT_PUBLIC_SITE_URL` = your live address, e.g. `https://deofebrero.com`
5. Click **Deploy**.

**Option B: Vercel CLI**

```bash
npm i -g vercel
vercel          # first deploy (preview)
vercel --prod   # publish
```

Add the same environment variables in the Vercel dashboard (Project → Settings →
Environment Variables), then redeploy.

**Custom domain:** Project → Settings → Domains → Add. Set `NEXT_PUBLIC_SITE_URL`
to that domain so link previews use the right address.
