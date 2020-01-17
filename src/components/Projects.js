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
                    name: '기상 분석에 따른 양파 생산량 분석과 예측', // 프로젝트명
                    summary: '과거의 데이터를 기반으로 기후와 생산량의 관계를 분석하고 이를 바탕으로 양파 생산량을 예측하는 분석 사이트', //프로젝트 개요
                    teamMembers: '신상림, 정인창, 박정은, 백하연', //팀구성원
                    mainFeatures: '메인페이지, 로그인 및 회원가입 페이지, 양파생산량 분석페이지, 기상분석페이지', // 주요기능
                    technicalStack: 'Java, HTML5, CSS3, JavaScript, Ajax, jQuery, OracleDB', // 기술 스택
                    collaboration: 'MVC 디자인패턴 활용, 애자일 개발 프로세스, Git과 SourceTree를 활용한 버전관리, Trello를 활용한 작업 일정 관리', //업무분담 및 협업 방안
                    github: 'https://github.com/bhy304/github', //gitHub 주소
                    readme: 'https://bhy304.github.io/project1/', //ReadMe 주소
                    img : onion
                },
                {
                    id: 2,
                    name: 'MARATRON: 책을듣다', // 프로젝트명
                    summary: '개인화 음성 합성 기술 TTS를 기반으로 목소리를 분석해 학습된 목소리로 글을 읽어주는 웹 서비스', //프로젝트 개요
                    teamMembers: 'PM - 신상림, frontend - 박정은, 백하연, backend - 신상림, 정인창, 이남기', //팀구성원
                    mainFeatures: 'MainPage, SoundWave, Audio Store, Text To Voice ', // 주요기능
                    technicalStack: 'Python, Django, HTML, CSS, JavaScript, MySQL, Tensorflow', // 기술 스택
                    collaboration: 'MVT 디자인패턴 활용, 애자일 개발 프로세스, Git을 활용한 버전관리 및 문서화 작업', //업무분담 및 협업 방안
                    github: 'https://github.com/brainmining-for-bigdata/maratron', //gitHub 주소
                    readme: 'https://bhy304.github.io/project2/', //ReadMe 주소
                    img : maratron
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
                            <h1 className="text-black mb-4 text-center">{project.name}</h1>
                            <p className="text-black mb-4 text-center">{project.summary}</p>

                            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                <img className="img-fluid mb-3 mb-lg-0" src={project.img} alt={project.img} />
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                <div className="featured-text text-center text-lg-left">
                                
                                    <ul>
                                        <li><p>{project.teamMembers}</p></li>
                                        <li><p>{project.mainFeatures}</p></li>
                                        <li><p>{project.technicalStack}</p></li>
                                        <li><p>{project.collaboration}</p></li>
                                    </ul>

                                    <form action={project.github} className="form-inline d-flex">
                                        <button type="submit" className="btn btn-primary mx-auto">
                                            <span className="fab fa-github" aria-hidden="true"></span>GitHub
                                        </button>
                                    </form>

                                    <form action={project.readme} className="form-inline d-flex">
                                        <button type="submit" className="btn btn-primary mx-auto">
                                            <span className="fa fa-book" aria-hidden="true"></span>ReadMe
                                        </button>
                                    </form>

                                </div>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </section>
        )
    }
}

export default Projects;