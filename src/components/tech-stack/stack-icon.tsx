import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface IProps {
  key: string;
  title: string;
  icon: string | StaticImport;
  className?: string;
}

export const StackIcon = ({ stack }: { stack: IProps }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Image
          src={stack.icon}
          alt={stack.key}
          width={36}
          height={36}
          className="h-9 w-9"
        />
      </TooltipTrigger>
      <TooltipContent className="py-2 text-sm">{stack.title}</TooltipContent>
    </Tooltip>
  );
};
