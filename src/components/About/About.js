import {
  Section,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "../../styles/GlobalComponents";
const About = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a JavaScript web developer with sweet spot for React and functional
        component based web apps. I'm lured by everything that can be molded,
        organized and made better.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default About;
