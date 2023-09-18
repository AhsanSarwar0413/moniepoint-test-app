import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import CalendarSVG from '../../assets/images/calendar.svg';

import themeColors from '../../utils/styles/color';

const AppointmentWrapper = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
`;

const NumberHeading = styled(animated.div)`
    margin-bottom: 32px;
    font-family: 'Blimone Bold Inktrap', sans-serif;
    font-size: 3em;
`;

const CustomPillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 24px;
    justify-content: space-between;
    transition: all 0.2s ease-out;

    .active {
        background-color: ${themeColors.priamryTextColor};
        color: ${themeColors.primaryBgColor};
    }
`;

const CustomPill = styled(animated.a)`
    border-radius: 25px;
    padding: 8px 16px;
    background-color: ${themeColors.secondaryBgColor};
    color: ${themeColors.priamryTextColor};
    text-decoration: none;
`;

const CalculationWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;

    p {
        font-size: 0.7em;
        color: ${themeColors.priamryTextColor};
    }

    input {
        border: none;
        border-radius: 25px;
        background-color: ${themeColors.secondaryBgColor};
        min-height: 40px;
        padding: 0 16px;
        position: relative;
        font-size: 1.1em;
        color: ${themeColors.priamryTextColor};
        box-sizing: border-box;
        &:focus {
            outline: 1px solid ${themeColors.priamryTextColor};
        }
        &::placeholder {
            color: #6a799c;
        }
    }
`;

const InputWrapper = styled(animated.div)`
    position: relative;
    width: 100%;

    img {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%; 
        right: 8px;
        transform: translate(-50%, -50%);
    }
`;

const SubmitButton = styled(animated.button)`
    border: 0;
    border-radius: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themeColors.btnColor};
    color: ${themeColors.priamryTextColor};
    min-height: 50px;
    font-size: 1em;
    font-family: inherit;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        outline: none;
        background-color: ${themeColors.secondaryBgColor};
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const LinksHeading = styled(animated.h5)`
    color: ${themeColors.priamryTextColor};
    margin-bottom: 16px;
    font-weight: 600;
    display: inline-block;
`;

const LinksContainer = styled.div` 
margin: 0 auto;
    width: 70%;
    @media(max-width: 992px) {
        width: 85%;
        margin-left: auto;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        opacity: .6;
        font-size: 0.8em;
    }
`;

