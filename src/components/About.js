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

    .mt {
        margin-top: 5px;
    }
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
                        
                        <div className="mt">
                            안녕하세요! 웹 프론트엔드 개발자 백하연입니다.
                            <br />
                            <br />
                            {/* 개발하게 된 이유 */}
                            스스로 무언가를 만들며 눈에 보이는 결과물을 얻을 때 가장 성취감을 느껴 개발을 하게 되었습니다.
                            <br />
                            <br />
                            {/* 1인 개발 역량, 자기 개발 */}
                            1인 개발 프로젝트를 통해 기획부터 개발까지 혼자 진행해보며, 백엔드와 디자인 직군의 역할 이해도를 키웠습니다.
                            <br />
                            {/* 주로 자바스크립트를 사용하며, 리액트 프레임워크를 사용해 개발하고 있습니다.  */}
                            {/* 팀 프로젝트를 통해서 얻은 경험 */}
                            여러 팀 협업 프로젝트를 진행하며 주기적인 회의와 Git을 활용한 프로젝트 문서화 작업을 통해 팀원들과의 커뮤니케이션의 중요성을 알게 되었습니다. 
                            Oven tool, Slack, Trello, Discord 등의 협업 툴을 적용하며 협업 툴 활용능력도 쌓을 수 있었습니다.  팀원들과의 자발적인 스터디를 통해 기술과 지식을 함께 나누며 정보 공유 가치의 중요성도 느낄 수 있었습니다. 
                            <br />
                            <br />
                            좋은 개발자는 끊임없이 공부하는 개발자라는 생각으로 개발 서적과 온라인강의 등을 통한 학습, 토이프로젝트를 진행하며 자기 개발에도 손을 놓지 않고 있습니다.
                            <br />
                            <br />
                            {/* 최근 관심사 */}
                            현재 React.js를 활용한 개발과 GitHub을 통한 협업 및 프로젝트 관리, 자동화에 관심이 많습니다.
                        </div>

                    </Flex>
                </Description>

            </ProfileWrapper>
        </Wrapper>
    );
}

export default About;