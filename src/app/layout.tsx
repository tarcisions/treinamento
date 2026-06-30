import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TREINO NO DECK | Body Wise x Le Buffet Lounge",
  description:
    "Uma experiência exclusiva de movimento, energia e conexão em um dos cenários mais bonitos da cidade. Treine acima da rotina.",
  openGraph: {
    title: "TREINO NO DECK | Body Wise x Le Buffet Lounge",
    description:
      "Uma experiência fitness exclusiva no rooftop do Le Buffet Lounge. Vagas limitadas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TREINO NO DECK | Body Wise x Le Buffet Lounge",
    description:
      "Uma experiência fitness exclusiva no rooftop do Le Buffet Lounge. Vagas limitadas.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full bg-night font-sans text-cream">
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
