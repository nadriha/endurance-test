import ZoomHello from "@/components/modules/Hello";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <ZoomHello />
      <div className="h-screen bg-gray-950 flex justify-center">
        <div className="flex flex-col items-center max-w-7xl">
          <h1 className="text-white text-6xl font-bold">About Me</h1>
          <div className="flex justify-center items-center">
            <p>Third-year Computer Science undergraduate at Universitas Indonesia, passionate about web development. Motivated to continuously improve both technical and non-technical skills to enhance my capabilities and make valuable contributions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
