import React, { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    id: 1,
    title: "Главная",
    link: "/",
  },
  {
    id: 2,
    title: "О нас",
    link: "/about",
  },
  {
    id: 3,
    title: "Услуги",
    link: "/offers",
  },
  {
    id: 4,
    title: "Бизнесс",
    link: "/business",
  },
];

export const Header: FC = ({}) => {
  return (
    <header className="fixed w-full top-8">
      <Container>
        <div className="flex items-center shadow-lg rounded-3xl p-6 backdrop-blur-md">
          <div className="flex-1">
            <Link href={"/"}>
              <Image
                src={"/images/svg/logo-black.svg"}
                width={50}
                height={30}
                alt="NOX logos"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-1"></div>
        </div>
      </Container>
    </header>
  );
};
