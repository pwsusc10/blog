import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

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
      <body className={sans.className}>
        <section className="flex flex-col justify-between  h-screen mx-28">
          <header className="flex items-center justify-between my-3">
            <Link href="/" className="text-3xl font-bold">
              성표의 blog
            </Link>
            <nav className="flex items-center text-base">
              <Link href="/" className="px-2">
                home
              </Link>
              <Link href="/about" className="px-2">
                about
              </Link>
              <Link href="/post" className="px-2">
                post
              </Link>
              <Link href="/contact" className="px-2">
                contact
              </Link>
            </nav>
          </header>
          <section className="">{children}</section>
          <footer className="text-center">
            Copyright© 2023.pwsusc10.All rights reserved.
          </footer>
        </section>
      </body>
    </html>
  );
}
