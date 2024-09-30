import { FC } from "react";
import { Container } from "../../shared/container";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";
import Image from "next/image";
import { CurrencyEnum, TransferTypeEnum } from "@/src/types/type";
import { cn } from "@/src/lib/utils";
import { formatCurrency } from "@/src/lib/formatCurrecy";

interface HeroProps {}

const transfers = [
  {
    id: 1,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "Maxim Kenley",
      hidden: false,
      transfer: {
        type: TransferTypeEnum.DEFAULT,
        currency: CurrencyEnum.USD,
        amount: -5.10,
      },
    },
    style: 'z-[3]'
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
    style: 'z-[2] opacity-60 -mt-6'
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
    style: 'z-[1] opacity-20 -mt-8'
  },
];

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="py-60 relative">
      <Container>
        <div className="flex justify-between items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white leading-tight mb-16 text-balance">
              Банк будущего для тех, кто ценит{" "}
              <span className="underline">уверенность</span> и{" "}
              <span className="underline">инновации</span>!
            </h1>
            <Button className="gap-2 border-2 border-border/10">
              Оформить карту <Icon name="ChevronRight" />{" "}
            </Button>
          </div>
          <div className="max-w-sm w-full">
            <ul>
              {transfers.map((item) => (
                <li
                  key={item.id}
                  className={cn("flex justify-between bg-background items-end rounded-2xl border-2 border-border/10 p-3 relative", item.style)}
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
                      <span className="text-white/40">{item.user.transfer.type}</span>
                      <p>{item.user.hidden ? "*****" : item.user.name}</p>
                    </div>
                  </div>
                  <p className={cn(item.user.transfer.amount >= 0 ? "text-lime-500" : "text-white")}>{formatCurrency(item.user.transfer.amount, item.user.transfer.currency)}</p>
                </li>
              ))}
            </ul>
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
        className="absolute bottom-0 left-0 z-[-1]"
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
        className="absolute bottom-0 right-0 z-[-1]"
        src={"/images/svg/right-bottom-abs.svg"}
        width={720}
        height={609}
        alt="Abstract image"
      />
    </section>
  );
};

export default Hero;
