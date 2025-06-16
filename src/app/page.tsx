import AboutMeSection from "@/components/modules/AboutMe";
import ZoomHello from "@/components/modules/Hello";
import ProjectsSection from "@/components/modules/Projects";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <ZoomHello />
      <AboutMeSection />
      <ProjectsSection />
    </div>
  )
}
