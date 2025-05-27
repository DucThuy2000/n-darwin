import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

function Prose({
  className,
  asChild,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="prose lg:prose-xl"
      className={cn(
        "prose max-w-none font-mono text-secondary prose-zinc dark:prose-invert",
        "prose-headings:font-heading prose-headings:font-semibold prose-headings:text-balance",
        "prose-h2:border-b prose-h2:pb-2",
        "prose-lead:text-base",
        "prose-a:font-semibold prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-hr:border-edge",
        className
      )}
      {...props}
    />
  );
}

export { Prose };
