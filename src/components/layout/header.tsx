import { PROFILE } from "@/const/user.const";

import { Menu } from "../menu";
import { BurgerMenu } from "../menu/burger-menu";
import { SourceCode } from "../source-code";

export const Header = () => {
  return (
    <header className="flex h-12 w-full items-center justify-between">
      <HeaderLogo />
      <div className="flex items-center gap-2 md:hidden">
        <SourceCode size="medium" />
        <BurgerMenu />
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <Menu />
        <SourceCode size="medium" />
      </div>
    </header>
  );
};

const HeaderLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-xl font-extrabold text-primary capitalize">
      {PROFILE.displayName}
    </span>
  </div>
);
