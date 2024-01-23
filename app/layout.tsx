import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-jasper.netlify.app/"
  ),
  title: "Thanabodee Kumsub",
  description: "Developer Portfolio By Thanabodee Kumsub",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Thanabodee Kumsub"],
  openGraph: {
    title: "Thanabodee Kumsub",
    description: "Software Engineer",
    images: "/LooperGroup2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <Providers>
          <main className="h-full w-full bg-[url('/LooperGroup2.png')] bg-no-repeat">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
