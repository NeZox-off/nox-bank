import About from "@/src/components/screens/home/about";
import Faq from "@/src/components/screens/home/faq";
import Hero from "@/src/components/screens/home/hero";
import { Info } from "@/src/components/screens/home/info";
import Layout from "@/src/components/shared/layout";

export default function Home() {
  return (
      <Layout>
        <Hero />
        <About/>
        <Faq/>
        {/* <Info/> */}
      </Layout>
  );
}
