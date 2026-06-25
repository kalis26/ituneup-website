import type { Metadata, Viewport } from "next";
import { SfProDisplay } from "@/fonts";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ituneup.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iTuneUp - Apple Music-ready downloads",
    template: "%s | iTuneUp",
  },
  description: "iTuneUp helps you find albums or tracks, download them in Apple Music-ready AAC format, and keep complete metadata and artwork in your music library.",
  applicationName: "iTuneUp",
  keywords: ["iTuneUp", "Apple Music", "music downloader", "AAC", "M4A", "music metadata", "album artwork"],
  authors: [{ name: "Amine Mustapha Rachid", url: "https://github.com/kalis26" }],
  creator: "Amine Mustapha Rachid",
  publisher: "Amine Mustapha Rachid",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "iTuneUp",
    title: "iTuneUp - Apple Music-ready downloads",
    description: "Search, download, and organize music with complete metadata, artwork, and Apple Music-ready AAC files.",
    images: [
      {
        url: "/images/iPhone.png",
        width: 393,
        height: 860,
        alt: "iTuneUp running with an Apple Music library on iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iTuneUp - Apple Music-ready downloads",
    description: "Download albums or tracks with Apple Music-ready format, metadata, and artwork.",
    images: ["/images/iPhone.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/iTuneUp.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050506" },
  ],
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const themeScript = `
    (() => {
      try {
        const storedTheme = localStorage.getItem('ituneup-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemTheme;
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;
      } catch {
        document.documentElement.style.colorScheme = 'light dark';
      }
    })();
  `;

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${SfProDisplay.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
