import * as React from "react";

import { cn } from "@/lib/utils";

export function VisuallyHidden({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "absolute h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap",
        className
      )}
      style={{ clip: "rect(0 0 0 0)" }}
      {...props}
    />
  );
}
