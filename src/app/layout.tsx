import type { Metadata } from "next";
import { Raleway } from "next/font/google"; //change the font to Poppins!
import "./globals.css";

const font = Raleway({ subsets: ["latin"] }); // change the font to Poppins!

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
