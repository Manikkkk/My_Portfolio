import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manik Shrestha — UI/UX Designer",
  description:
    "Manik Shrestha is a UI/UX designer creating intuitive, modern and user-centered digital experiences.",
  keywords: [
    "Manik Shrestha",
    "UI/UX Designer",
    "Portfolio",
    "Nepal UI Designer",
    "Figma",
    "Prototyping",
    "Web Design",
  ],
  authors: [{ name: "Manik Shrestha" }],
  openGraph: {
    title: "Manik Shrestha — UI/UX Designer Portfolio",
    description:
      "Creating intuitive, modern and user-centered digital experiences through thoughtful UI, interaction, and prototyping.",
    url: "https://manikshrestha.com",
    siteName: "Manik Shrestha Portfolio",
    images: [
      {
        url: "/assets/image/new profile.jpg",
        width: 1200,
        height: 630,
        alt: "Manik Shrestha — UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manik Shrestha — UI/UX Designer",
    description:
      "UI/UX designer focused on intuitive and user-centered digital experiences.",
    images: ["/assets/image/new profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`}>
      <body className="bg-[#EEF6F9] text-[#0B1D2B] font-sans antialiased min-h-screen flex flex-col selection:bg-[#24966F]/20 selection:text-[#071D2D]">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
