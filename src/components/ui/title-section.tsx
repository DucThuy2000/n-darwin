export const TitleSection = ({ title }: { title: string }) => {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="text-3xl font-medium">
        <span className="mr-0.5 text-primary">#</span>
        {title}
      </h2>
      <div className="h-0.5 w-48 bg-primary"></div>
    </div>
  );
};
