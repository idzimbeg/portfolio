import { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";
import Portal from "../../HOC/Portal";
import Typical from "react-typical";

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
          <SectionText>
            We are here to build awesome{" "}
            <Typical
              steps={["apps!", 1000, "projects!", 1000, "web!", 1000]}
              wrapper="h5"
            />
          </SectionText>

          <Button onClick={() => setShowModal(true)}>Contact me</Button>
          <Portal onClose={() => setShowModal(false)} show={showModal}></Portal>
        </LeftSection>
      </Section>
    </div>
  );
};

export default Hero;
