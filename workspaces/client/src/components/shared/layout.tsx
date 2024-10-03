import { FC, PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
