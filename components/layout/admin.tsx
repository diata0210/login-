import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import { Auth } from "../common/auth";

export default function AdminLayout({children}: LayoutProps) {
  return (
      <Auth>
        <h1>Admin Layout</h1>
        <div>Sidebar</div>
        <Link href ="/">
          Home
        </Link>
        <Link href ="/about">
          About
        </Link>
        <div>{children}</div>
      </Auth>
  );
}
