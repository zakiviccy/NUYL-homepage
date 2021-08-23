import React from "react";
import { Link } from "gatsby";
import aclogo from "../img/AcademicCentaral.svg";
// import logo from "../img/ac-logo2.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          {/* <div className="navbar-brand"> */}
          {/* <Link to="/" className="navbar-item" title="Logo"> */}
          {/* <img src={logo} alt="CS-Edit" style={{ width: '88px' }} /> */}
          {/* <img src={aclogo} alt="Academic Central" style={{ height: "80px" }} />
            </Link> */}
          {/* Hamburger menu */}
          {/* <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md#how-do-i-resolve-this-error
              role="menuitem"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </button> */}
          {/* </div> */}
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div class="navbar-start">
              <Link className="navbar-item is-active" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/news/">
                News and Updates
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  <Link to="/research/">
                    <div className="navbar-item">Research</div>
                  </Link>
                </div>
                <div className="navbar-dropdown">
                  <Link to="/open-educational-resources/">
                    <div className="navbar-item">Open educational resources</div>
                  </Link>
                  <Link to="/stochastic-resonance/">
                    <div className="navbar-item">Stochastic resonance</div>
                  </Link>
                  <Link to="/Image-sensor-communications/">
                    <div className="navbar-item">Image sensor communications</div>
                  </Link>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">Publications</div>
                </div>
              </div>
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/our-team/">
                  Our Team
                </Link>
                <Link className="navbar-item" to="/awards/">
                  Awards
                </Link>
                <Link className="navbar-item" to="/contact/">
                  Contact/Access
                </Link>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <Link className="navbar-item" to="/ja/">
                日本語
              </Link>
              <Link className="navbar-item" to="/">
                English
              </Link>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fas fa-rss-square"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
