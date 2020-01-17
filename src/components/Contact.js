import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <section id="contact" className="contact-section bg-black text-center">
                <h1 className="text-white mb-4">Contact</h1>
                
                <div className="container">

                    <div className="row">

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fa fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a href="bhy0512@gmail.com">bhy0512@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fab fa-github text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">GitHub</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a href="https://github.com/bhy304">https://github.com/bhy304</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fa fa-home text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Blog</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a href="https://bhy304.github.io/">https://bhy304.github.io/</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;