import type { Metadata } from "next";
import { Figtree, Marcellus, Noto_Serif_Tamil } from "next/font/google";
import { CartDrawer, CartProvider } from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const display = Marcellus({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const body = Figtree({ variable: "--font-body", subsets: ["latin"] });
const tamil = Noto_Serif_Tamil({ variable: "--font-tamil", subsets: ["tamil"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: {
    default: "Sri Meenakshi Silk House | Silk sarees, dhotis & divine vastrams, Mylapore",
    template: "%s | Sri Meenakshi Silk House",
  },
  description:
    "Kanchipuram silk sarees, pattu veshtis and made-to-size vastrams for deities, from Mylapore, Chennai. Bulk and custom orders welcome.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${tamil.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
