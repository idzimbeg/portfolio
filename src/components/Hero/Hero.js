import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import ContactForm from "../ContactForm/ContactForm";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to Igors portfolio,
          <br /> feel free to look around!
        </SectionTitle>
        <SectionText>We are here to build awesome apps!</SectionText>
        <Popup
          contentStyle={{
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
            justifyContent: "center",
            background: "#0F1624",
            color: " hsl(204,23.8%,95.9%)",
            width: "75%",
            fontFamily: "Space Grotesk,sans-serif",
            boxShadow: "3px 3px 20px rgba(80, 78, 78, 0.5)",
            border: "#0F1624",
            borderRadius: "5px",
            marginLeft: "10px"
          }}
          trigger={<Button>Contact Me</Button>}
          
        >
          <ContactForm />
        </Popup>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
