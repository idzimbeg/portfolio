import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";

import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ProjectTimeLine from "../components/ProjectTimeLine/ProjectTimeLine";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <ProjectTimeLine />
      <Technologies />
    </Layout>
  );
};

export default Home;
