export const StackTag = ({ stack }: { stack: string }) => {
  return (
    <span className="inline-block rounded-full border border-primary/60 px-2 py-1 text-xs font-medium text-secondary">
      {stack}
    </span>
  );
};
