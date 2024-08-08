import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "../components/Navbar";
import SessionWrapper from "./SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommendations",
  description: "Discover and explore movies with our recommendation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
          <StoreProvider>
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </StoreProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}