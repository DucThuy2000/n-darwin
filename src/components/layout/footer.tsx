import { Code, Heart, Power } from "lucide-react";
import { SourceCode } from "../source-code";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-16 gap-1">
      <div className="flex items-center gap-1.5">
        Build with <Code size={16} />
        and <Heart size={16} />
        love
      </div>
      <div className="flex items-center gap-1.5 flex-wrap text-balance">
        Powered By <Power size={16} /> Darwin. The source code is available on
        <SourceCode className="ml-1" />
      </div>
    </footer>
  );
};
