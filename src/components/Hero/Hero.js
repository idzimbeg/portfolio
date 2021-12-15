import { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";
import Portal from "../../HOC/Portal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome to my portfolio,
            <br /> feel free to look around!
          </SectionTitle>
          <SectionText>We are here to build awesome apps!</SectionText>

          <Button onClick={() => setShowModal(true)}>Contact me</Button>
          <Portal onClose={() => setShowModal(false)} show={showModal}></Portal>
        </LeftSection>
      </Section>
    </div>
  );
};

export default Hero;
