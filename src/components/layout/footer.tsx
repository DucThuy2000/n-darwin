import { Code, Heart, Power } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-16 gap-1">
      <div className="flex items-center gap-1.5">
        Build with <Code size={16} />
        and <Heart size={16} />
        love
      </div>
      <div className="flex items-center gap-1.5">
        Powered By <Power size={16} /> Darwin
      </div>
    </footer>
  );
};
