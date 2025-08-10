import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "./constants/index";

export default function Menu() {
  return (
    <ul className="flex flex-col h-full gap-12 transition-all duration-1000 items-center w-full rounded lg:hidden">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="regular-16 text-gray-500  cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
