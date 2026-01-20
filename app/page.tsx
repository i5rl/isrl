import {
  HeroSection,
  WorkSection,
  AboutSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
