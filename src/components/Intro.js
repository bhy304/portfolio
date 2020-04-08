import React from 'react';
import styled from 'styled-components';
import './Typewriter';

const Wrapper = styled.section`
    background-color: #0066ff;
`;

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.15);
        z-index: 1;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: #fff;
    z-index: 10;
`;

const Text = styled.span`
    background-color: #fff;
    color: #0066ff;
`;

const Intro = () => {
    return (
        <Wrapper>
            <IntroWrapper>
                <Title>Hello, I'm <Text id="txt-type" data-wait="3000" data-words='["Hayeon","Developer"]'></Text>!</Title>
            </IntroWrapper>
        </Wrapper>
    );
}

export default Intro;