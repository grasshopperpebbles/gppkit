import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GPP - Multi-Platform Project Toolkit",
    template: "%s | GPP",
  },
  description:
    "Scaffold and manage multi-platform projects with a unified CLI. Web, API, CMS, mobile, desktop - all in one place.",
  keywords: [
    "cli",
    "scaffold",
    "monorepo",
    "nextjs",
    "react",
    "fastapi",
    "flutter",
    "expo",
  ],
  metadataBase: new URL("https://gppkit.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gppkit.dev",
    siteName: "GPP",
    title: "GPP - Multi-Platform Project Toolkit",
    description:
      "Scaffold and manage multi-platform projects with a unified CLI. Web, API, CMS, mobile, desktop - all in one place.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GPP - Multi-Platform Project Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPP - Multi-Platform Project Toolkit",
    description:
      "Scaffold and manage multi-platform projects with a unified CLI. Web, API, CMS, mobile, desktop - all in one place.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-950 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
