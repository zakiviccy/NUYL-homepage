import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/NUYL-logo.svg'

const NavbarEn = class extends React.Component {
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
      <section className="hero is-medium">
        <div className="hero-head">
          <div className="container">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="container">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item" title="Logo">
                    <img src={logo} alt="NUYL" style={{ width: '88px' }} />
                  </Link>
                  {/* Hamburger menu */}
                  <button
                    className={`navbar-burger ${this.state.navBarActiveClass}`}
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
                  {/* <div id="navbarBasicExample" className="navbar-menu"> */}
                  <div className="navbar-start">
                    <Link className="navbar-item" to="/en/">
                      Home
                    </Link>
                    <Link className="navbar-item" to="/news/">
                      News
                    </Link>
                  </div>
                  <div className="navbar-end">
                    <div className="navbar-item">
                      <Link to="/">JP</Link>
                      <Link to="/en/#team">
                        <i class="fas fa-user-friends"></i>
                      </Link>
                      <Link to="/en/#contact">
                        <i class="fas fa-envelope"></i>
                      </Link>
                      <Link to="/en/#access">
                        <i class="fas fa-subway"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

export default NavbarEn
