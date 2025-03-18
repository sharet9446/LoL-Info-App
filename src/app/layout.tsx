import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { NavBar } from "@/components/ui/navber";
import { ContainerDataProvider } from "./providers";

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
  title: "League of Legends 정보 앱",
  description: "리그 오브 레전드 챔피언, 아이템, 로테이션 정보를 제공합니다.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="max-w-7xl mx-auto py-6 px-4 w-full flex-1">
          <ContainerDataProvider>{children}</ContainerDataProvider>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
