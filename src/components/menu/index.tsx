"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";

const MENUS = [
  { name: "about-me", path: "#about" },
  { name: "experiences", path: "#experience" },
  { name: "projects", path: "#projects" },
  { name: "contacts", path: "#contacts" },
];

interface MenuProps {
  className?: string;
  onClick?: () => void;
}

export const Menu = ({ className = "", onClick }: MenuProps) => {
  return (
    <div
      className={twMerge("flex flex-col gap-8 md:flex-row md:gap-6", className)}
    >
      {MENUS.map((menu) => (
        <Link
          href={menu.path}
          key={menu.name}
          className={cn(
            "flex items-center gap-0.5 text-2xl text-secondary hover:text-white",
            "md:text-base"
          )}
          onClick={() => onClick && onClick()}
        >
          <span className="text-primary">#</span>
          {menu.name}
        </Link>
      ))}
    </div>
  );
};
