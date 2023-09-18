import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

import themeColors from '../../utils/styles/color';
import KidWomen from '../../assets/images/kid-woman.jpg';

const SupportContainer = styled.div`
    margin-top: 150px;
    display: flex;
    align-items: center;
`;

const HeroTextSection = styled.div`
    flex: 2;
    font-family: 'Blimone Bold Inktrap', sans-serif;
    font-weight: 700;
    @media(max-width: 1200px) {
        flex: 1;
    }

    p {
        margin-block: 0;
        line-height: 0.9;
        font-size: 5rem;
        @media(max-width: 992px) {
            font-size: 4rem;
        }
    }

    p:last-child {
        font-size: 9em;
        @media(max-width: 992px) {
            font-size: 7em;
        }
    }
`;

const HeroInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    font-size: 0.9em;
    @media(min-width: 1200px) {
        & > div {
            width: 75%;
        }
    }
    @media(max-width: 1200px) {
        flex: 1;
        align-items: center;
        & > div {
            width: 100%;
        }
    }

    a {
        color: ${themeColors.linkColor};
        display: inline-block;
    }

    & > div:first-child {
        margin-bottom: 24px;
    }

    button {
        width: 85%;
        border: 1px solid ${themeColors.btnColor};
        outline: none;
        border-radius: 25px;
        color: ${themeColors.btnColor};
        background-color: transparent;
        padding: 16px;
        margin-top: 8px;
        transition: all 0.3s ease-in-out;
        &:hover {
            cursor: pointer;
            background-color: ${themeColors.btnColor};
            color: ${themeColors.primaryBgColor};
        }
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

const HeroImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        max-width: 75%;
        min-height: 432px;
        object-fit: cover;
        object-position: 49% 50%;
        border-radius: 100px;
        box-shadow: 1px 1px 36px -6px rgba(132,215,233,1);
        -webkit-box-shadow: 1px 1px 36px -6px rgba(132,215,233,1);
        -moz-box-shadow: 1px 1px 36px -6px rgba(132,215,233,1);
        @media(max-width: 1400px) {
            max-width: 90%;
        }
        @media(max-width: 1200px) {
            max-width: 60%;
        }
    }
`;

function Support() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const firstSupportText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        scale: inView ? 1 : 0,
        delay: 600,
        config: {
            duration: 500,
        }
    });

    const secondSupportText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        scale: inView ? 1 : 0,
        delay: 800,
        config: {
            duration: 500,
        }
    });

    const thirdSupportText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        scale: inView ? 1 : 0,
        delay: 1000,
        config: {
            duration: 600,
        },
    });

    const middleSupportText1 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1000,
        config: {
            duration: 600,
        }
    });

    const middleSupportText2 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1200,
        config: {
            duration: 600,
        }
    });

    const middleSupportButton = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1400,
        config: {
            duration: 600,
        }
    });

    const supportImage = useSpring({
        opacity: inView ? 1 : 0,
        clipPath: inView ? 'polygon(0% -50%, 100% -50%, 200% 100%, -150% 200%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        borderRadius: inView ? '100px' : '100px',
        delay: 1600,
        config: {
            duration: 800,
        }
    });

    return (
        <SupportContainer ref={ref}>
            <HeroTextSection>
                <animated.p style={firstSupportText}>Support</animated.p>
                <animated.p style={secondSupportText}>at every</animated.p>
                <animated.p style={thirdSupportText}>Step</animated.p>
            </HeroTextSection>
            <HeroInformationSection>
                <animated.div style={middleSupportText1}>
                    <AsterikRotate icon={faAsterisk} />
                    <p>Participate in the <a href="#">loyality program</a>. Pay for the service online to get bonuses for our other services. We have a lot fo bonuses!</p>
                </animated.div>
                <animated.div style={middleSupportText2}>
                    <AsterikRotate icon={faAsterisk} />
                    <p>You can help other people: choose a donation fund and share the link with your friends!</p>
                </animated.div>
                <div>
                    <animated.button style={middleSupportButton}>Choose a fund</animated.button>
                </div>
            </HeroInformationSection>
            <HeroImageWrapper>
                <animated.img src={KidWomen} style={supportImage} />
            </HeroImageWrapper>
        </SupportContainer>
    )
}

export default Support;
