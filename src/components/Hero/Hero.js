import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        quote? slogan
      </SectionTitle>
      <SectionText>
        Hi, i'm Daniel. <br/>
        Currently a student at Linneus University pursuing a B.Sc degree in web development.
        I'm 
      </SectionText>
      <Button onClick={() => window.location = '' }></Button>
    </LeftSection>
  </Section>
);

export default Hero;