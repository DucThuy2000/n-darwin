"use client";
import Burger from "@/public/svg/burger.svg";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { Menu } from ".";

export const BurgerMenu = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="cursor-pointer">
            <Image src={Burger} alt="burger" width={24} height={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-80">
          <Menu className="px-4 py-10 mt-5" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
