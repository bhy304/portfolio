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
    flex-direction: column;
`;

const Skills = () => {
    return (
        <Wrapper>
            <ProjectWrapper>
                <Title>Skills</Title>

                <SkillsList>
                    <h1>Language</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>

                    <h1>Tried</h1>
                    <ul>
                        <li>Vue.js</li>
                        <li>Sass</li>
                        <li>Styled-Components</li>
                        <li>Java</li>
                    </ul>

                    <h1>Etc.</h1>
                    <ul>
                        <li>MySQL</li>
                        <li>OracleDB</li>
                        <li>Java</li>
                    </ul>
                </SkillsList>

            </ProjectWrapper>
        </Wrapper>
    );
}

export default Skills;