import React from 'react'
import { FaEnvelope, FaSubway, FaUserFriends, FaVimeoV } from 'react-icons/fa'
// import { FaEnvelope } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import logo from "../img/og-image.jpg";
// import logo from '../img/logo.png'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
// import youtube from '../img/social/youtube.svg'
// import github from "../img/github-icon.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <StaticImage
              src="../img/logo.png"
              width="300"
              alt="Yamazato Laboratory"
              placeholder="blurred"
            />
          </Link>
        </div>
        <div className="content has-text-centered has-background-info has-text-danger">
          <div className="container has-background-info has-text-danger">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/en/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/en/news/">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/en/research/">
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/en/awards/">
                        Awards
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/#">
                        Japanese
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.nagoya-u.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Nagoya University"
                      >
                        Nagoya University
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.ilas.nagoya-u.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Institute of Liberal Arts and Sciences, Nagoya University"
                      >
                        Institute of Liberal Arts and Sciences, Nagoya University
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.nuee.nagoya-u.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Department of Information and Communication Engineering, Graduate School of Engineering, Nagoya University"
                      >
                        Department of Information and Communication Engineering, Nagoya University
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.katayama.nagoya-u.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Nagoya University Katayama Laboratory"
                      >
                        Nagoya University Katayama Laboratory
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/#contact">
                        <FaEnvelope />
                        &nbsp;&nbsp;Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="navbar-item">
                  <Link to="/#team">
                    <FaUserFriends />
                  </Link>
                  <Link to="/#contact">
                    <FaEnvelope />
                  </Link>
                  <Link to="/#access">
                    <FaSubway />
                  </Link>
                  <Link to="/#access">
                    <FaVimeoV />
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/#team">
                    <FaUserFriends />
                  </Link>
                  <Link to="/#contact">
                    <FaEnvelope />
                  </Link>
                  <Link to="/#access">
                    <FaSubway />
                  </Link>
                  <Link to="/#access">
                    <FaVimeoV />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
