import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import onion from '../assets/img/onion.png';
import maratron from '../assets/img/maratron.png';

const Wrapper = styled.section`
    width: 100%;
    background-color: #fff;
`;

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 80px;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 80px 0 30px 0;
    text-decoration: underline;
    text-decoration-color: #0066ff;
`;

const ProjectDescription = styled.div`
    margin-bottom: 20px;

    svg {
        font-size: 22px;
    }

    a {
        padding-left: 5px;
    }
`;

const ProjectTitle = styled.h2`
    font-size: 1.75rem;
`;

const ProjectImage = styled.img`
    width: 100%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;

// const TeamProjectWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-top: 20px;
// `;

// const TeamProjects = styled.div`
//     width: 100%;
//     margin: 20px 5px;
//     background-color: #fff;

//     h2  {
//         font-size: 1.25rem;
//     }
//     p {
//         font-size: 14px;
//     }

//     img {
//         height: 250px;
//     }

//     a {
//         padding-left: 5px;
//     }
// `;

const Tag = styled.span`
    background-color: #ff4949;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    padding: 3px;
    text-align: center;
`;

const Project = () => {
    return (
        <Wrapper>
            <ProjectsWrapper>
                <Title>Projects</Title>
                
                <ProjectDescription>
                    <div>
                        <ProjectTitle>BlackHeart</ProjectTitle>
                        <Tag>MyWork</Tag>
                    </div>
                    
                    <p>E-commerce application</p>
                    
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    
                    <div>
                        <FontAwesomeIcon icon={faDesktop} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>

                    <ProjectImage src={onion} />
                    <p>2020.01 ~ NOW</p>
                    <p>전체 레이아웃 디자인</p>
                    <p>firebase를 사용한 소셜로그인</p>
                </ProjectDescription>

                <ProjectDescription>
                    <ProjectTitle>MARATRON: 책을 듣다 <Tag>TeamProject</Tag></ProjectTitle>
                    <p>TTS를 기반으로 목소리를 분석해 학습된 목소리로 글을 읽어주는 웹 서비스</p>
                    
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">Documentation</a>
                    </div>
                    
                    <ProjectImage src={maratron} />
                    <p>2019.03 ~ 2019.06</p>
                    <p>전체 레이아웃 디자인</p>
                    <p>firebase를 사용한 소셜로그인</p>
                </ProjectDescription>

                <ProjectDescription>
                    <ProjectTitle>기상 분석에 따른 양파 생산량 분석과 예측 <Tag>TeamProject</Tag></ProjectTitle>
                    <p>양파 생산량 분석 웹 서비스</p>
                    
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">Documentation</a>
                    </div>
            
                    <ProjectImage src={onion} />
                    <p>2018.12.10 ~ 2018.12.21</p>
                    <p>전체 레이아웃 디자인</p>
                    <p>firebase를 사용한 소셜로그인</p>
                </ProjectDescription>

                {/* <TeamProjectWrapper>
                    <TeamProjects>
                        <ProjectTitle>MARATRON: 책을 듣다 <Tag>TeamProject</Tag></ProjectTitle>
                        <p>TTS를 기반으로 목소리를 분석해 학습된 목소리로 글을 읽어주는 웹 서비스</p>

                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>

                        <ProjectImage src={maratron} />
                        <p>2019.03 ~ 2019.06</p>
                    </TeamProjects>

                    <TeamProjects>
                        <ProjectTitle>기상 분석에 따른 양파 생산량 분석과 예측 <Tag>TeamProject</Tag></ProjectTitle>
                        <p>양파 생산량 분석 웹 서비스</p>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <ProjectImage src={onion} />
                        <p>2018.12.10 ~ 2018.12.21</p>

                    </TeamProjects>
                </TeamProjectWrapper> */}
            </ProjectsWrapper>
        </Wrapper>
    );
}

export default Project;