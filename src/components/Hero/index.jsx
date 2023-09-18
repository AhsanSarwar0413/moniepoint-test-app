import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from '@react-spring/web';
import useScrollTo from 'react-spring-scroll-to-hook';

import themeColors from '../../utils/styles/color';
import HeroImage from '../../assets/images/ballon.jpg';

const HeroContainer = styled.div`
    margin-top: 50px;
    display: flex;
`;

const HeroTextSection = styled.div`
    font-size: 10rem;
    flex: 3;
    font-family: 'Blimone Bold Inktrap', sans-serif;
    font-weight: 700;
    @media(max-width: 1200px) {
        font-size: 7.5rem;
        flex: 2;
    }
    @media(max-width: 992px) {
        font-size: 7rem;
        
    }
    @media(max-width: 892px) {
        font-size: 6rem;
        
    }

    p {
        margin-block: 0;
        line-height: 0.9;
    }
`;

const HeroInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    align-self: stretch;
    @media(min-width: 1400px) {
        & > div {
            width: 75%;
        }
    }

    a {
        color: ${themeColors.linkColor};
        display: inline-block;
    }
`;

const AsterikRotate = styled(FontAwesomeIcon)`
    border-radius: 50%;
    background-color: ${themeColors.priamryTextColor};
    color: black;
    padding: 4px;
    font-size: 1.5rem;
    width: 20px;
    height: 20px;
    animation: rotate 2s linear infinite;
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const SwipeBelow = styled.div`
    background: linear-gradient(168deg, rgba(11,15,23,1) 7%, rgba(31,40,61,1) 98%);         
    border-radius: 24px;
    width: 40px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
`;

const ArrowDown = styled(animated.span)`
    transition-delay: 0.1s;
    background-color: #999;
    height: 1px;
    width: 64px;
    display: block;
    position: relative;
    transition: all 0.2s;
    transition-delay: 0;
    will-change: transform;
    rotate: 90deg;
    &:before {
        background-color: #999;
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        top: 0;
        right: 0;
        transform: rotate(40deg);
        transform-origin: top right;
        width: 8px;
    }
    &:after {
        background-color: #999;
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.2s;
        transition-delay: 0;
        transform-origin: bottom right;
        transform: rotate(-40deg);
        width: 8px;
    }
`;

const HeroImageWrapper = styled(animated.div)`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        max-width: 75%;
        object-fit: cover;
        border-radius: 100px;
        box-shadow: 1px 1px 36px -6px rgba(132,215,233,1);
        -webkit-box-shadow: 1px 1px 36px -6px rgba(132,215,233,1);
        -moz-box-shadow: 1px 1px 36px -6px rgba(132,215,233,1);
        @media(max-width: 1400px) {
            max-width: 90%;
        }
        @media(max-width: 1200px) {
            max-width: 75%;
        }
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

function Hero() {
    const { scrollTo } = useScrollTo(config.default);

    const firstHeroText = useSpring({
        from: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 600,
        config: {
            duration: 600,
        },
    });

    const secondHeroText = useSpring({
        from: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1000,
        config: {
            duration: 600,
        },
    });

    const thirdHeroText = useSpring({
        from: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1400,
        config: {
            duration: 600,
        },
    });

    const heroMiddleUpperText = useSpring({
        from: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1300,
        config: {
            duration: 600,
        },
    });

    const heroMiddleLowerText = useSpring({
        from: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1600,
        config: {
            duration: 600,
        },
    });

    const swipeArea = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1, },
        delay: 1700,
        config: {
            duration: 600,
        },
    });

    const swipeArrow = useSpring({
        from: { opacity: 0, width: '0' },
        to: { opacity: 1, width: '64px' },
        delay: 1700,
        config: {
            duration: 600,
        },
    });

    const heroImage = useSpring({
        from: {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            opacity: 0,
        },
        to: {
            clipPath: 'polygon(-50% 0%, 100% -50%, 150% 150%, 0% 100%)',
            opacity: 1,
        },/*  */
        delay: 2800,
        config: {
            duration: 800,
            friction: 100,
        },
    });

    return (
        <HeroContainer>
            <HeroTextSection>
                <animated.p style={firstHeroText}>Darcy's</animated.p>
                <animated.p style={secondHeroText}>insurance</animated.p>
                <animated.p style={thirdHeroText}>products</animated.p>
            </HeroTextSection>
            <HeroInformationSection>
                <animated.div style={heroMiddleUpperText}>
                    <AsterikRotate icon={faAsterisk} />
                    <p>Our <a href="#">plans</a> are saving policyholders 30% - 60% on premiums</p>
                </animated.div>
                <animated.div style={heroMiddleLowerText}>
                    <AsterikRotate icon={faAsterisk} />
                    <p>We offer a choice of low dedactibles and include no cost value-added services.</p>
                </animated.div>
                <div>
                    <animated.a href="#" style={swipeArea} onClick={(e) => { e.preventDefault(); scrollTo(document.querySelector('#Facilities'))}}>
                        <SwipeBelow>
                            <ArrowDown style={swipeArrow} />
                        </SwipeBelow>
                    </animated.a>
                </div>
            </HeroInformationSection>
            <HeroImageWrapper style={heroImage}>
                <animated.img src={HeroImage}  />
            </HeroImageWrapper>
        </HeroContainer>
    )
}

export default Hero;
