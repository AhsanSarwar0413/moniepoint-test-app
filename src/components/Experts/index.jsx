import React from 'react';
import styled from 'styled-components';
import { Pagination, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import CardWoman from '../../assets/images/card-woman.jpg';
import KidWoman from '../../assets/images/kid-woman.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

import themeColors from '../../utils/styles/color';

const ExpertWrapper = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 150px;
`;

const CarouselWrapper = styled(animated.div)`
    max-width: 65%;

    div.swiper-custom-pagination {
        display: flex;
        justify-content: center;
        min-width: 100%;
        margin-top: 24px;
        transform: none !important;

        span {
            transform: none;
            position: static;
            margin-inline: 16px;
            margin: 0 6px !important;
        }
    }
`;

const ExpertDetailsWrapper = styled.div`
    background-color: ${themeColors.secondaryBgColor};
    padding: 24px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    gap: 64px;
    @media(max-width: 1200px) {
        gap: 32px;
    }
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100px;
        min-height: 432px;
    }

    > div {
        position: absolute;
        top: -20px;
        left: 0;
        z-index: -1;
        width: 110%;
        background-color: ${themeColors.primaryBgColor};
        height: 110%;
        opacity: 0.7;
    }
`;

const DetailsWrapper = styled.div`
    flex: 2;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        background-color: ${themeColors.linkColor};
        color: ${themeColors.primaryBgColor};
        border-radius: 25px;
        transition: all 0.3s ease-in-out;
        border: 0;
        outline: 0;
        font-weight: 600;
        &:hover {
            cursor: pointer;
            background-color: ${themeColors.priamryTextColor};
            color: ${themeColors.primaryBgColor};
        }
        @media(min-width: 992px) {
            min-width: 60%; 
        }
    }
`;

const ExpertName = styled(animated.h5)`
    font-size: 1.4em;
    font-weight: 500;
    margin: 0;
    @media(min-width: 992px) {
        max-width: 60%; 
    }
`;

const Designation = styled(animated.p)`
    opacity: .5;
    margin-top: 4px;
    margin-bottom: 0;
    font-size: .7em;
    color: #8995b2;
    @media(min-width: 992px) {
        max-width: 60%;  
    }
`;

const Description = styled(animated.p)`
    margin-top: 16px;
    font-size: 0.8em;
    @media(min-width: 992px) {
        max-width: 60%;    
    }
`;

const ExpertHeadingWrapper = styled.div`
    flex: 1;
    display: flex;
    gap: 16px;
    align-self: center;

    p {
        font-family: 'Blimone Bold Inktrap', sans-serif;
        font-size: 3em;
        line-height: 0.9;
        margin: 0;
    }
`;

const AsterikRotate = styled(FontAwesomeIcon)`
    border-radius: 50%;
    background-color: ${themeColors.priamryTextColor};
    color: black;
    padding: 4px;
    font-size: 1.5rem;
    width: 16px;
    height: 16px;
    margin-top: 8px;
    animation: rotate 2s linear infinite;
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

