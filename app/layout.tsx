import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Bajagain - Software Developer",
  description: "Portfolio of Ayush Bajagain, a software developer specializing in Java, web apps, and database systems.",
  keywords: "Ayush Bajagain, Software Developer, Java Developer, BCA Student, ayushbajagain.com.np",
  authors: [{ name: "Ayush Bajagain" }],
  creator: "Ayush Bajagain",
  publisher: "Ayush Bajagain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ayushbajagain.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayush Bajagain - Software Developer",
    description: "Check out my portfolio and projects.",
    url: "https://ayushbajagain.com.np",
    siteName: "Ayush Bajagain Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Bajagain - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Bajagain - Software Developer",
    description: "Check out my portfolio and projects.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="author" content="Ayush Bajagain" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Nepal" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />
        <link rel="canonical" href="https://ayushbajagain.com.np" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayush Bajagain",
            "url": "https://ayushbajagain.com.np",
            "image": "/ayush.png",
            "sameAs": [
              "https://github.com/Ayush-Bajagain",
              "https://www.linkedin.com/in/ayush-bajagain-4a1169319/",
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "description": "Full Stack Developer and Software Engineer based in Nepal, specializing in Java, React, and modern web technologies.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Nepal"
            }
          })}
        </script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
