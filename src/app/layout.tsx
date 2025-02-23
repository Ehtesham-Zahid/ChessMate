import { Inter, Lora, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});
const lora = Lora({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-heading",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
  variable: "--font-accent",
});

export const metadata = {
  title: "ChessMate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 ${inter.variable} ${lora.variable} ${merriweather.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
