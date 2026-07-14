import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-darker-grotesque",
});

export const metadata: Metadata = {
  title: "Driss Bourkkadi — Designer",
  description: "Portfolio of Driss Bourkkadi, designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={darkerGrotesque.variable}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}