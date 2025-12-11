import { Inter, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const gloria = Gloria_Hallelujah({
  weight: "400",
  variable: "--font-gloria",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aravindh A - Creative Portfolio",
  description: "Motion Graphics & UI Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${gloria.variable} antialiased bg-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
