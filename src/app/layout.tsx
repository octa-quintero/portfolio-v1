import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import BodyClient from "@/components/sections/body-client";

export const metadata: Metadata = {
  title: "octa-quintero",
  description: "portfolio",
  icons: {
    icon: "/favicon.ico.ico",
  },
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={roboto.className}>
      <BodyClient>
        {children}
      </BodyClient>
    </html>
  );
}