"use client";
import React, { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/src/lib/static-data";
import { cn } from "@/src/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Slash } from "lucide-react";
import { Icon } from "../ui/icon";
import { Button } from "../ui/button";

interface footerProps {}

export const Footer: FC<footerProps> = ({}) => {
  const pathname = usePathname();
  const breadcrumbItems = navigation.reduce((acc, item, index, array) => {
    acc.push(
      <BreadcrumbItem
        key={index}
        className={cn(
          "relative text-white/60 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]",
          pathname === item.link ? "text-white" : ""
        )}
      >
        <Link href={`${item.link}`} className="text-lg">
          {item.title}
        </Link>
      </BreadcrumbItem>
    );
    if (index < array.length - 1) {
      acc.push(
        <li key={index + Math.floor(Math.random() * 100)}>
          <Icon name="Slash" className="text-white/10" key={`sep-${index}`} />
        </li>
      );
    }
    return acc;
  }, [] as JSX.Element[]);
  return (
    <footer className="bg-black py-16">
      <Container>
        <div className="flex items-start justify-between mb-24">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/svg/logo-white.svg"}
                width={100}
                height={60}
                alt="NOX logo"
              />
            </Link>
            <Breadcrumb className="mt-7">
              <BreadcrumbList className="flex items-center gap-4">
                {breadcrumbItems}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-5 flex-col w-1/3">
            <div className="max-w-56">
              <span className="text-white/40 text-sm">Зв'язатися з нами</span>
              <Link className="flex gap-2 text-xl" href={"tel:+1234567890"}>
                <span className="text-white/40">(</span>
                +1 234 567 890
                <span className="text-white/40">)</span>
              </Link>
            </div>
            <div className="flex items-start justify-between">
              <div className="max-w-56">
                <span className="text-white/40 text-sm">Місцезнаходження</span>
                <p className="text-white/70">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </p>
              </div>
              <div className="max-w-56 flex flex-col">
                <span className="text-white/40 text-sm">Емаїл</span>
                <Link href={"mailto:info@nox.com"} className="text-white/70">
                  info@nox.com
                </Link>
              </div>
            </div>
            <div className="max-w-56">
              <span className="text-white/40 text-sm">Пн - Пт</span>
              <p className="text-white/70 text-2xl">9am—6pm</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button
            size={"icon"}
            variant={"none"}
            className="border border-border rounded-full"
            rounded={null}
          >
            <Icon name="ChevronUp" />
          </Button>
          <div className="w-1/3">
            <Link href={"/"}>© {new Date().getFullYear()} — Copyright</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
