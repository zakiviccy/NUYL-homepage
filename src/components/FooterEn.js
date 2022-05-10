import React from 'react'
import {
  FaEnvelope,
  FaSubway,
  FaUserFriends,
  FaVimeoV,
  FaHome,
} from 'react-icons/fa'
import { GiJapan } from 'react-icons/gi'
// import { RiEnglishInput } from "react-icons/ri";
import { ImBooks } from 'react-icons/im'
// import { VscCircuitBoard } from "react-icons/vsc";
import { GoCircuitBoard } from 'react-icons/go'
import { MdAnnouncement } from 'react-icons/md'

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

const width = 300

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <StaticImage
              src="../img/logo.png"
              width={width}
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
                      <Link to="/en/" className="navbar-item" title="Home">
                        <FaHome />
                        &nbsp;&nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/en/news/" title="News">
                        <MdAnnouncement />
                        &nbsp;&nbsp;News
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/en/research/"
                        title="Reseach"
                      >
                        <GoCircuitBoard />
                        &nbsp;&nbsp;Research
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/en/publications/"
                        title="Publications"
                      >
                        <ImBooks />
                        &nbsp;&nbsp;Publications
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/en/#contact"
                        title="Contact"
                      >
                        <FaEnvelope />
                        &nbsp;&nbsp;Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/"
                        title="go to Japanese page"
                      >
                        <GiJapan />
                        &nbsp;&nbsp;Japanese
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
                        href="https://en.nagoya-u.ac.jp/"
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
                        href="https://www.ilas.nagoya-u.ac.jp/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Institute of Liberal Arts and Sciences, Nagoya University"
                      >
                        Institute of Liberal Arts and Sciences, Nagoya
                        University
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="http://www.nuee.nagoya-u.ac.jp/index-e.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Department of Information and Communication Engineering, Graduate School of Engineering, Nagoya University"
                      >
                        Department of Information and Communication Engineering,
                        Nagoya University
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.katayama.nuee.nagoya-u.ac.jp/index-e.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Nagoya University Katayama Laboratory"
                      >
                        Nagoya University Katayama Laboratory
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="navbar-item">
                  <Link to="/" title="go to Japanese page">
                    <GiJapan />
                  </Link>
                  <Link to="/en/news/" title="News">
                    <MdAnnouncement />
                  </Link>
                  <Link to="/en/research/" title="Research">
                    <GoCircuitBoard />
                  </Link>
                  <Link to="/en/publications/" title="Publications">
                    <ImBooks />
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/en/#team" title="Team">
                    <FaUserFriends />
                  </Link>
                  <Link to="/en/#contact" title="Contact">
                    <FaEnvelope />
                  </Link>
                  <Link to="/en/#access" title="Access">
                    <FaSubway />
                  </Link>
                  <a
                    className="navbar-item"
                    href="https://vimeo.com/user96502067"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Vimeo: Takaya Yamazato"
                  >
                    <FaVimeoV />
                  </a>
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
