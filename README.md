# Deo Febrero — Portfolio (Next.js)

A Next.js 15 (App Router) + TypeScript portfolio for Deo Febrero / PhewFlow.
Brand colors: `#064f43` · `#f2c94c` · `#fff9ef` · `#292e2b`.

## Project structure

```
phewflow-next/
├── public/img/                 Images: deo.jpg (photo), pf-light/pf-dark (header mark),
│                               logo-full / logo-full-dark (footer logo),
│                               shot-email.jpg / shot-clip.jpg (work-sample screenshots)
├── src/
│   ├── app/
│   │   ├── layout.tsx          Fonts, SEO metadata, day/night pre-paint script
│   │   ├── page.tsx            Home page: assembles every section
│   │   ├── globals.css         All styles. Colors are at the top (:root = day, [data-theme="dark"] = night)
│   │   ├── icon.png, apple-icon.png, opengraph-image.jpg, twitter-image.jpg
│   │   ├── robots.ts, sitemap.ts
│   │   └── api/book/route.ts   Booking endpoint: emails requests to you (Resend)
│   ├── components/             One file per section
│   │   ├── Header.tsx          Logo + "PhewFlow Business Automation Solutions", nav, pull-cord day/night switch
│   │   ├── Hero.tsx            Photo, headline, floating tool chips
│   │   ├── TrustStrip.tsx      Timezone / reply time / human-checked
│   │   ├── About.tsx           Bio + three pillars
│   │   ├── Tools.tsx           "Tools I use" slow-moving banner (tiles come from data/tools.ts)
│   │   ├── Impact.tsx          Research numbers + savings calculator
│   │   ├── HowIWork.tsx        4-step flow + email-workflow simulator
│   │   ├── Services.tsx        Accordion (text in data/content.ts)
│   │   ├── Work.tsx            Work samples with screenshots, "Demo coming soon" hover, zoom
│   │   ├── Booking.tsx         Calendar + booking form (markup)
│   │   ├── Contact.tsx         Gmail + LinkedIn buttons
│   │   ├── Footer.tsx          Large PhewFlow logo
│   │   ├── Overlays.tsx        Zoom window, back-to-top button, toast
│   │   └── Effects.tsx         All the interactive behavior (client component)
│   ├── data/
│   │   ├── site.ts             Email, LinkedIn, booking hours/days
│   │   ├── content.ts          Banner order, flow steps, services, demo emails, rotating words
│   │   └── tools.ts            Tool names, colors, icons
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

* **Email, LinkedIn, call hours**: `src/data/site.ts`
* **Services, flow steps, rotating words, demo emails, tools banner order**: `src/data/content.ts`
* **Add or remove a tool**: `src/data/tools.ts`, then add its name to `ROW_A` or `ROW_B` in `content.ts`
* **Headings and paragraphs** (About, Impact numbers, Work samples, Contact): the matching file in `src/components/`
* **Add a demo** to a work sample later: in `src/components/Work.tsx`, replace the "Demo coming soon" overlay with a video or link
* **Replace a screenshot**: put the new image in `public/img/` under the same name
* **Colors**: top of `src/app/globals.css`

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
