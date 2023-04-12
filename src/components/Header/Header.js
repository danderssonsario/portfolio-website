import Link from 'next/link';
import React from 'react';
import { AiFillCloseSquare, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa'

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/' style={{ display: 'flex', alignItems: 'center', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '20px' }}>
          <FaLaptopCode size="3rem" style={{ marginRight: '4px' }} /> <Span>Portfolio</Span> 
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
      <li>
        <Link href='#projects'>
          <NavLink>Contact</NavLink>
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
