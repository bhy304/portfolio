import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section id="about" className="about-section bg-light">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="about-title mb-4">About Me</h1>
                        <h5 className="customColor">
                        안녕하세요. 저는 백하연입니다!<br/>
                        저는 무언가 만드는 것을 좋아하고 눈에 보이는 결과물을 보며 성취감을 느낍니다.<br/>
                        구현한 결과물을 사용자가 그대로 경험하고 피드백 받을 수 있는 프론트엔드 직무는 저에게 매우 큰 매력으로 다가왔습니다.<br/>
                        빠르게 발전하는 기술 환경 속에서 '어제보다 더 발전한 개발자'를 목표로 함께 성장해가고 싶습니다.<br/>
                        </h5>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default About;