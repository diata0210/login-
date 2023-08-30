import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";

export default function MainLayout({children}: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <div>Sidebar</div>
      <Link href ="/">
        Home
      </Link>
      <Link href ="/about">
        About
      </Link>
      <div>{children}</div>
    </div>
  );
}
