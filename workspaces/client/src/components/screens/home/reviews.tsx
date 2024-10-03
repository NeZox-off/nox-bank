import React, { FC } from "react";
import { Container } from "../../shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Card, CardContent } from "../../ui/card";
import { reviews } from "@/src/lib/static-data";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface reviewsProps {}

export const Reviews: FC<reviewsProps> = ({}) => {
  return (
    <section className="py-24">
      <Container>
        <Tabs defaultValue="client">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-6xl font-bold mb-4">Наші відгуки</h2>
              <p className="max-w-4xl text-white/60 text-lg">
                Дізнайтеся, як NOX змінив життя людей завдяки інноваційним
                цифровим рішенням та персоналізованому обслуговуванню клієнтів.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm text-white/40">Відгуки:</span>
              <TabsList className="bg-primary rounded-2xl gap-2 px-3 py-2">
                <TabsTrigger
                  className="rounded-xl border-2 border-border/10"
                  value="client"
                >
                  Клієнтів
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-xl border-2 border-border/10"
                  value="business"
                >
                  Бізнесів
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent className={cn()} value={"client"}>
            <Carousel
              className={cn(
                "relative w-full",
              )}
            >
              <CarouselContent>
                {reviews.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex flex-col items-center justify-center gap-12 p-1">
                      <div className="flex gap-5 items-center justify-center">
                        <div className="w-24 h-0.5 bg-[#262626]"></div>
                        <div>
                          <Image
                            loading="lazy"
                            className="h-auto w-auto"
                            src={"/images/svg/review-marks.svg"}
                            width={60}
                            height={60}
                            alt="Review marks"
                          />
                        </div>
                        <div className="w-24 h-0.5 bg-[#262626]"></div>
                      </div>
                      <p className="text-center max-w-72 text-lg">
                        {item.desc}
                      </p>
                      <h4 className="text-lg">{item.author}</h4>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent className={cn()} value={"business"}>
            <Carousel
              className={cn(
                "relative w-full",
              )}
            >
              <CarouselContent>
                {reviews.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex flex-col items-center justify-center gap-12 p-1">
                      <div className="flex gap-5 items-center justify-center">
                        <div className="w-24 h-0.5 bg-[#262626]"></div>
                        <div>
                          <Image
                            loading="lazy"
                            className="h-auto w-auto"
                            src={"/images/svg/review-marks.svg"}
                            width={60}
                            height={60}
                            alt="Review marks"
                          />
                        </div>
                        <div className="w-24 h-0.5 bg-[#262626]"></div>
                      </div>
                      <p className="text-center max-w-72 text-lg">
                        {item.desc}
                      </p>
                      <h4 className="text-lg">{item.author}</h4>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};
