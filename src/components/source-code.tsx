import Image from "next/image";
import Link from "next/link";

import Github from "@/public/svg/github.svg";

export const SourceCode = ({
  size = "small",
  className,
}: {
  size?: "small" | "medium";
  className?: string;
}) => {
  const sizeClass = size === "small" ? "w-4 h-4" : "w-5 h-5";
  return (
    <Link
      href="https://github.com/DucThuy2000/n-darwin"
      target="_blank"
      className={className}
    >
      <Image
        src={Github}
        alt="Github"
        width={16}
        height={16}
        className={`mb-1 ${sizeClass}`}
      />
    </Link>
  );
};
