import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const interExtraBold = localFont({
  src: "../public/fonts/Inter_18pt-ExtraBold.ttf",
  weight: "800",
  display: 'swap',
})
const interBold = localFont({
  src: "../public/fonts/Inter_18pt-Bold.ttf",
  weight: "700",
  display: 'swap',
})
const interMedium = localFont({
  src: "../public/fonts/Inter_18pt-Medium.ttf",
  weight: "500",
  display: 'swap',
})
const interRegular = localFont({
  src: "../public/fonts/Inter_18pt-Regular.ttf",
  weight: "400",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Главная | NOX Bank",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${interExtraBold.className} ${interBold.className} ${interMedium.className} ${interRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
