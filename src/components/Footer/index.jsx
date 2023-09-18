import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import { default as FooterLogo } from '../../assets/footer-logo.svg';

const FooterWrapper = styled.div`
    margin-top: 200px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;

    a {
        font-size: 0.8em;
    }
`;

const FooterLogoWrapper = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
    }

    p {
        font-size: 0.8em;
        margin-left: 16px;
    }
`;
function Footer() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const footerLogo = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 800,
        config: {
            duration: 600,
        }
    });

    const FooterLogoText = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1000,
        config: {
            duration: 600,
        }
    });

    const FooterLogoLink = useSpring({
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        delay: 1200,
        config: {
            duration: 600,
        }
    });

    return (
        <FooterWrapper ref={ref}>
            <FooterLogoWrapper>
                <animated.img src={FooterLogo} alt="Footer-Logo" style={footerLogo} />
                <animated.p style={FooterLogoText}>Darcy's insurance products</animated.p>
            </FooterLogoWrapper>
            <animated.a href="#" style={FooterLogoLink}>Privacy Policy</animated.a>
        </FooterWrapper>
    )
}

export default Footer;
