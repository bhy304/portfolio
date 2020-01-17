import React, { Component} from 'react';
import { Link } from 'react-scroll';

class Navigation extends Component {

  handleDelActive(to) {
    let mainNav = document.getElementById('mainNav');
    mainNav.classList.remove('navbar-shrink');
  }

  handleSetActive(to) {
    let mainNav = document.getElementById('mainNav');
    mainNav.classList.add('navbar-shrink');
  }

  render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <Link activeClass="navbar-shrink" className="navbar-brand js-scroll-trigger" to="page-top" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>HayeonBaek</Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link activeClass="navbar-shrink" className="nav-link js-scroll-trigger" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClass="navbar-shrink" className="nav-link js-scroll-trigger" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClass="navbar-shrink" className="nav-link js-scroll-trigger" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Contact</Link>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
      )
  }
}

export default Navigation;