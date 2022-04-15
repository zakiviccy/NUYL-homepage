import React from "react";
import { Link } from "gatsby";
import logo from "../img/NUYL-logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
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
              <img src={logo} alt="NUYL" style={{ width: "88px" }} />
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
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  <Link to="/research/">
                    <div className="navbar-item">研究</div>
                  </Link>
                </div>
                <div className="navbar-dropdown">
                  <Link to="/open-educational-resources/">
                    <div className="navbar-item">オープン教材</div>
                  </Link>
                  <Link to="/stochastic-resonance/">
                    <div className="navbar-item">確率共鳴</div>
                  </Link>
                  <Link to="/Image-sensor-communications/">
                    <div className="navbar-item">可視光通信</div>
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/open-educational-resources/">
                    <div className="navbar-item">オープン教材</div>
                  </Link>
                </div>
              </div>
              <div className="navbar-start has-text-centered">
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">
                    <Link to="/research/">
                      <div className="navbar-item">業績／表彰</div>
                    </Link>
                  </div>
                  <div className="navbar-dropdown">
                    <Link to="/open-educational-resources/">
                      <div className="navbar-item">業績</div>
                    </Link>
                    <Link className="navbar-item" to="/awards/">
                      表彰
                    </Link>
                  </div>
                </div>
                <Link className="navbar-item" to="/our-team/">
                  チーム
                </Link>
                <Link className="navbar-item" to="/news/">
                  ニュース
                </Link>
                <Link className="navbar-item" to="/contact/">
                  お問い合わせ／アクセス
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="navbar-item" to="/ghost-blog.html">
                English
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
