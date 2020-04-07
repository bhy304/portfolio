import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    background-color: #0066ff;
`;

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 100%;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
`;

const Intro = () => {
    return (
        <Wrapper>
            <IntroWrapper>
                <Title>Hello, I'm Hayeon!</Title>
            </IntroWrapper>
        </Wrapper>
    );
}

export default Intro;