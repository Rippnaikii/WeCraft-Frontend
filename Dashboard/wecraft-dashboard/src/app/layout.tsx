import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WE-CRAFT | Dashboard IoT",
  description: "Monitoreo IoT preventivo de rebalse en tolvas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-slate-900 text-slate-200 font-sans min-h-screen p-4 md:p-8">
        {children}
      </body>
    </html>
  );
}
