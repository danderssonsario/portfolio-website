import Link from 'next/link';
import React from 'react';
import { AiFillCloseSquare, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/' style={{ display: 'flex', alignItems: 'center', color: 'whitesmoke', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size='3rem'></AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
