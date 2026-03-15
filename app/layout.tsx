import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Codara — Memory for AI Development",
  description:
    "Turn your codebase into structured memory and reduce AI token usage by 99%. Codara compresses context from 136k to ~1,100 tokens. Measured.",
  keywords: ["AI coding", "context compression", "token reduction", "LLM", "developer tools"],
  openGraph: {
    title: "Codara — Memory for AI Development",
    description: "Reduce AI token usage by up to 147×. Codara makes AI remember your codebase architecture — not just files.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased bg-white text-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
