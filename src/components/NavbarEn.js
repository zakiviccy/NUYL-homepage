import React from "react";
import { Link } from "gatsby";
import logo from "../img/NUYL-logo.svg";

const NavbarEn = class extends React.Component {
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
          <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="NUYL" style={{ width: '88px' }} />
            </Link>
          {/* Hamburger menu */}
          <button
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
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
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
                <Link className="navbar-item" to="/news/">
                News and Updates
              </Link>
                <Link className="navbar-item" to="/contact/">
                  Contact/Access
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="navbar-item" to="/ja/">
                Japanese
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarEn;
