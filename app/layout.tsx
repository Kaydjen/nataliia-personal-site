import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Наталія — digital-маркетинг",
  description: "Таргетована реклама, SMM і маркетингова стратегія для бізнесу.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
