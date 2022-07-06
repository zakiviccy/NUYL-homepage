import React from 'react'
import { Link } from 'gatsby'
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaSubway } from '@react-icons/all-files/fa/FaSubway'
import logo from '../img/NUYL-logo.svg'
import './all.sass'

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
              aria-label="Nav button"
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              tabIndex={0}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          {/*
      <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
              <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Account</a>
              <div class="navbar-dropdown"><a class="navbar-item">Dashboard</a><a class="navbar-item">Profile</a><a class="navbar-item">Settings</a>
              <hr class="navbar-divider" />
              <div class="navbar-item">Logout</div>
          </div>
      </div>
  </div>
</div>
</div>
</nav> */}

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
              <Link
                className="navbar-item"
                to="/research/publications/"
                title="Publications"
              >
                業績
              </Link>
              <Link
                className="navbar-item"
                to="/research/awards/"
                title="Awards"
              >
                受賞
              </Link>
              <Link
                className="navbar-item"
                to="/research/OER/list/"
                title="Open Educational Resources"
              >
                教材
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/en/" title="go to English page">
                  English
                </Link>
                <Link to="/#team" title="Team">
                  <FaUserFriends />
                </Link>
                <Link to="/#contact" title="Contact">
                  <FaEnvelope />
                </Link>
                <Link to="/#access" title="Access">
                  <FaSubway />
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
