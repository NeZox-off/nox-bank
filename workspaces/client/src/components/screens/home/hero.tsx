import { FC } from "react";
import { Container } from "../../shared/container";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";
import Image from "next/image";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="py-60">
      <Container>
        <div className="flex justify-between items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-black leading-tight mb-16 text-balance">
              Банк будущего для тех, кто ценит{" "}
              <span className="underline">уверенность</span> и{" "}
              <span className="underline">инновации</span>!
            </h1>
            <Button variant={'secondary'} className="gap-2">Оформить карту <Icon name="ChevronRight" /> </Button>
          </div>
          <div>
            <Image src={'/images/png/cards.png'} width={540} height={331} alt="Sun card image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
