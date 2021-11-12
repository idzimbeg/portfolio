import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 10, text: 'Projects'},
  { number: 2, text: 'Algebra Courses', },
  { number: 3, text: 'Udemy Courses', },
];

const Accomplishments = () => (
 <Section>
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes>
     {data.map((card, index) => (
       <Box key={index}>
         <BoxNum>{card.number}+</BoxNum>
         <BoxText>{card.text}</BoxText>
      </Box>
     ))}
   </Boxes>
 </Section>
);

export default Accomplishments;
