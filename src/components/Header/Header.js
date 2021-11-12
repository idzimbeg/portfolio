import Link from "next/link";
import React from "react";
import {
  AiFillCodeSandboxCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { VscGitMerge } from 'react-icons/vsc';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white"
          }}
        >
          <VscGitMerge size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/idzimbeg">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/igor-dzimbeg-58225a173/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://codesandbox.io/u/idzimbeg">
        <AiFillCodeSandboxCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
