import { Code, Heart } from "lucide-react";

import { SourceCode } from "../source-code";

export const Footer = () => {
  return (
    <footer className="flex h-16 w-full flex-col items-center justify-center gap-1">
      <div className="flex items-center gap-1.5">
        Build with <Code size={16} />
        and <Heart size={16} />
        love
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        The source code is available on <SourceCode className="ml-1" />
      </div>
    </footer>
  );
};
