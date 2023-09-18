import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import BmwImage from '../../assets/images/bmw.jpg';
import CouchImage from '../../assets/images/couch.png';
import BeachImage from '../../assets/images/beach.jpeg';
import HouseImage from '../../assets/images/house.jpg';
import TabletImage from '../../assets/images/tablets.png';
import themeColors from '../../utils/styles/color';

const FacilitiesWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 15px;
  max-height: 400px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    &:hover {
      cursor: pointer;
      scale: 1.03;
    }
  }
`;

const CouchImageWrapper = styled.div`
  flex: 3;
  position: relative;

  img {
    object-fit: cover;
  } 

  a {
    position: absolute;
    bottom: 32px;
    left: 24px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themeColors.primaryBgColor};
    padding: 8px 32px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 1.66em;
    @media(max-width: 1400px) {
      font-size: 1.3em;
    }
    @media(max-width: 1200px) {
      font-size: 1.2em;
    }
    @media(max-width: 992px) {
      font-size: 0.9em;
    }
  }
`;

const BeachImageWrapper = styled.div`
  flex: 1;

  img {
    border-radius: 100px;
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
`;

const BestChoiceWrapper = styled(animated.div)`
  border-radius: 25px;
  flex: 1.5;
  background-color: ${themeColors.secondaryBgColor};
  padding: 32px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    font-family: 'Blimone Bold Inktrap', sans-serif;
    margin: 0;
    font-size: 4em;
    @media(max-width: 1200px) {
      font-size: 3em;
    }
    @media(max-width: 992px) {
      font-size: 2.5em;
    }
  }

  p {
    font-size: 0.9em;
    padding-right: 2px;
    @media(max-width: 1200px) {
      font-size: 0.7em;
      padding-right: 16px;
    }
    
  }

  button {
    border: 0;
    border-radius: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themeColors.btnColor};
    color: ${themeColors.primaryBgColor};
    min-height: 50px;
    font-size: 1em;
    font-family: inherit;
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      outline: none;
      background-color: ${themeColors.primaryBgColor};
      color: ${themeColors.priamryTextColor};
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  max-height: 275px;
  @media(max-width: 1200px) {
    max-height: 200px;
  }

  img {
    object-fit: cover;
  }

  a {
    position: absolute;
    bottom: 32px;
    left: 24px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themeColors.primaryBgColor};
    padding: 8px 32px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 1.66em;
    @media(max-width: 1400px) {
      bottom: 50px;
      left: 20px;
      font-size: 1.3em;
      padding: 8px 40px;
    }
    @media(max-width: 1200px) {
      bottom: 15%;
      left: 6%;
      font-size: 1em;
    }
    @media(max-width: 992px) {
      font-size: 0.9em;
      padding: 8px 32px;
    }
  }
`;

function Facilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const upperImage1 = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0,
    delay: 500,
    config: {
      duration: 500,
    }
  });

  const upperImage1Text = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0,
    delay: 1100,
    config: {
      duration: 500,
    }
  });

  const upperImage2 = useSpring({
    opacity: inView ? 1 : 0,
    clipPath: inView ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    borderRadius: inView ? '100px' : '100px',
    delay: 800,
    config: {
      duration: 800,
    }
  });

  const upperSection = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1000,
    config: {
      duration: 500,
    }
  });

  const upperSectionText1 = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1600,
    config: {
      duration: 500,
    }
  });

  const upperSectionText2 = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1800,
    config: {
      duration: 500,
    }
  });

  const upperSectionButton = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1200,
    config: {
      duration: 500,
    }
  });

  const belowImage1 = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1200,
    config: {
      duration: 500,
    }
  });

  const belowImage1Text = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1800,
    config: {
      duration: 500,
    }
  });

  const belowImage2 = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1400,
    config: {
      duration: 500,
    }
  });

  const belowImage2Text = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 2100,
    config: {
      duration: 500,
    }
  });

  const belowImage3 = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1600,
    config: {
      duration: 500,
    }
  });

  const belowImage3Text = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 2200,
    config: {
      duration: 500,
    }
  });

  return (
    <FacilitiesWrapper ref={ref} id="Facilities">
        <ImagesRow>
          <CouchImageWrapper>
            <animated.img src={CouchImage} style={upperImage1} />
            <animated.a href="#" style={upperImage1Text}>Home insurance</animated.a>
          </CouchImageWrapper>
          <BeachImageWrapper>
          <animated.img src={BeachImage} style={upperImage2} />
          </BeachImageWrapper>
          <BestChoiceWrapper style={upperSection}>
            <div>
              <animated.h3 style={upperSectionText1}>Best Choice</animated.h3>
            <animated.p style={upperSectionText2}>
              Not all insurance are the same. That's why agency knows that your insurance should be custoized to fit your situation.
            </animated.p>
            </div>
            <div>
              <animated.button style={upperSectionButton}>View all services</animated.button>
            </div>
          </BestChoiceWrapper>
        </ImagesRow>
        <ImagesRow>
          <ImageWrapper>
            <animated.img src={BmwImage} style={belowImage1} />
            <animated.a href="#" style={belowImage1Text}>Vehicle damage</animated.a>
          </ImageWrapper>
          <ImageWrapper>
            <animated.img src={HouseImage} style={belowImage2} />
            <animated.a href="#" style={belowImage2Text}>Mortgage insurance</animated.a>
          </ImageWrapper>
          <ImageWrapper>
            <animated.img src={TabletImage} style={belowImage3} />
            <animated.a href="#" style={belowImage3Text}>Medical expenses</animated.a>
          </ImageWrapper>
        </ImagesRow>
      </FacilitiesWrapper>
  )
}

export default Facilities;
