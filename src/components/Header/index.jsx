import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web'

import Navigation from './Navigation';
import { default as logo } from '../../assets/logo.svg';
import Social from './Social';

const MainHeader = styled.header`
  padding: 32px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;

  img {
    width: 50px;
  }
`;

const LogoContainer = styled.div`
  min-width: 50px;
`;

function Header() {
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
    delay: 1000,
    config: {
      duration: 500,
    },
  });

  return (
    <>
      <MainHeader>
        <LogoContainer>
          <animated.img style={logoAnimation} src={logo} alt="Moniepoint Logo" />
        </LogoContainer>
        <Navigation />
        <Social />
      </MainHeader>
    </>
  )
}

export default Header;
