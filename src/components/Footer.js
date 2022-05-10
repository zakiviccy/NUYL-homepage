import React from "react";
import { FaEnvelope, FaSubway, FaUserFriends, FaVimeoV, FaFlagUsa, FaAward, FaHome } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
// import { RiEnglishInput } from "react-icons/ri";
// import { ImBooks } from "react-icons/im";
// import { VscCircuitBoard } from "react-icons/vsc";
import { GoCircuitBoard } from "react-icons/go";
import { MdAnnouncement } from "react-icons/md";

// import { FaEnvelope } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// import logo from "../img/og-image.jpg";
// import logo from '../img/logo.png'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
// import youtube from '../img/social/youtube.svg'
// import github from "../img/github-icon.svg";

const width = 300;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <StaticImage src="../img/logo.png" width={width} alt="Yamazato Laboratory" placeholder="blurred" />
          </Link>
          <br />
          <br />
        </div>
        <div className="content has-text-centered has-background-info has-text-danger">
          <div className="container has-background-info has-text-danger">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item" title="go to Japanese page">
                        <FaHome />
                        &nbsp;&nbsp;ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/news/" title="News">
                        <MdAnnouncement />
                        &nbsp;&nbsp;ニュース
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/research/" title="Reseach">
                        <GoCircuitBoard />
                        &nbsp;&nbsp;研究
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/research/publications/" title="Publications">
                        <GiArchiveResearch />
                        &nbsp;&nbsp;業績
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/awards/" title="Awards">
                        <FaAward />
                        &nbsp;&nbsp;表彰
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/en/" title="go to English page">
                        <FaFlagUsa />
                        &nbsp;&nbsp;English
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a className="navbar-item" href="https://www.nagoya-u.ac.jp" target="_blank" rel="noopener noreferrer" title="Nagoya University">
                        東海国立大学機構 名古屋大学
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.ilas.nagoya-u.ac.jp/" target="_blank" rel="noopener noreferrer" title="Institute of Liberal Arts and Sciences, Nagoya University">
                        名古屋大学 教養教育院
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.nuee.nagoya-u.ac.jp/" target="_blank" rel="noopener noreferrer" title="Department of Information and Communication Engineering, Graduate School of Engineering, Nagoya University">
                        名古屋大学大学院 工学研究科 情報・通信工学専攻
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.katayama.nuee.nagoya-u.ac.jp/" target="_blank" rel="noopener noreferrer" title="Nagoya University Katayama Laboratory">
                        片山研究室
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/#contact" title="お問い合わせ">
                        <FaEnvelope />
                        &nbsp;&nbsp;お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="navbar-item">
                  <Link to="/en/" title="go to English page">
                    <FaFlagUsa />
                    {/* <RiEnglishInput /> */}
                  </Link>
                  <Link to="/news/" title="News">
                    {/* <FaRegNewspaper /> */}
                    <MdAnnouncement />
                  </Link>
                  <Link to="/research/" title="Research">
                    <GoCircuitBoard />
                  </Link>
                  <Link to="/research/publications/" title="Publications">
                    <GiArchiveResearch />
                  </Link>
                  <Link to="/awards/" title="Awards">
                    <FaAward />
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/#team" title="Team">
                    <FaUserFriends />
                  </Link>
                  <Link to="/#contact" title="Contact">
                    <FaEnvelope />
                  </Link>
                  <Link to="/#access" title="Access">
                    <FaSubway />
                  </Link>
                  <a className="navbar-item" href="https://vimeo.com/user96502067" target="_blank" rel="noopener noreferrer" title="Vimeo: Takaya Yamazato">
                    <FaVimeoV />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
