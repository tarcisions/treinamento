import { Hero } from "@/components/hero/hero";
import { Manifesto } from "@/components/manifesto/manifesto";
import { CountdownSection } from "@/components/countdown/countdown";
import { ExperienceCards } from "@/components/experience-cards/experience-cards";
import { Gallery } from "@/components/gallery/gallery";
import { Venue } from "@/components/venue/venue";
import { SpotsProgress } from "@/components/spots-progress/spots-progress";
import { Timeline } from "@/components/timeline/timeline";
import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <CountdownSection />
      <ExperienceCards />
      <Gallery />
      <Venue />
      <SpotsProgress />
      <Timeline />
      <FAQ />
      <Footer />
    </>
  );
}
