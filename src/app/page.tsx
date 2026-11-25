import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Tools from "@/components/Tools";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import Interactions from "@/components/Interactions";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/siteUrl";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: siteUrl,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  worksFor: { "@type": "Organization", name: site.brand },
  knowsAbout: ["AI automation", "Workflow automation", "Administrative support", "Data management"],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <About />
        <Tools />
        <HowIWork />
        <Services />
        <Work />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <Interactions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
