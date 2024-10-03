import { About, Faq, Hero, Reviews } from "@/src/components/screens/home";
import Layout from "@/src/components/shared/layout";

export default function Home() {
  return (
      <Layout>
        <Hero />
        <About/>
        <Faq/>
        <Reviews/>
      </Layout>
  );
}
