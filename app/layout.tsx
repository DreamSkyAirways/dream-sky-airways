import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {ToastContainer} from "react-toastify";

import AOSProvider from "../components/AOSProvider";

import AIAssistant from "@/components/layout/AIAssistant";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {Toaster} from "react-hot-toast";
import SubscribeSection from "@/components/SubscribeSection";
import JobFraudNoticeModal from "@/components/JobFraudNoticeModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dreamskyairways.com"),
  title: "Dream Sky Airways | Leading Tour and Travel Company in India",
  description:
    "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, holiday packages, hotels, buses, cabs, visa and travel insurance.",
  keywords: [
    "Dream Sky Airways",
    "dreamskyairways",
    "flight booking",
    "online flight booking India",
    "cheap flights India",
    "tour and travel company",
    "travel agency India",
    "best travel agency India",
    "holiday packages",
    "domestic tour packages",
    "honeymoon packages India",
    "family holiday packages",
    "hotel booking India",
    "bus booking",
    "cab services",
    "visa services India",
    "travel insurance India",
    "book flights hotels packages online",
  ],
  alternates: {
    canonical: "https://www.dreamskyairways.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "6wA_xd1DZyKUJf5mASIojsfTJkRYese0X5DEYYE0Wlg",
  },
  other: {
    "google-adsense-account": "ca-pub-3804438885787200",
  },
  openGraph: {
    title: "Dream Sky Airways | Leading Tour and Travel Company in India",
    description:
      "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, holiday packages, hotels, buses, cabs, visa and travel insurance.",
    url: "https://www.dreamskyairways.com",
    siteName: "Dream Sky Airways",
    images: [
      {
        url: "https://www.dreamskyairways.com/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Dream Sky Airways Travel Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Sky Airways | Leading Tour and Travel Company in India",
    description:
      "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, holiday packages, hotels, buses, cabs, visa and travel insurance.",
    images: ["https://www.dreamskyairways.com/ogImage.webp"],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — required in <head> on every page for verification & ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3804438885787200"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "TravelAgency"],
              name: "Dream Sky Airways",
              url: "https://www.dreamskyairways.com",
              logo: "https://www.dreamskyairways.com/logo.png",
              description:
                "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, holiday packages, hotels, buses, cabs, visa and travel insurance.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+911204580951",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586109601880",
                "https://www.instagram.com/dreamskyairways/",
                "https://www.linkedin.com/company/dream-sky-airways/",
              ],
            }),
          }}
        />

        <Navbar />
        <AOSProvider />
        <JobFraudNoticeModal />

        {children}
        {/* <SubscribeSection /> */}
        <AIAssistant />
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MXZW1GQPGL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MXZW1GQPGL');
          `}
        </Script>
        <ToastContainer position="top-right" autoClose={3000} />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
