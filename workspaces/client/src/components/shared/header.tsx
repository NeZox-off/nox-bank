"use client";
import React, { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const navigation = [
  {
    id: 1,
    title: "Главная",
    link: "/",
  },
  {
    id: 2,
    title: "О нас",
    link: "/about",
  },
  {
    id: 3,
    title: "Услуги",
    link: "/offers",
  },
  {
    id: 4,
    title: "Бизнесс",
    link: "/business",
  },
];

export const Header: FC = ({}) => {
  const pathname = usePathname();
  return (
    <header className="fixed z-10 w-full top-8 flex justify-center">
      <div className="flex justify-center w-full max-w-5xl items-center shadow-xl rounded-3xl p-3 backdrop-blur-md border border-border/10">
        <div className="flex-1 justify-start flex">
          <Link href={"/"}>
            <Image
              src={"/images/svg/logo-white.svg"}
              width={50}
              height={30}
              alt="NOX logos"
            />
          </Link>
        </div>
        <nav className="flex-none">
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
        <div className="flex-1 justify-end flex">
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
