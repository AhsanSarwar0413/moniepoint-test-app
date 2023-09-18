import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Support from './components/Support';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import Experts from './components/Experts';

const Container = styled.div`
  @media (min-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
    margin-inline: 16px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    padding: 0 16px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    margin-inline: 16px;
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    margin: 0 auto;
    max-width: 1320px;
  }
`;

const ShadeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  background-image: linear-gradient(to top,#0b0f17 ,#1f283d);
  z-index: -1;
`;

const ShadeWrapperFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 100%;
  background-image: linear-gradient(to bottom,#0b0f17 ,#1f283d);
  z-index: -1;
`;

function App() {
  return (
    <>
      <ShadeWrapper />
      <Container>
        <Header />
        <Hero />
        <Facilities />
        <Experts />
        <Support />
        <Appointment />
        <Footer />
      </Container>
      <ShadeWrapperFooter />
    </>
  )
}

export default App
