import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from '@/lib/config/site';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Les Grignotons - Élevage familial de lapins et cobayes",
    template: "%s | Les Grignotons"
  },
  description: "Élevage familial responsable de lapins et cobayes. Adoptions avec accompagnement et suivi. Passion, bien-être animal et transparence.",
  keywords: ["lapin", "cobaye", "adoption", "élevage", "NAC", "animaux", "élevage responsable", "Belgique", "lapins nains", "cobayes"],
  authors: [{ name: "Les Grignotons" }],
  creator: "Les Grignotons",
  publisher: "Les Grignotons",
  icons: {
    icon: '/logos/favicon.jpg',
    apple: '/logos/favicon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: SITE_CONFIG.url,
    siteName: 'Les Grignotons',
    title: 'Les Grignotons - Élevage familial de lapins et cobayes',
    description: 'Élevage familial responsable de lapins et cobayes. Adoptions avec accompagnement et suivi. Passion, bien-être animal et transparence.',
    images: [
      {
        url: '/images/hero-center.jpg',
        width: 1200,
        height: 630,
        alt: 'Les Grignotons - Élevage de lapins et cobayes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Grignotons - Élevage familial de lapins et cobayes',
    description: 'Élevage familial responsable de lapins et cobayes. Adoptions avec accompagnement et suivi.',
    images: ['/images/hero-center.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-secondary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