function Appointment() {
    const [activeLink, setActiveLink] = useState('travel');

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const numberHeading = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        scale: inView ? 1 : 0,
        delay: 200,
        config: {
            duration: 500,
        }
    });

    const customPill1 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 400,
        config: {
            duration: 700,
        }
    });

    const customPill2 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 600,
        config: {
            duration: 500,
        }
    });

    const customPill3 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 800,
        config: {
            duration: 700,
        }
    });

    const customPill4 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 800,
        config: {
            duration: 700,
        }
    });

    const customPill5 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 800,
        config: {
            duration: 700,
        }
    });

    const inputLabel1 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
        transformOrigin: 'center center',
        delay: 600,
        config: {
            duration: 700,
        }
    });

    const inputLabel2 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
        transformOrigin: 'center center',
        delay: 800,
        config: {
            duration: 700,
        }
    });

    const input1 = useSpring({
        opacity: inView ? 1 : 0,
        delay: 700,
        config: {
            duration: 700,
        }
    });
    const input2 = useSpring({
        opacity: inView ? 1 : 0,
        delay: 900,
        config: {
            duration: 700,
        }
    });

    const calculateButton = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1000,
        config: {
            duration: 700,
        }
    });

    const linkHeading1 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        delay: 400,
        config: {
            duration: 700,
        }
    });

    const linkHeading2 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        delay: 600,
        config: {
            duration: 700,
        }
    });

    const linkHeading3 = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 100%, 0)',
        delay: 1000,
        config: {
            duration: 700,
        }
    });

    const row1Links = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 700,
        config: {
            duration: 700,
        }
    });

    const row2Links = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 900,
        config: {
            duration: 700,
        }
    });

    const row3Links = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1000,
        config: {
            duration: 700,
        }
    });

    const row4Links = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1200,
        config: {
            duration: 700,
        }
    });

    return (
        <AppointmentWrapper ref={ref}>
            <div>
                <NumberHeading style={numberHeading}>
                    <h3>Need numbers?</h3>
                </NumberHeading>
                <CustomPillsWrapper>
                    <CustomPill
                        href="#"
                        style={customPill1}
                        onClick={(e) => {e.preventDefault();  setActiveLink('travel')}}
                        className={activeLink === 'travel' ? 'active' : ''}
                    >
                        Travel
                    </CustomPill>
                    <CustomPill
                        href="#"
                        style={customPill2}
                        onClick={(e) => {e.preventDefault();  setActiveLink('health')}}
                        className={activeLink === 'health' ? 'active' : ''}
                    >
                        Health
                    </CustomPill>
                    <CustomPill
                        href="#"
                        style={customPill3}
                        onClick={(e) => {e.preventDefault();  setActiveLink('casco')}}
                        className={activeLink === 'casco' ? 'active' : ''}
                    >
                        CASCO
                    </CustomPill>
                    <CustomPill
                        href="#"
                        style={customPill4}
                        onClick={(e) => {e.preventDefault();  setActiveLink('mortgage')}}
                        className={activeLink === 'mortgage' ? 'active' : ''}
                    >
                        Mortgage
                    </CustomPill>
                    <CustomPill
                        href="#"
                        style={customPill5}
                        onClick={(e) => {e.preventDefault();  setActiveLink('fire')}}
                        className={activeLink === 'fire' ? 'active' : ''}
                        
                    >
                        Fire
                    </CustomPill>
                </CustomPillsWrapper>
                <CalculationWrapper>
                    <div>
                        <animated.p style={inputLabel1}>Enter the country</animated.p>
                        <animated.input type="text" placeholder="Austrailia"  style={input1}/>
                    </div>
                    <div>
                        <animated.p style={inputLabel2}>Choose travel dates</animated.p>
                        <InputWrapper style={input2}>
                            <input type="text" placeholder="11 Apr - 20 Apr" />
                            <img src={CalendarSVG} />
                        </InputWrapper>
                    </div>
                </CalculationWrapper>
                <SubmitButton style={calculateButton}>Calculate</SubmitButton>
            </div>
            <LinksWrapper>
                <LinksContainer>
                    <LinksHeading style={linkHeading1}>Insurance services</LinksHeading>
                    <div>
                        <animated.a href="#" style={row1Links}>Medical expenses</animated.a>
                        <animated.a href="#" style={row1Links}>Family health insurance</animated.a>
                        <animated.a href="#" style={row2Links}>Vehicle damage</animated.a>
                        <animated.a href="#" style={row2Links}>Property loss</animated.a>
                        <animated.a href="#" style={row2Links}>Fire</animated.a>
                    </div>
                </LinksContainer>
                <LinksContainer>
                    <LinksHeading style={linkHeading2}>Company</LinksHeading>
                    <div>
                        <animated.a href="#" style={row3Links}>About us</animated.a>
                        <animated.a href="#" style={row3Links}>Career</animated.a>
                        <animated.a href="#" style={row3Links}>Help</animated.a>
                        <animated.a href="#" style={row3Links}>FAQ</animated.a>
                        <animated.a href="#" style={row3Links}>Blog</animated.a>
                    </div>
                </LinksContainer>
                <LinksContainer>
                    <LinksHeading style={linkHeading3}>Bonus</LinksHeading>
                    <div>
                        <animated.a href="#" style={row4Links}>Gift certificate</animated.a>
                        <animated.a href="#" style={row4Links}>Affiliate program</animated.a>
                        <animated.a href="#" style={row4Links}>Trainings</animated.a>
                    </div>
                </LinksContainer>
            </LinksWrapper>
        </AppointmentWrapper>
    )
}

export default Appointment;
