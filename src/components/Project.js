import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import onion from '../assets/img/onion.png';
import maratron from '../assets/img/maratron.png';

const Wrapper = styled.section`
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

const ProjectTitle = styled.div`
    display: flex;
    flex-wrap: wrap;

    h2 {
        font-size: 1.75rem;
        line-height: 1.3333333333;
    }

    strong {
        height: 20px;
        padding: 0 5px 0 4px;
        border-radius: 4px;
        margin: 8px 0 0 8px;
        font-size: 13px;
        line-height: 20px;
        color: #fff;
        background-color: #ff4949;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    box-shadow: -4px 3px 4px 0 rgba(0,0,0,0.25), 0 3px 4px 0 rgba(0,0,0,0.25);
    border-radius: 4px;
`;

const Project = () => {
    return (
        <Wrapper>
            <ProjectsWrapper>
                <Title>Projects</Title>
                
                <ProjectDescription>
                    <ProjectTitle>
                        <h2>Blackheart</h2>
                        <strong>My Work</strong>
                    </ProjectTitle>
                    
                    <p>2020.01 ~ NOW</p>
                    <p>BlackHeart E-commerce Web</p>
                    <ProjectImage src={onion} />

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    
                    <div>
                        <FontAwesomeIcon icon={faDesktop} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>

                    <p>전체 레이아웃 디자인</p>
                    <p>firebase를 사용한 소셜로그인</p>
                    <p>1인 개발</p>
                </ProjectDescription>

                <ProjectDescription>
                    <ProjectTitle>
                        <h2>MARATRON: 책을 듣다</h2>
                        <strong>TeamProject</strong>
                    </ProjectTitle>

                    <p>2019.03 ~ 2019.06</p>
                    <p>TTS를 기반으로 목소리를 분석해 학습된 목소리로 글을 읽어주는 웹 서비스</p>
                    
                    <ProjectImage src={maratron} />
                    
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">Documentation</a>
                    </div>
                    
                    <p>전체 레이아웃 디자인</p>
                    <p>firebase를 사용한 소셜로그인</p>
                </ProjectDescription>

                <ProjectDescription>
                    <ProjectTitle>
                        <h2>기상 분석에 따른 양파 생산량 분석과 예측</h2>
                        <strong>TeamProject</strong>
                    </ProjectTitle>
                    <p>2018.12.10 ~ 2018.12.21</p>
                    <p>양파 생산량 분석 웹 서비스</p>
                    <ProjectImage src={onion} />

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <a href="https://github.com/bhy304" target="_blank" rel="noopener noreferrer">Documentation</a>
                    </div>
            
                    
                    <p>전체 레이아웃 디자인</p>
                    <p>firebase를 사용한 소셜로그인</p>
                </ProjectDescription>

            </ProjectsWrapper>
        </Wrapper>
    );
}

export default Project;