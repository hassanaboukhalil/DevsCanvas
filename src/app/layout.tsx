import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DevsCanvas — Open-Source Design Generators for Developers",
  description:
    "Create beautiful SVG assets, CSS styles, and color palettes. Export production-ready code in seconds. Free and open source.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="sections-max-width">{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GOATCOUNTER_CODE && (
          <script
            data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOATCOUNTER_CODE}.goatcounter.com/count`}
            async
            src="//gc.zgo.at/count.js"
          />
        )}
      </body>
    </html>
  );
}
