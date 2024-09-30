import React, { FC } from "react";
import { Container } from "../../shared/container";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";

interface InfoProps {}

const pathToSvg = "/images/svg";

const cards = [
  {
    id: 1,
    title: "Максимальная безопасность",
    desc: "Мы внедрили самые передовые технологии защиты данных, чтобы вы могли быть уверены в надежности каждого финансового действия.",
    icon: {
      path: `${pathToSvg}/protection-card.svg`,
      width: 120,
      height: 90,
      alt: "Protection card icon",
    },
    link: "/",
  },
  {
    id: 2,
    title: "Управляйте своими финансами",
    desc: "С NOX через удобное и интуитивное мобильное приложение. Полный контроль над счетами и операциями – в любое время и из любой точки мира, прямо с вашего смартфона.",
    icon: {
      path: `${pathToSvg}/manage-card.svg`,
      width: 85,
      height: 77,
      alt: "Manage card icon",
    },
    link: "/",
  },
  {
    id: 3,
    title: "Экспертная поддержка 24/7",
    desc: "Мы всегда на связи, чтобы помочь вам в решении любых финансовых вопросов, предоставляя необходимую поддержку и консультации. Ваше благополучие — наш приоритет, и мы готовы помочь вам в любое время.",
    icon: {
      path: `${pathToSvg}/support-card.svg`,
      width: 100,
      height: 100,
      alt: "Support card icon",
    },
    link: "/",
  },
];

export const Info: FC<InfoProps> = ({}) => {
  return (
    <section className="py-44">
      <Container>
        <div className="flex gap-10 justify-center">
          {cards.map((item) => (
            <Card className="flex flex-col p-6 h-[28.125rem] rounded-3xl w-[21.3rem] bg-black">
              <CardHeader className="h-[9.375rem] w-full rounded-2xl bg-[#585858]">
                <Image
                  className="m-auto"
                  src={item.icon.path}
                  width={item.icon.width}
                  height={item.icon.height}
                  alt={item.icon.alt}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-base text-balance text-white/80">{item.desc}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant={'primary'}>
                  Узнать подробнее <Icon name="ChevronRight" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
