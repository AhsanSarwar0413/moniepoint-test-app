import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';

const NavigtaionWrapper = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0 auto;

    li {
        margin: 0 32px;
        font-size: 14px;
        @media(max-width: 992px) {
            margin: 0 16px;
            font-size: 12px;
        }
        a {
            text-decoration: none;
        }
    }

    .active {
        color: #ffffff;
        font-weight: 600;
    }
`;

const NavigationIcon = styled(FontAwesomeIcon)`
    margin-left: 4px;
`;

function Navigation() {
    const [activeLink, setActiveLink] = useState('home');

    const firstNavLink = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 800,
        config: {
            duration: 300,
        },
    });

    const secondtNavLink = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1000,
        config: {
            duration: 500,
        },
    });

    const thirdtNavLink = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1200,
        config: {
            duration: 700,
        },
    });

    const fourthNavLink = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1400,
        config: {
            duration: 900,
        },
    });

    const fifthhNavLink = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1600,
        config: {
            duration: 1100,
        },
    });

    return (
        <NavigtaionWrapper>
            <animated.li style={firstNavLink} className={activeLink === 'home' ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveLink('home') }}>Home</a></animated.li>
            <animated.li style={secondtNavLink} className={activeLink === 'services' ? 'active' : ''}>
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveLink('services')}}>Services
                    <NavigationIcon icon={faChevronDown} />
                </a>
            </animated.li>
            <animated.li style={thirdtNavLink} className={activeLink === 'aboutus' ? 'active' : ''}>
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveLink('aboutus')}}>About us</a>
            </animated.li>
            <animated.li style={fourthNavLink} className={activeLink === 'blog' ? 'active' : ''}>
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveLink('blog')}}>Blog</a>
            </animated.li>
            <animated.li style={fifthhNavLink} className={activeLink === 'career' ? 'active' : ''}>
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveLink('career')}}>Career</a>
            </animated.li>
        </NavigtaionWrapper>
    )
}

export default Navigation;
