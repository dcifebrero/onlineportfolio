import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/siteUrl";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.name, url: site.linkedin }],
  keywords: [
    "virtual assistant",
    "AI automation",
    "workflow automation",
    "n8n",
    "Zapier",
    "Make",
    "Airtable",
    "administrative support",
    "Philippines",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: `${site.tagline} Your business, flowing smarter.`,
    siteName: site.brand,
  },
  twitter: { card: "summary_large_image", title, description: site.tagline },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

// Runs before the first paint so the saved day/night choice shows with no flash.
const themeScript = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <meta name="theme-color" content="#fff9ef" id="tc" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
