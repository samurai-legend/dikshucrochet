import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import "@/styles/main.scss";
import Provider from "./_trpc/Provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Dikshu Crochet",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${oswald.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
