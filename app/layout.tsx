import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { site } from "@/content/site";
import "./globals.css";

const interTight = localFont({
  src: [
    { path: "./fonts/InterTight-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InterTight-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-inter-tight",
  display: "block",
  adjustFontFallback: false,
});

/** 600 is only used by the wordmark and the footer watermark, so it stays off the critical path (no preload). */
const interTightSemibold = localFont({
  src: "./fonts/InterTight-600.woff2",
  weight: "600",
  variable: "--font-inter-tight-600",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.metaTitle,
  description: site.metaDescription,
  applicationName: site.brand,
  openGraph: {
    type: "website",
    siteName: site.brand,
    title: site.metaTitle,
    description: site.metaDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export const viewport: Viewport = {
  // Light is the default regardless of the OS setting; dark is opt-in via the toggle.
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${interTightSemibold.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} storageKey="seekworthy-theme" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
