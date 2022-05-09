import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/NUYL-logo.svg'
// import "./all.sass";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-info"
        role="navigation"
        aria-label="main-navigation"
      >
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
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/news/" title="News">
                ニュース
              </Link>
              <Link className="navbar-item" to="/research/" title="Reseach">
                研究
              </Link>
              <Link className="navbar-item" to="/research/publications/" title="Publications">
                業績
              </Link>
              <Link className="navbar-item" to="/research/awards/" title="Awards">
                受賞
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/en/" title="go to English page">EN</Link>
                <Link to="/#team" title="Team">
                  <i class="fas fa-user-friends"></i>
                </Link>
                <Link to="/#contact" title="Contact">
                  <i class="fas fa-envelope"></i>
                </Link>
                <Link to="/#access" title="Access">
                  <i class="fas fa-subway"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
