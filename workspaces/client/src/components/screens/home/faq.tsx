import { FC } from "react";
import { Container } from "../../shared/container";
import { faq } from "@/src/lib/static-data";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";
import { cn } from "@/src/lib/utils";

interface FaqProps {}

export const Faq: FC<FaqProps> = ({}) => {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 md:mb-20 flex flex-col items-start md:justify-center md:items-center">
          <h2 className="font-bold mb-3 text-2xl md:text-3xl lg:text-5xl">Часті питання</h2>
          <p className="text-white/40 text-sm md:text-base">
            У вас ще лишилися питання? Зверніться до нашої команди за адресою
            support@nox.com.
          </p>
        </div>
        <div className="relative">
          <ul className="flex items-start flex-wrap gap-6 justify-center">
            {faq.map((item) => (
              <li
                key={item.id}
                className={
                  cn("rounded-2xl divide-white/10 divide-y-2 divide-solid space-y-6 border border-border/10 p-4 bg-[url('/images/svg/faq-bg.svg')] bg-no-repeat bg-top",
                    "xl:max-w-xl xl:h-96 xl:p-12",
                    "lg:max-w-md lg:h-80 lg:p-10",
                    "md:p-8"
                  )
                }
              >
                <h3 className="text-base md:text-lg xl:text-xl">{item.title}</h3>
                <p className="text-sm md:text-base xl:text-lg text-white/60 pt-6">{item.desc}</p>
              </li>
            ))}
          </ul>
          <div className="absolute flex items-end justify-center bottom-0 w-full h-64 bg-gradient-to-t from-background to-background/40">
            <Button rounded={"xl"} className="border border-border/10 px-4 gap-1">Завантажити всі FAQ’s <Icon name="ChevronDown" /> </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
