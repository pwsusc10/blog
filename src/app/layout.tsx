import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "성표의 blog",
  description: "성표가 뭐하는 지 훔쳐보기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
