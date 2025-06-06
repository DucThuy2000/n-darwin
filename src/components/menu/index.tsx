"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";

const MENUS = [
  { name: "about-me", path: "#about" },
  { name: "experiences", path: "#experience" },
  { name: "projects", path: "#projects" },
  { name: "contacts", path: "#contacts" },
];

export const Menu = ({ className = "" }) => {
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    // Only handle anchor links (those starting with #)
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div
      className={twMerge("flex flex-col gap-8 md:flex-row md:gap-6", className)}
    >
      {MENUS.map((menu) => (
        <Link
          href={menu.path}
          key={menu.name}
          onClick={(e) => handleScroll(e, menu.path)}
          className={cn(
            "flex items-center gap-0.5 text-2xl text-secondary hover:text-white",
            "md:text-base",
            pathname === menu.path && "font-medium text-white"
          )}
        >
          <span className="text-primary">#</span>
          {menu.name}
        </Link>
      ))}
    </div>
  );
};
