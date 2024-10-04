import { FC } from "react";
import { Container } from "../../shared/container";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";
import Image from "next/image";
import { CurrencyEnum, TransferTypeEnum } from "@/src/types/type";
import { cn } from "@/src/lib/utils";
import { formatCurrency } from "@/src/lib/formatCurrecy";
import { Separator } from "../../ui/separator";
import { showCurrency } from "@/src/lib/static-data";

interface HeroProps {}

export const transfers = [
  {
    id: 1,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "Maxim Kenley",
      hidden: false,
      transfer: {
        type: TransferTypeEnum.DEFAULT,
        currency: CurrencyEnum.USD,
        amount: -5.1,
      },
    },
    style: "z-[3]",
  },
  {
    id: 2,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "John Kenley",
      hidden: true,
      transfer: {
        type: TransferTypeEnum.EXCHANGE,
        currency: CurrencyEnum.USD,
        amount: 1009,
      },
    },
    style: "z-[2] opacity-60 -mt-6",
  },
  {
    id: 3,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "Maxim Kenley",
      hidden: false,
      transfer: {
        type: TransferTypeEnum.DEFAULT,
        currency: CurrencyEnum.USD,
        amount: -3.99,
      },
    },
    style: "z-[1] opacity-20 -mt-8",
  },
];

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="py-60 relative h-screen overflow-hidden">
      <Container>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white leading-tight mb-16">
              Банк майбутнього для тих, хто цінує{" "}
              <span className="underline">впевненість</span> та{" "}
              <span className="underline">інновації</span>!
            </h1>
            <Button className="gap-2 border-2 border-border/10">
              Оформити картку <Icon name="ChevronRight" />{" "}
            </Button>
          </div>
          <div className="max-w-sm w-full hidden lg:block">
            <ul className="mb-5">
              {transfers.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    "flex justify-between bg-background items-end rounded-2xl border-2 border-border/10 p-3 relative",
                    item.style
                  )}
                >
                  <div className="flex gap-2 items-center">
                    <Button variant={"none"} className="bg-white p-0 h-10 w-10">
                      <Image
                        src={`${item.icon}`}
                        width={20}
                        height={20}
                        alt="Transfer icon"
                      />
                    </Button>
                    <div>
                      <span>{item.user.transfer.type}</span>
                      <p>{item.user.hidden ? "*****" : item.user.name}</p>
                    </div>
                  </div>
                  <p
                    className={cn(
                      item.user.transfer.amount >= 0
                        ? "text-lime-500"
                        : "text-white"
                    )}
                  >
                    {formatCurrency(
                      item.user.transfer.amount,
                      item.user.transfer.currency
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <div className="bg-primary border-2 border-border/10 rounded-2xl px-3 py-2 mb-2">
                <div className="flex items-center h-8 mb-2">
                  <div className="flex gap-1 items-center pr-[2.15rem]">
                    <Image
                      src={"/images/png/USA.png"}
                      width={28}
                      height={28}
                      alt="USA flag country"
                    />
                    <div>
                      <span className="text-sm">USD</span>
                      <p className="text-white/40 text-xs truncate">
                        United States Dollar
                      </p>
                    </div>
                  </div>
                  <Separator
                    className="bg-border/10 w-0.5"
                    orientation="vertical"
                  />
                  <div className="flex gap-1 items-center pl-4">
                    <Image
                      src={"/images/png/Europe.png"}
                      width={28}
                      height={28}
                      alt="USA flag country"
                    />
                    <div>
                      <span className="text-sm">EUR</span>
                      <p className="text-white/40 text-xs truncate">
                        European Union Euro
                      </p>
                    </div>
                  </div>
                </div>
                <Separator className="bg-border/10 h-0.5" />
                <div className="flex items-center space-x-28 h-8 mt-2">
                  <p className="text-sm">
                    {formatCurrency(1000, CurrencyEnum.USD, false)}
                  </p>
                  <Separator
                    className="bg-border/10 w-0.5"
                    orientation="vertical"
                  />
                  <p className="text-sm">
                    {formatCurrency(895.47, CurrencyEnum.EUR, false)}
                  </p>
                </div>
              </div>
              <Button className="border-2 border-border/10 w-full gap-2 py-3">
                Перевести{" "}
                <Image
                  src={"/images/svg/cash-transfer.svg"}
                  width={24}
                  height={24}
                  alt="Cash transfer icon"
                />
              </Button>
              <div className="flex justify-between items-center px-4 py-1 bg-primary rounded-2xl border-2 border-border/10 mt-3">
                <p>Підтримувані валюти</p>
                <ul className="flex items-center gap-1 p-2 rounded-full bg-primary border border-border/10">
                  {showCurrency.map((item) => (
                    <li key={item.id} className="bg-[#262626] rounded-full">
                      <Image
                        src={item.icon}
                        width={32}
                        height={32}
                        alt={item.title}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Image
        className="absolute top-0 left-0 z-[-1]"
        src={"/images/svg/left-top-abs.svg"}
        width={720}
        height={609}
        alt="Abstract image"
      />
      <Image
        className="absolute -bottom-2 left-0 z-[-1]"
        src={"/images/svg/left-bottom-abs.svg"}
        width={720}
        height={609}
        alt="Abstract image"
      />
      <Image
        className="absolute top-0 right-0 z-[-1]"
        src={"/images/svg/right-top-abs.svg"}
        width={720}
        height={609}
        alt="Abstract image"
      />
      <Image
        className="absolute -bottom-2 right-0 z-[-1]"
        src={"/images/svg/right-bottom-abs.svg"}
        width={720}
        height={609}
        alt="Abstract image"
      />
    </section>
  );
};
