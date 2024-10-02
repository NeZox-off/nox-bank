import { FC } from "react";
import { Container } from "../../shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { businessClient, servicesClient } from "@/src/lib/static-data";
import Image from "next/image";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className="py-32 bg-[url('/images/svg/about-grid-patterns.svg')] bg-no-repeat bg-center">
      <Container>
        <Tabs defaultValue="client" className="">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-6xl font-bold mb-4">Про нас</h2>
              <p className="max-w-4xl text-white/60 text-lg">
                Банк NOX – ваш надійний партнер у світі фінансів. Ми пропонуємо
                зручні та безпечні рішення для управління вашими засобами,
                поєднуючи передові технології з простотою використання. NOX – це
                інновації та індивідуальний підхід, доступні кожному.
              </p>
            </div>
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
          <TabsContent value="client" className="flex items-start">
            {servicesClient.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center text-center gap-4 max-w-sm"
              >
                <div className="bg-primary rounded-full p-3">
                  <div className="bg-gradient-to-t from-primary to-secondary/20 p-5 rounded-full">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-balance">{item.desc}</p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="business" className="flex items-start">
            {businessClient.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center text-center gap-4 max-w-sm"
              >
                <div className="bg-primary rounded-full p-3">
                  <div className="bg-gradient-to-t from-primary to-secondary/20 p-5 rounded-full">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-balance">{item.desc}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default About;
