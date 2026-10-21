import type { Metadata } from "next";
import "./globals.css";
import "./styles/variables.css"

export const metadata: Metadata = {
  title: "최희연 · Frontend Developer",
  description: "작은 디테일로 더 좋은 경험을 만드는 프론트엔드 개발자 최희연의 포트폴리오. 프로젝트, 경력, 그리고 만드는 이야기.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
