import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: #fff;
`;

const ProjectWrapper = styled.div`
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

const SkillsList = styled.div`
    display: flex;
    width: 100%;
    /* flex-direction: column;
    justify-content: center;
    align-content: center; */
`;

const SkillItem = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;

    dl {
        display: flex;
        flex-direction: column;
    }

    dl div {
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 6px 0;
    }

    dl div dt img {
        width: 30px;
        height: 30px;
        margin-right: 7px;
    }

    dl div dd {
        align-items: center;
        font-size: 1.25rem;
    }
`;

const Skills = () => {
    return (
        <Wrapper>
            <ProjectWrapper>
                <Title>Skills</Title>

                <SkillsList>
                    {/* Programming Languages */}
                    <SkillItem>
                        <h1>Languages</h1>
                        <dl>       
                            <div>
                                <dt><img src={require('../../src/assets/java.svg')} alt="Java"/></dt>
                                <dd>Java</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/python.svg')} alt="Python"/></dt>
                                <dd>Python</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/javascript.svg')} alt="JavaScript"/></dt>
                                <dd>JavaScript</dd>
                            </div>                 
                            <div>
                                <dt><img src={require('../../src/assets/react.svg')} alt="JavaScript"/></dt>
                                <dd>React.js</dd>
                            </div> 
                            <div>
                                <dt><img src={require('../../src/assets/react-router.svg')} alt="JavaScript"/></dt>
                                <dd>React-router</dd>
                            </div> 
                            <div>
                                <dt><img src={require('../../src/assets/styled-components.png')} alt="Python"/></dt>
                                <dd>Styled-Components</dd>
                            </div>
                        </dl>
                    </SkillItem>
                    
                    <SkillItem>
                        <h1>Tried</h1>
                        <dl>
                            <div>
                                <dt><img src={require('../../src/assets/redux.svg')} alt="JavaScript"/></dt>
                                <dd>Redux</dd>
                            </div> 
                            
                            <div>
                                <dt><img src={require('../../src/assets/django.svg')} alt="JavaScript"/></dt>
                                <dd>Django</dd>
                            </div>                 
                            <div>
                                <dt><img src={require('../../src/assets/vue.svg')} alt="Java"/></dt>
                                <dd>Vue.js</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/sass.svg')} alt="Python"/></dt>
                                <dd>Sass</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/docker-icon.svg')} alt="Python"/></dt>
                                <dd>Docker</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/aws.svg')} alt="Python"/></dt>
                                <dd>AWS</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/firebase.svg')} alt="Python"/></dt>
                                <dd>Firebase</dd>
                            </div>
                        </dl>
                    </SkillItem>
                    
                    <SkillItem>
                        <h1>Etc.</h1>
                        <dl>       
                            <div>
                                <dt><img src={require('../../src/assets/mysql.svg')} alt="JavaScript"/></dt>
                                <dd>MongoDB</dd>
                            </div>                 
                            <div>
                                <dt><img src={require('../../src/assets/mysql.svg')} alt="JavaScript"/></dt>
                                <dd>MySQL</dd>
                            </div>                 
                            <div>
                                <dt><img src={require('../../src/assets/oracle.svg')} alt="Java"/></dt>
                                <dd>OracleDB</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/tomcat.svg')} alt="Python"/></dt>
                                <dd>Apache Tomcat</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/sourcetree.svg')} alt="Python"/></dt>
                                <dd>SourceTree</dd>
                            </div>
                            <div>
                                <dt><img src={require('../../src/assets/bootstrap.svg')} alt="Python"/></dt>
                                <dd>BootStrap</dd>
                            </div>
                        </dl>
                    </SkillItem>

                </SkillsList>

            </ProjectWrapper>
        </Wrapper>
    );
}

export default Skills;