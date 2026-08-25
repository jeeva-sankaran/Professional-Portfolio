import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jeevanantham S | Unreal Engine Developer & XR Researcher",
  description:
    "Unreal Engine Developer and XR Researcher building immersive simulations, digital twins, VR experiences, and interactive virtual environments.",
  keywords: [
    "Unreal Engine Developer",
    "XR Researcher",
    "Virtual Reality",
    "Digital Twins",
    "Immersive Simulation",
    "Technical Art",
    "Computer Vision",
    "Python",
    "Unreal Engine 5",
  ],
  authors: [{ name: "Jeevanantham Sankaran" }],
  metadataBase: new URL("https://jeeva-portfolio-seven.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jeevanantham S | Unreal Engine Developer & XR Researcher",
    description:
      "Unreal Engine Developer and XR Researcher building immersive simulations, digital twins, VR experiences, and interactive virtual environments.",
    url: "https://jeeva-portfolio-seven.vercel.app",
    siteName: "Jeevanantham Sankaran Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevanantham S | Unreal Engine Developer & XR Researcher",
    description:
      "Unreal Engine Developer and XR Researcher building immersive simulations, digital twins, VR experiences, and interactive virtual environments.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
