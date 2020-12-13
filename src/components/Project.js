import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

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
    margin-bottom: 50px;
    line-height: 1.5;

    svg {
        font-size: 22px;
    }

    a {
        padding-left: 5px;
    }

    .about {
        margin: 3px 10px; 
        display: flex;

        div {
            margin-top: 5px;
        }

        div + div {
            margin-left: 1rem;
        }
    }

    .team {
        margin: 5px 10px 0 10px;
        display: flex;
        
        p {
            padding-left: 5px;
        }
    }
`;

const ProjectTitle = styled.div`
    display: flex;
    flex-wrap: wrap;

    h2 {
        font-size: 1.75rem;
        line-height: 1.3333333333;

        a {
            padding: 0;
        }

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
    margin: 5px 0;
`;

const Description = styled.div`
    display: flex;
    margin: 8px 10px;
    
    div + div {
        padding-left: 10px;
    }

    div {
        width: 50%;
        display: flex;
        flex-direction: column;

        h3 {
            margin: 5px 0;
            width: 100%;
            border-bottom: 1px solid  #212121;
        }
    }

    span {
        margin: 1px 0;
    }

    ul  {
        padding-left: 10px;

        li {
            list-style: inside;
        }
    }

    .cl_b {
        color: #0066ff;
    }

    
`;

const Project = () => {
    return (
        <Wrapper>
            <ProjectsWrapper>
                <Title>Projects</Title>
                {/* PROJECT 1 */}
                <ProjectDescription>
                    <ProjectTitle>
                        <h2>
                            <a href="https://blackheart.sparker.kr/" target="_blank" rel="noopener noreferrer" title="Demo">
                                Blackheart
                            </a>
                        </h2>
                        <strong>My Work &amp; Team Project</strong>
                    </ProjectTitle>
                    
                    <p>2020.11 ~ NOW</p>
                    <p>BlackHeart E-commerce Web Application</p>
                    <ProjectImage src={require('assets/img/blackheart.png')} />
                    <div className="about">
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/CrackerWeAre/Blackheart" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                    <div className="team">
                        <FontAwesomeIcon icon={faUsers} />
                        <p>1인 개발(11월부터 팀프로젝트 전환), 4인 팀 구성원 중 프론트엔드 담당</p>
                    </div>
        
                    <Description>
                        <div>
                            {/* What I did */}
                            <h3 className="cl_b">What I did</h3>
                            <span>프로젝트 기획</span>
                            <span>Figma를 활용한 프로토타입 설계</span>
                            <span>전체 레이아웃 및 UI/UX 디자인</span>
                            <span>메인화면 및 사용자 인증 화면 기능 개발</span>
                        </div>
                        <div>
                            {/* Technology Stack */}
                            <h3 className="cl_b">Tech Stack</h3>
                            <span>React.js를 사용한 프론트엔드 기능 구현</span>
                            <span>Redux, Redux-saga 등을 통한 전역 상태 관리</span>
                            <span>Axios 라이브러리를 통한 HTTP 비동기 서버 통신</span>
                            <span>Styled-components를 사용한 스타일링</span>
                        </div>
                    </Description>
                    <Description>
                        <div>
                            {/* 업무 분담 및 협업 방안 */}
                            <h3>What Our Team Did</h3>
                            <span>GoLang를 사용한 백엔드 개발</span>
                            <span>MySQL을 활용한 데이터베이스 설계 및 관리</span>
                            <span>Discord, Notion을 활용한 프로젝트 스케쥴 관리</span>
                            <span>Git과 SourceTree를 활용한 버전관리, 프로젝트 관리 및 문서화 작업</span>
                            <span>Iwinv 클라우드 서버 호스팅을 통한 서버 연결 및 도메인 설정</span>
                        </div>
                    </Description>
                </ProjectDescription>

                {/* PROJECT 2 */}
                <ProjectDescription>
                    <ProjectTitle>
                        <h2>MARATRON: 책을 듣다</h2>
                        <strong>Team Project</strong>
                    </ProjectTitle>

                    <p>2019.03 ~ 2019.06</p>
                    <p>개인화 음성 합성 기술 TTS를 기반으로 목소리를 분석해 학습된 목소리로 글을 읽어주는 웹 서비스</p>
                    
                    <ProjectImage src={require('assets/img/maratron.png')} />
                    <div className="about">
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/brainmining-for-bigdata/maratron" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBook} />
                            <a href="https://bhy304.github.io/project2/" target="_blank" rel="noopener noreferrer">Read Me</a>
                        </div>
                    </div>
                    <div className="team">
                        <FontAwesomeIcon icon={faUsers} />
                        <p>5인 팀 구성원 중 프론트엔드 담당</p>
                    </div>

                    <Description>
                        {/* What I did */}
                        <div>
                            <h3 className="cl_b">What I did</h3>
                            <span>BootStrap, CSS를 활용한 전체 웹 페이지(레이아웃) 디자인</span>
                            <span>프론트엔드 전체 기능 개발</span>
                            <span>Ajax를 이용하여 생성된 음성 파일 출력</span>
                            <span>MVT 디자인패턴 활용한 웹페이지 구축 및 DB 연결</span>
                            <span>MySQL을 활용한 데이터베이스 설계 및 관리</span>
                        </div>
                        {/* 업무 분담 및 협업 방안 */}
                        <div>
                            <h3>What Our Team Did</h3>
                            <span>구글에서 발표된 오픈 소스 <a href="https://github.com/keithito/tacotron">TACOTRON</a>을 기반으로 TTS 모델 구현</span>
                            <span>Oven tool을 활용한 프로토타입 설계</span>
                            <span>Git을 통한 Agile 개발 프로세스</span>
                            <span>Git과 SourceTree를 활용한 버전관리, 프로젝트 관리 및 문서화 작업</span>
                        </div>
                        {/* Technology Stack */}
                        {/* <div>
                            <h3 className="cl_b">Tech Stack</h3>
                            <span>HTML5, CSS, JavaScript, jQuery</span>
                            <span>BootStrap</span>
                            <span>Python, Django</span>
                            <span>MySQL</span>
                        </div> */}
                    </Description>
                </ProjectDescription>

                {/* PROJECT 3 */}
                <ProjectDescription>
                    <ProjectTitle>
                        <h2>기상 분석에 따른 양파 생산량 시각화</h2>
                        <strong>Team Project</strong>
                    </ProjectTitle>
                    <p>2018.12.10 ~ 2018.12.21</p>
                    <p>과거의 데이터를 기반으로 기후와 생산량의 관계를 분석하고, 이를 바탕으로 양파 생산량을 예측하는 분석 웹 서비스</p>
                    <ProjectImage src={require('assets/img/onion.png')} />
                    <div className="about">
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/brainmining-for-bigdata/github" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBook} />
                            <a href="https://bhy304.github.io/project1/" target="_blank" rel="noopener noreferrer">Read Me</a>
                        </div>
                    </div>
                    <div className="team">
                        <FontAwesomeIcon icon={faUsers} />
                        <p>4인 팀 구성원 개발</p>
                    </div>

                    <Description>
                        {/* What I did */}
                        <div>
                            <h3 className="cl_b">What I did</h3>
                            <span>기상데이터분석 담당페이지 전체 기능 개발</span>
                            <span>Google Charts API를 활용한 데이터 시각화 UI 구현</span>
                            <span>MVC 디자인패턴 활용한 웹페이지 구축 및 DB 연결</span>
                            <span>OracleDB를 활용한 데이터베이스 설계 및 관리</span>
                        </div>
                        {/* 업무 분담 및 협업 방안 */}
                        <div>
                            <h3>What Our Team Did</h3>
                            <span>Oven을 활용한 프로토타입 설계</span>
                            <span>Trello를 활용한 프로젝트 관리</span>
                            <span>Git을 통한 Agile 개발 프로세스</span>
                            <span>Git과 SourceTree를 활용한 버전관리, 프로젝트 관리 및 문서화 작업</span>
                        </div>
                        {/* Technology Stack */}
                        {/* <div>
                            <h3 className="cl_b">Tech Stack</h3>
                            <span>HTML5, CSS, JavaScript, jQuery</span>
                            <span>Java</span>
                            <span>OracleDB</span>
                        </div> */}
                    </Description>
                </ProjectDescription>

            </ProjectsWrapper>
        </Wrapper>
    );
}

export default Project;