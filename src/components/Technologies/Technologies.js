import React from 'react';
import { DiCssTricks, DiNodejsSmall, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've used technologies, tools and libraries in front-end web development world. I have modest experience using socket.io, express, axios, redux to name the few. Also, I've somewhat used version control with git and deployed my example sites with netlify and heroku.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js <br />
          Next.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejsSmall size="3rem" />
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js <br />
          Git
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiCssTricks size="3rem"/> 
      <ListContainer>
        <ListTitle>Design</ListTitle>
        <ListParagraph>
          Experience with <br />
          CSS <br />
          SCSS
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
