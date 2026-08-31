import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Turco Hamburgueria | O 23º melhor hambúrguer do Brasil",
  description:
    "Hambúrgueres artesanais selados na manteiga de leite e na manteiga de bacon. Experimente o Burak Burger — o 23º melhor hambúrguer do Brasil — na Turco, em Goiânia.",
  keywords: [
    "Turco Hamburgueria",
    "Burak Burger",
    "hambúrguer artesanal Goiânia",
    "melhor hambúrguer do Brasil",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="texture-dark min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
