import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cretivox - Endurance Test",
  description: "Nadhira - Endurance Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased text-white`}
>
        {children}
      </body>
    </html>
  );
}
