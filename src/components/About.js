import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Wrapper = styled.section`
    background-color: #fff;
    margin-bottom: 80px;
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
`;

const ProfileImage = styled.img`
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 80px 0 30px 0;
    text-decoration: underline;
    text-decoration-color: #0066ff;
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    p {
        font-size: 1.25rem;
        font-weight: 400;
        margin: 10px 0 0 3px;
    }

    a {
        text-decoration: none;
        color: #212121;
    }

    dl {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }

    dl div {
        display: flex;
        margin: 3px 0;
    }

    dl dt {
        margin-right: 5px;
        text-align: center;
    }

    dl dt svg {
        font-size: 20px;
    }

    dl dd a {
        font-weight: 400;
        color: #0066ff;
        text-align: center;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-top: 20px;

    div h1 {
        width: 200px;
        font-size: 1.25rem;
        font-weight: 400;
        display: flex;
        justify-content: flex-end;
        padding: 0 20px;
    }
`;

const Flex = styled.div`
    display: flex;
`;

const About = () => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <Title>Profile</Title>

                <Flex>
                    <ProfileImage src="https://avatars3.githubusercontent.com/u/43948313?s=460&u=afc211f09a0cc61ef1f9701a81d9083d75cdd502&v=4" alt="profile image" />

                    <Profile>
                        <Flex>
                            <h1>백하연</h1>
                            <p>Hayeon Baek</p>
                        </Flex>
                        <span>Web Frontend Developer</span>
                        
                        <dl>
                            <div>
                                <dt>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </dt>
                                <dd>
                                    <a href="mailto:bhy0512@gmail.com">bhy0512@gmail.com</a>
                                </dd>
                            </div>
                            <div>
                                <dt>
                                    <FontAwesomeIcon icon={faGithub} />
                                </dt>
                                <dd>
                                    <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">https://github.com/bhy304</a>
                                </dd>
                            </div>
                            <div>
                                <dt>
                                    <FontAwesomeIcon icon={faHome} />
                                </dt>
                                <dd>
                                    <a href="https://bhy304.github.io" target="_blank" rel="noopener noreferrer">https://bhy304.github.io</a>
                                </dd>
                            </div>
                            <div>
                                <dt>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </dt>
                                <dd>
                                    <a href="https://www.linkedin.com/in/hayeonbaek" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/hayeonbaek</a>
                                </dd>
                            </div>
                        </dl>
                    </Profile>
                </Flex>
                
                <Description>
                    <Flex>
                        <div>
                            <h1>About Me</h1>
                        </div>
                        
                        <div>
                            <p>안녕하세요. 저는 백하연입니다!</p>
                            <p>저는 무언가 만드는 것을 좋아하고 눈에 보이는 결과물을 보며 성취감을 느낍니다.</p>
                            <p>구현한 결과물을 사용자가 그대로 경험하고 피드백 받을 수 있는 프론트엔드 직무는 저에게 매우 큰 매력으로 다가왔습니다.</p>
                            <p>빠르게 발전하는 기술 환경 속에서 '어제보다 더 발전한 개발자'를 목표로 함께 성장해가고 싶습니다.</p>
                        </div>

                    </Flex>
                </Description>

            </ProfileWrapper>
        </Wrapper>
    );
}

export default About;