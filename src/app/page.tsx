import { Hero } from "@/components/hero/hero";
import { Manifesto } from "@/components/manifesto/manifesto";
import { Gallery } from "@/components/gallery/gallery";
import { CountdownSection } from "@/components/countdown/countdown";
import { Venue } from "@/components/venue/venue";
import { ExperienceCards } from "@/components/experience-cards/experience-cards";
import { Timeline } from "@/components/timeline/timeline";
import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Gallery />
      <ExperienceCards />
      <Timeline />
      <Venue />
      <CountdownSection />
      <FAQ />
      <Footer />
    </>
  );
}
