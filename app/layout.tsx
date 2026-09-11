import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IN MOTION PERFORMANCE",
  description: "InMotion Performance — Treinar é cuidar de ti.",
  icons: {
    icon: "/images/inmotion-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}