import React from 'react';
import styled from 'styled-components';
import themeColors from '../../../utils/styles/color';
import { useSpring, animated } from '@react-spring/web';

import { default as Key } from '../../../assets/images/key.svg';

const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 1024px) {
        flex: 0 0 25%;
    }
`;

const ContactusButton = styled(animated.button)`
    color: black;
    background-color: ${themeColors.linkColor};
    border-radius: 24px;
    padding: 16px 24px;
    min-height: 32px;
    border: 0;
    font-weight: 600;
    min-width: 160px;
    height: 100%;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: ${themeColors.priamryTextColor}
    }
`;

const LoginText = styled(animated.a)`
    color: ${themeColors.priamryTextColor};
    text-decoration: none;
    margin-left: 24px;
    font-size: 12px;
    display: flex;
    align-items: center;

    img {
        filter: invert(100%);
        width: 22px;
        height: 22px;
        margin-right: 10px;
        margin-bottom: 4px;
    }
`;

function Social() {
    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 1800,
        config: {
            duration: 800,
        },
    });

    const loginText = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', scale: 0 },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)', scale: 1 },
        delay: 2000,
        config: {
            duration: 800,
        },
    });

    return (
        <SocialWrapper>
            <ContactusButton style={buttonAnimation}>Contact Us</ContactusButton>
            <LoginText href="#" style={loginText}>
                <img src={Key} />
                Login
            </LoginText>
        </SocialWrapper>
    )
}

export default Social;
