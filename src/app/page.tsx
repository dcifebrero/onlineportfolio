import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Impact from "@/components/Impact";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";
import Effects from "@/components/Effects";
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
        <Impact />
        <HowIWork />
        <Services />
        <Work />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <Overlays />
      <Effects />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
