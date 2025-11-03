import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Subba",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-mandatory snap-y scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
