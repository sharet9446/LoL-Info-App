import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Link from "next/link";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href={"/"} className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">
                  League of Legends
                </h1>
              </Link>

              <nav>
                <ul className="flex gap-6">
                  <li>
                    <Link
                      href="/champions"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      챔피언 목록
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rotation"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      로테이션 목록
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/items"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      아이템 목록
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4">{children}</main>
      </body>
    </html>
  );
}
