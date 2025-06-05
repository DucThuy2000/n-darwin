import { ArrowUpRightIcon, Lock } from "lucide-react";
import Link from "next/link";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const ProjectExternalLink = ({ url }: { url?: string }) => {
  return (
    <>
      {url ? (
        <Link
          href={url}
          rel="noopener nofollow"
          target="_blank"
          className="inline-flex size-4 shrink-0 items-end justify-center text-secondary"
        >
          <ArrowUpRightIcon className="pointer-events-none" />
          <span className="sr-only">Open</span>
        </Link>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild className="flex items-center justify-center">
            <Lock className="ml-1 size-3 text-secondary" />
          </TooltipTrigger>
          <TooltipContent>Contact for more details.</TooltipContent>
        </Tooltip>
      )}
    </>
  );
};
