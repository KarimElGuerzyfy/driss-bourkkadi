import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}