import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    width: 100%;
    height: 70px;
`;

const FooterWrapper = styled.div`
    dispaly: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
`;

const Text = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 25px;
`;


const Footer = () => {
    return (
        <Wrapper>
            <FooterWrapper>
                <Text>
                    &copy; HayeonBaek 2020
                 </Text>
            </FooterWrapper>
        </Wrapper>
    );
}

export default Footer;