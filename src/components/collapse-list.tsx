import { Slot } from "@radix-ui/react-slot";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface CollapseListProps<T> {
  max: number;
  list: T[];
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}

export const CollapseList = <T,>({
  max,
  list,
  keyExtractor,
  renderItem,
}: CollapseListProps<T>) => {
  return (
    <Collapsible>
      {list.slice(0, max).map((item: T, index: number) => (
        <Slot
          key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
        >
          {renderItem(item)}
        </Slot>
      ))}

      <CollapsibleContent>
        {list.slice(max).map((item: T, index: number) => (
          <Slot
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(item)
                : max + index
            }
          >
            {renderItem(item)}
          </Slot>
        ))}
      </CollapsibleContent>

      {list.length > max && (
        <div className="mt-4 flex justify-center">
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="group/collapsible-trigger rounded-full"
            >
              <span className="hidden group-data-[state=closed]/collapsible-trigger:block">
                Show more
              </span>

              <span className="hidden group-data-[state=open]/collapsible-trigger:block">
                Show less
              </span>
              <ChevronDownIcon className="group-data-[state=open]/collapsible-trigger:rotate-180" />
            </Button>
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  );
};
