import { cn } from "@/lib/utils";
import * as React from "react";

export function VisuallyHidden({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "absolute h-px w-px p-0 overflow-hidden whitespace-nowrap border-0",
        className
      )}
      style={{ clip: "rect(0 0 0 0)" }}
      {...props}
    />
  );
}
