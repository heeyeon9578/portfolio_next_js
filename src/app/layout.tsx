import type { Metadata } from "next";
import "./globals.css";
import "./styles/variables.css"

export const metadata: Metadata = {
  title: "최희연",
  description: "🌸최희연의 포트폴리오입니다🌸",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
