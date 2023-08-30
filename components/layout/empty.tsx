import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";

export default function EmptyLayout({children}: LayoutProps) {
  return (
      <>{children}</>
  );
}
