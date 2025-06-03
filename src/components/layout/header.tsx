import Image from "next/image";
import Logo from "@/public/svg/logo.svg";
import { BurgerMenu } from "../menu/burger-menu";
import { Menu } from "../menu";
import { SourceCode } from "../source-code";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-12">
      <HeaderLogo />
      <div className="flex items-center gap-2 md:hidden">
        <SourceCode size="medium" />
        <BurgerMenu />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Menu />
        <SourceCode size="medium" />
      </div>
    </header>
  );
};

const HeaderLogo = () => (
  <div className="flex items-center gap-1">
    <Image src={Logo} alt="logo-w-text" width={21} height={21} />
    <span className="font-extrabold">Darwin</span>
  </div>
);
