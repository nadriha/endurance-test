import AboutMeSection from "@/components/modules/AboutMe";
import ZoomHello from "@/components/modules/Hello";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <ZoomHello />
      <AboutMeSection />
    </div>
  )
}
