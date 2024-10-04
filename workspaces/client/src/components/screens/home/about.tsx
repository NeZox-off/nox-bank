import { FC } from "react";
import { Container } from "../../shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { businessClient, servicesClient } from "@/src/lib/static-data";
import Image from "next/image";

interface AboutProps {}

export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="py-32 bg-[url('/images/svg/about-grid-patterns.svg')] bg-no-repeat bg-center bg-cover lg:bg-contain">
      <Container>
        <Tabs defaultValue="client" className="">
          <div className="flex items-start justify-between mb-5 flex-col lg:items-end lg:mb-10 lg:flex-row">
            <div className="mb-5 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Про нас</h2>
              <p className="max-w-full md:max-w-xl xl:max-w-4xl text-white/60 text-lg">
                Банк NOX – ваш надійний партнер у світі фінансів. Ми пропонуємо
                зручні та безпечні рішення для управління вашими засобами,
                поєднуючи передові технології з простотою використання. NOX – це
                інновації та індивідуальний підхід, доступні кожному.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-1">
              <span className="text-sm text-white/40">Послуги для:</span>
              <TabsList className="bg-primary rounded-2xl gap-2 px-3 py-2">
                <TabsTrigger
                  className="rounded-xl border-2 border-border/10"
                  value="client"
                >
                  Клієнта
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-xl border-2 border-border/10"
                  value="business"
                >
                  Бізнесу
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent
            value="client"
            className="flex items-center justify-center flex-col gap-5 data-[state=active]:h-auto lg:gap-0 lg:flex-row lg:data-[state=active]:h-72"
          >
            {servicesClient.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center text-center gap-4 max-w-sm"
              >
                <div className="bg-primary rounded-full p-2 lg:p-3">
                  <div className="bg-gradient-to-t from-primary to-secondary/20 p-3 lg:p-5 rounded-full">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                <p className="text-balance text-white/60">{item.desc}</p>
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="business"
            className="flex items-center justify-center flex-col gap-5 data-[state=active]:h-full lg:gap-0 lg:flex-row lg:data-[state=active]:h-72"
          >
            {businessClient.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center text-center gap-4 max-w-sm"
              >
                <div className="bg-primary rounded-full p-2 lg:p-3">
                  <div className="bg-gradient-to-t from-primary to-secondary/20 p-3 lg:p-5 rounded-full">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                <p className="text-balance text-white/60">{item.desc}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};