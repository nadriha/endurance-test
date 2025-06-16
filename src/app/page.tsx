import AboutMeSection from "@/components/modules/AboutMe";
import ZoomHello from "@/components/modules/Hello";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <ZoomHello />
      <AboutMeSection />
    </div>
  )
}
