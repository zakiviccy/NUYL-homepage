import React from 'react'
import { FaEnvelope, FaSubway, FaUserFriends, FaVimeoV } from 'react-icons/fa'
// import { FaEnvelope } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import logo from "../img/og-image.jpg";
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import youtube from '../img/social/youtube.svg'
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
                      <Link to="/" className="navbar-item">
                        ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/news/">
                        ニュース
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/research/">
                        研究
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/awards/">
                        業績／表彰
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/en/#">
                        English
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
                      >
                        東海国立大学機構 名古屋大学
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.ilas.nagoya-u.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        名古屋大学 教養教育院
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.nuee.nagoya-u.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        名古屋大学大学院 工学研究科 情報・通信工学専攻
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.katayama.nagoya-u.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        片山研究室
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/#contact">
                        <FaEnvelope />
                        &nbsp;&nbsp;お問い合わせ
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
