import React from 'react';
import { DiCssTricks, DiGithub, DiHeroku, DiJavascript, DiNodejsSmall, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with technologies, tools and libraries in front-end web development world. Every day gives a new chance to learn and grow in this amazing place which is web development, so I've already dipped my toes, so to say, in the back-end as well.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <DiJavascript size="3rem" />
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
      <DiGithub size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js <br />
          Git
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiCssTricks size="3rem"/>
      <DiHeroku size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
