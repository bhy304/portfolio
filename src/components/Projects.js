import React, { Component, Fragment } from 'react';
import onion from '../assets/img/onion.png';
import maratron from '../assets/img/maratron.png';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    id: 1,
                    projectName: '기상 분석에 따른 양파 생산량 분석과 예측', 
                    summary: '양파 생산량 분석 웹 서비스', 
                    frontend: 'FE - 신상림, 정인창, 박정은, 백하연',
                    backend: 'BE - 신상림, 정인창, 박정은, 백하연', 
                    developmentPeriod: '2018.12.10 ~ 2018.12.21',
                    mainFeatures: '메인페이지, 로그인 및 회원가입 페이지, 양파생산량 분석페이지, 기상분석페이지', 
                    technicalStack: 'Java, HTML5, CSS3, JavaScript, Ajax, jQuery, OracleDB', 
                    collaboration: 
                    '기능별 분담, Oven tool을 활용한 프로토타입 디자인, MVC 디자인패턴 활용, Agile 개발 프로세스, Git과 SourceTree를 활용한 버전관리, Trello를 활용한 프로젝트 관리',
                    github: 'https://github.com/bhy304/github/',
                    readme: 'https://bhy304.github.io/project1/', 
                    img : onion,
                    documentation: 'https://github.com/srshin/github/wiki/1st-Project-Overview'
                },
                {
                    id: 2,
                    projectName: 'MARATRON: 책을 듣다', 
                    summary: 'TTS를 기반으로 목소리를 분석해 학습된 목소리로 글을 읽어주는 웹 서비스', 
                    frontend: 'Frontend - 박정은, 백하연', 
                    backend: 'Backend - 신상림(PM), 정인창, 이남기', 
                    developmentPeriod: '2019.03 ~ 2019.06',
                    mainFeatures: 'MainPage, Sound Wave, Audio Store, Text To Voice',
                    technicalStack: 'Python, Django, HTML, CSS, JavaScript, MySQL, Tensorflow', 
                    collaboration: 
                    'Oven tool을 활용한 프로토타입 디자인, MVT 디자인패턴 활용, Agile 개발 프로세스, Git과 SourceTree를 활용한 버전관리 & 프로젝트 관리 및 문서화 작업',
                    github: 'https://github.com/brainmining-for-bigdata/maratron', 
                    readme: 'https://bhy304.github.io/project2/',
                    img : maratron,
                    documentation: 'https://github.com/brainmining-for-bigdata/project-text2speech-blog'
                }
            ]
        }
    }

    render() {
        const { projects } = this.state;
        return (
            <section id="projects" className="projects-section bg-light">
                <div className="container">
                    {projects.map(project => (
                        <Fragment key={project.id}>
                            <div className="title-wrapper">
                                <h1 className="textColor mb-4 text-center">{project.projectName}</h1>
                                <h4 className="textColor mb-4 text-center">{project.summary}</h4>
                            </div>
                            
                            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                                <div className="col-lg-6">
                                    <img className="img-fluid custom-image" src={project.img} alt={project.img} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="featured-text text-center text-lg-left">
                                        <ul>
                                            <ul>
                                                <h5>팀 구성원</h5>
                                                <li><span>{project.frontend}</span></li>
                                                <li><span>{project.backend}</span></li>
                                            </ul>
                                            <ul>
                                                <h5>프로젝트 기간</h5>
                                                <li><span>{project.developmentPeriod}</span></li>
                                            </ul>
                                            <ul>
                                                <h5>주요 기능</h5>
                                                <li><span>{project.mainFeatures}</span></li>
                                            </ul>
                                            <ul>
                                                <h5>사용 스택</h5>
                                                <li><span>{project.technicalStack}</span></li>
                                            </ul>
                                            <ul>
                                                <h5>업무 분담 및 협업 방안</h5>
                                                <li><span>{project.collaboration}</span></li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="btn-wrapper">
                                <div className="btn-group" role="group" aria-label="button group">    
                                    <form action={project.github} className="form-inline" target="_blank">
                                        <button type="submit" className="btn btn-primary">
                                            <span className="fab fa-github" aria-hidden="true"></span>GitHub
                                        </button>
                                    </form>

                                    <form action={project.documentation} className="form-inline" target="_blank">
                                        <button type="submit" className="btn btn-primary">
                                            <span className="fa fa-book" aria-hidden="true"></span>Document
                                        </button>
                                    </form>

                                    <form action={project.readme} className="form-inline" target="_blank">
                                        <button type="submit" className="btn btn-primary">
                                            <span className="fab fa-readme" aria-hidden="true"></span>ReadMe
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <hr className="d-none d-lg-block" />
                        </Fragment>
                    ))}
                </div>
            </section>
        )
    }
}

export default Projects;