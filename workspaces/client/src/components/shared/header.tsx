"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { navigation } from "@/src/lib/static-data";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import { Icon } from "../ui/icon";

export const Header: FC = ({}) => {
  const pathname = usePathname();
  return (
    <header className="fixed z-10 w-full top-8 flex justify-center px-5 lg:px-0">
      <div
        className={cn(
          "flex justify-center w-full items-center shadow-xl rounded-3xl px-10 py-3 backdrop-blur-md border border-border/10 max-w-full",
          "lg:max-w-5xl",
          "md:max-w-4xl"
        )}
      >
        <div className="lg:flex-1 justify-center lg:justify-start w-full flex order-1 lg:order-0">
          <Link href={"/"}>
            <Image
              src={"/images/svg/logo-white.svg"}
              width={50}
              height={30}
              alt="NOX logos"
            />
          </Link>
        </div>
        <nav className="flex-none hidden lg:flex lg:relative order-1">
          <ul className="flex items-center gap-4">
            {navigation.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "relative text-white/60 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]",
                  pathname === item.link ? "text-white" : ""
                )}
              >
                <Link href={item.link} className="px-2 text-lg">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger className="block lg:hidden order-0">
            <Icon name="AlignLeft" className="size-8" />
          </SheetTrigger>
          <SheetContent>
            <SheetContent className="border-white/10">
              <nav className="mt-20">
                <ul className="flex items-center w-full justify-center gap-10 flex-col">
                  {navigation.map((item) => (
                    <li key={item.id} className={cn("relative w-full")}>
                      <Link
                        href={item.link}
                        className={cn(
                          "py-3 rounded-2xl text-lg w-full flex items-center justify-center text-center cursor-pointer transition-all ease-in-out border-2",
                          pathname === item.link ? "text-white border-border/10 bg-white/20" : "text-white/60 border-border/0"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </SheetContent>
        </Sheet>
        <div className="flex-1 justify-end flex order-3">
          <Button className="p-0 w-9 h-9 border-2 border-border/10 rounded-full">
            <Image
              src={"/images/svg/login.svg"}
              width={24}
              height={24}
              alt="Login icon"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};
