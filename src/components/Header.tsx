import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="text-3xl font-bold">
        {"성표의 blog"}
      </Link>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/post">post</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
