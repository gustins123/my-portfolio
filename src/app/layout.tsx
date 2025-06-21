import type { Metadata } from "next";
import { Raleway } from "next/font/google"; // Import the font
import "./globals.css";

// Configure the font
const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavs Veitners | Portfolio", // TODO: Change "Your Name"
  description: "My personal design and development portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font and our theme colors here */}
      <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
        {/* The children are now the direct content of the body */}
        {children}
      </body>
    </html>
  );
}