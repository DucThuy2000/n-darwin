import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { TooltipContent, TooltipTrigger, Tooltip } from "../ui/tooltip";
import Image from "next/image";

interface IProps {
  key: string;
  title: string;
  icon: string | StaticImport;
  className?: string;
}

export const StackItem = ({ stack }: { stack: IProps }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Image src={stack.icon} alt={stack.key} width={36} height={36} />
      </TooltipTrigger>
      <TooltipContent className="py-2 text-sm">{stack.title}</TooltipContent>
    </Tooltip>
  );
};
