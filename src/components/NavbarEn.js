import React from 'react'
import { Link } from 'gatsby'
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaSubway } from '@react-icons/all-files/fa/FaSubway'
import logo from '../img/NUYL-logo.svg'
import './all.sass'

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
            <nav className="navbar">
              {/* <div className="container"> */}
              <div className="navbar-brand" aria-label="brand">
                <Link to="/en/" className="navbar-item" title="Logo">
                  <img src={logo} alt="NUYL" style={{ width: '88px' }} />
                </Link>
                {/* Hamburger menu */}
                <button
                  className={`navbar-burger ${this.state.navBarActiveClass}`}
                  aria-label="Nav button"
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                {/* <div id="navbarBasicExample" className="navbar-menu"> */}
                <div className="navbar-start">
                  <Link className="navbar-item" to="/en/news/">
                    News
                  </Link>
                  <Link className="navbar-item" to="/en/research/">
                    Research
                  </Link>
                  <Link className="navbar-item" to="/en/publications/">
                    Publications
                  </Link>
                  <Link className="navbar-item" to="/en/Prospective-students/">
                  Prospective students
                  </Link>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link to="/">Japanese</Link>
                    <Link to="/en/#team" title="Team">
                      <FaUserFriends />
                    </Link>
                    <Link to="/en/#contact" title="Contact">
                      <FaEnvelope />
                    </Link>
                    <Link to="/en/#access" title="Access">
                      <FaSubway />
                    </Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

export default NavbarEn
