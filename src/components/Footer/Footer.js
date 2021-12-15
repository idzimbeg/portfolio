import React from "react";
import {
  AiFillCodeSandboxCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+385989090660">+(385)98-909-0660</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:igordzimbeg@gmail.com">
            igordzimbeg@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Make it better</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/idzimbeg">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/igor-dzimbeg-58225a173/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://codesandbox.io/u/idzimbeg">
            <AiFillCodeSandboxCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
