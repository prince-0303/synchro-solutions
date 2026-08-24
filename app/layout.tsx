import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroller } from "@/components/layout/SmoothScroller";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { SITE_CONFIG } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Custom Software Development Company | Web, Mobile & SaaS | Synchro Solutions",
    template: "%s | Synchro Solutions"
  },
  description: "Synchro Solutions builds custom web, mobile, SaaS and AI solutions for startups and businesses. We design and develop digital products built to scale.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Synchro Solutions | Custom Software Development",
    description: "Synchro Solutions builds custom web, mobile, SaaS and AI solutions for startups and businesses.",
    url: SITE_CONFIG.url,
    siteName: "Synchro Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synchro Solutions | Custom Software Development",
    description: "Synchro Solutions builds custom web, mobile, SaaS and AI solutions for startups and businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
        "logo": `${SITE_CONFIG.url}/images/logo/logo.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala"
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <SmoothScroller>
            <CustomCursor />
            <BackgroundEffects />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
