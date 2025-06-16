import AboutMeSection from "@/components/modules/AboutMe";
import ContactSection from "@/components/modules/Contact";
import ZoomHello from "@/components/modules/Hello";
import ProjectsSection from "@/components/modules/Projects";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <ZoomHello />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
