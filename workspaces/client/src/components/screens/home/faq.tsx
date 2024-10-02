import { FC } from "react";
import { Container } from "../../shared/container";
import { faq } from "@/src/lib/static-data";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-20">
          <h2 className="font-bold mb-3 text-5xl">Часті питання</h2>
          <p className="text-white/40">
            У вас ще лишилися питання? Зверніться до нашої команди за адресою
            support@nox.com.
          </p>
        </div>
        <div className="relative">
          <ul className="flex items-start flex-wrap gap-6 justify-center">
            {faq.map((item) => (
              <li
                key={item.id}
                className="max-w-xl w-full h-96 rounded-2xl divide divide-y divide-solid space-y-6 border border-border/10 p-12 bg-[url('/images/svg/faq-bg.svg')] bg-no-repeat bg-top"
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-lg text-white/60 pt-6">{item.desc}</p>
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

export default Faq;