function Experts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const carouselWrapper = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 100%, 0)',
    scale: inView ? 1 : 0,
    delay: 400,
    config: {
      duration: 500,
    }
  });

  const carouselImage = useSpring({
    opacity: inView ? 1 : 0,
    clipPath: inView ? 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    borderRadius: inView ? '100px' : '100px',
    delay: 800,
    config: {
      duration: 800,
    }
  });

  const expertFirstText = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 100%, 0)',
    scale: inView ? 1 : 0,
    delay: 400,
    config: {
      duration: 500,
    }
  });

  const expertSecondText = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 100%, 0)',
    scale: inView ? 1 : 0,
    delay: 600,
    config: {
      duration: 500,
    }
  });

  const expertThirdText = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 100%, 0)',
    scale: inView ? 1 : 0,
    delay: 800,
    config: {
      duration: 500,
    }
  });

  const asterik = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1000,
    config: {
      duration: 500,
    }
  });

  const carouselHeading = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1600,
    config: {
      duration: 500,
    }
  });

  const carouselDesignation = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 1800,
    config: {
      duration: 500,
    }
  });

  const carouselParagraph = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 2000,
    config: {
      duration: 500,
    }
  });

  const carouselCTA = useSpring({
    scale: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: 2200,
    config: {
      duration: 500,
    }
  });

  return (
    <ExpertWrapper ref={ref}>
      <CarouselWrapper style={carouselWrapper}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            el: '.swiper-custom-pagination',
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, EffectCreative]}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
        >
          <SwiperSlide>
            <ExpertDetailsWrapper>
              <ImageWrapper>
                <animated.img src={CardWoman} style={carouselImage} />
              </ImageWrapper>
              <DetailsWrapper>
                <div>
                  <ExpertName style={carouselHeading}>Georgia Diacy</ExpertName>
                  <Designation style={carouselDesignation}>The agency founder</Designation>
                  <Description style={carouselParagraph}>
                    With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. The one thing we know for sure is that we're all about you. If  you find searching for insurance frustating. we are here to help.
                  </Description>
                </div>
                <div>
                  <button style={carouselCTA}>Get a consultation</button>
                </div>
              </DetailsWrapper>
            </ExpertDetailsWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ExpertDetailsWrapper>
              <ImageWrapper>
                <animated.img src={KidWoman} style={carouselImage} />
              </ImageWrapper>
              <DetailsWrapper>
                <div>
                  <ExpertName style={carouselHeading}>Georgia Diacy</ExpertName>
                  <Designation style={carouselDesignation}>The agency founder</Designation>
                  <Description style={carouselParagraph}>
                    With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. The one thing we know for sure is that we're all about you. If  you find searching for insurance frustating. we are here to help.
                  </Description>
                </div>
                <div>
                  <button style={carouselCTA}>Get a consultation</button>
                </div>
              </DetailsWrapper>
            </ExpertDetailsWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ExpertDetailsWrapper>
              <ImageWrapper>
                <animated.img src={CardWoman} style={carouselImage} />
              </ImageWrapper>
              <DetailsWrapper>
                <div>
                  <ExpertName style={carouselHeading} >Georgia Diacy</ExpertName>
                  <Designation style={carouselDesignation}>The agency founder</Designation>
                  <Description style={carouselParagraph}>
                    With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. The one thing we know for sure is that we're all about you. If  you find searching for insurance frustating. we are here to help.
                  </Description>
                </div>
                <div>
                  <button style={carouselCTA}>Get a consultation</button>
                </div>
              </DetailsWrapper>
            </ExpertDetailsWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ExpertDetailsWrapper>
              <ImageWrapper>
                <animated.img src={KidWoman} style={carouselImage} />
              </ImageWrapper>
              <DetailsWrapper>
                <div>
                  <ExpertName style={carouselHeading} >Georgia Diacy</ExpertName>
                  <Designation style={carouselDesignation}>The agency founder</Designation>
                  <Description style={carouselParagraph}>
                    With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. The one thing we know for sure is that we're all about you. If  you find searching for insurance frustating. we are here to help.
                  </Description>
                </div>
                <div>
                  <button style={carouselCTA}>Get a consultation</button>
                </div>
              </DetailsWrapper>
            </ExpertDetailsWrapper>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-custom-pagination" />
      </CarouselWrapper>
      <ExpertHeadingWrapper>
        <animated.div style={asterik}>
          <AsterikRotate icon={faAsterisk} />
        </animated.div>
        <div>
          <animated.p style={expertFirstText}>Our</animated.p>
          <animated.p style={expertSecondText}>experts</animated.p>
          <animated.p style={expertThirdText}>say</animated.p>
        </div>
      </ExpertHeadingWrapper>
    </ExpertWrapper>
  )
}

export default Experts;
