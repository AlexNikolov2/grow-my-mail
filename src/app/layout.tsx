import type { Metadata } from "next";
import { Poppins } from "next/font/google"; //change the font to Poppins!
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
}); // change the font to Poppins!

export const metadata: Metadata = {
  title: "Grow my mail",
  description: "Grow your email market pool!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
