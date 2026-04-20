import Hero from "../components/Hero/Hero";
import ActivitiesSection from "../components/Activity/ActivitiesSection";
import AboutSection from "../components/About/AboutSection";
import MenuSection from "../components/Menu/Menu";
import ContactSection from "../components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ActivitiesSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
