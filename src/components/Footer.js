import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    height: 70px;
`;

const FooterWrapper = styled.div`
    display: flex;
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
                    &copy; HayeonBaek {new Date().getFullYear()}
                 </Text>
            </FooterWrapper>
        </Wrapper>
    );
}

export default Footer;