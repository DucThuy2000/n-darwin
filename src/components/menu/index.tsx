"use client";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MENUS = [
  { name: "home", path: "/" },
  { name: "about-me", path: "#about" },
  { name: "projects", path: "#projects" },
  { name: "contacts", path: "#contacts" },
];

export const Menu = ({ className = "" }) => {
  const pathname = usePathname();

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
            "md:text-base",
            pathname === menu.path && "text-white font-medium"
          )}
        >
          <span className="text-primary">#</span>
          {menu.name}
        </Link>
      ))}
    </div>
  );
};
