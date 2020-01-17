import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="page-top" className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Developer</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">개발자 백하연의 포트폴리오입니다.</h2>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;