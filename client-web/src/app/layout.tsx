import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.scss";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Taxi application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
