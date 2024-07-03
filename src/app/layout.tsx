import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider"; //import는 자식 사용한 곳이 부모

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Dictionary",
  description: "1세대 포켓몬 도감입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
