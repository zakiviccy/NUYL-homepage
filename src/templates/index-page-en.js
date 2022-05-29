import * as React from "react";
import PageTopEn from "../components/PageTopEn";
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby";
import SeO from "../components/seo";
import Layout from "../components/LayoutEn";
import BlogRoll from "../components/indexRollEn";
import { StaticImage } from "gatsby-plugin-image";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaUserGraduate } from "@react-icons/all-files/fa/FaUserGraduate";
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaSubway } from "@react-icons/all-files/fa/FaSubway";
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";

const width = 300;

const IndexPageTemplateEN = ({ data }) => (
  <Layout>
    <SeO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description} />
    <div className="hero-body">
      <div className="container has-text-centered">
        <StaticImage src="../img/logo.png" width={width} alt="Nagoya University Yamazato Laboratory" placeholder="blurred" />
      </div>
    </div>
    <section className="blog-posts">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-7 post-img ">
                    <StaticImage src="../img/ITS-VLC.png" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                  <div className="column is-5 featured-content va">
                    <div>
                      <h1 className="heading post-category">Research</h1>
                      <h1 className="title post-title">Image sensor communication</h1>
                      <p className="post-excerpt">We conduct research on image-sensor communication (ISC), one of the visible light communication (VLC) system.</p>
                      <br />
                      <Link className="button" to="/en/Image-sensor-communication/">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <PageTopEn />
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-5 featured-content va">
                    <div>
                      <h1 className="heading post-category">Research</h1>
                      <h1 className="title post-title">Stochastic resonance for communication</h1>
                      <p className="post-excerpt">Stochastic resonance (SR) is a nonlinear phenomenon in which a system response is enhanced by additional noise.</p>
                      <br />
                      <Link className="button" to="/en/Sub-threshold-signal-detection-using-stochastic-resonance/">
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="column is-7 post-img ">
                    <StaticImage src="../img/SR.png" alt="Stochastic Resonance" placeholder="blurred" />
                  </div>
                </article>
              </div>
            </div>
            <PageTopEn />
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-7 post-img ">
                    <StaticImage src="../img/USA.png" alt="Ultrasonic sensor array" placeholder="blurred" />
                  </div>
                  <div className="column is-5 featured-content va">
                    <div>
                      <h1 className="heading post-category">Research</h1>
                      <h1 className="title post-title">Ultrasonic sensor array</h1>
                      <p className="post-excerpt">We are working on an ultrasonic sensor array system for slow-moving vehicles.</p>
                      <br />
                      <Link to="/en/research/" className="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <PageTopEn />
            <hr />
            <div className="columns is-multiline">
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/Rotary-LED.png" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">Research</h1>
                    <h1 className="title post-title">Rotary LED transmitter</h1>
                    <p className="post-excerpt">To improve the data rate of image sensor communication (ISC), we are currently working on using the afterimage effect by a rotary LED transmitter.</p>
                    <br />
                    <Link to="/en/Image-sensor-communication/" className="button">
                      Read More
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/Global_Open_Educational_Resources_Logo.svg" alt="Open Educational Resources Logo" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">Research</h1>
                    <h1 className="title post-title">Open educational resources (OERs)</h1>
                    <p className="post-excerpt">Open educational resources (OERs) are teaching, learning, or research materials that are available in the public domain or released with an intellectual property license that allows for free use, adaptation, and distribution. We are currently focusing on developing OERs and their related technologies.</p>
                    <br />
                    <Link to="/en/OER/" className="button">
                      Read More
                    </Link>
                  </div>
                </article>
              </div>
            </div>
            <PageTopEn />
            <hr />
            <h2 className="title post-title">News and Updates</h2>
            <div className="columns is-multiline">
              <div className="column post is-12">
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="button" to="/news">
                    Read more "News and Updates" →
                  </Link>
                </div>
              </div>
            </div>
            <PageTopEn />
            <hr />
            <h2 id="team" className="title post-title">
              <Link to="/en/team/"> Our Team</Link>
            </h2>
            <div className="columns is-multiline">
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">Staff</h1>
                    <h1 className="title post-title">
                      <FaUserTie />
                    </h1>
                    <p className="post-excerpt">
                      Professor <br />
                      &nbsp; &nbsp;
                      <Link to="/en/team/Takaya-Yamazato/">Takaya YAMAZATO</Link>
                      <br />
                      <br />
                      Secretaries <br />
                      &nbsp; &nbsp;Aiko ISHIKAWA
                      <br />
                      &nbsp; &nbsp;Eriko SHIRAISHI
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">Ph.D. Candidates</h1>
                    <h1 className="title post-title">
                      <FaUserGraduate />
                    </h1>
                    <p className="post-excerpt">
                      D3 <br />
                      &nbsp; &nbsp;Asuka TSUJII
                      <br />
                      <br />
                      D2 <br />
                      &nbsp; &nbsp;Ruiyi HUANG
                      <br />
                      &nbsp; &nbsp;Zhengqiang TANG
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">Master students</h1>
                    <h1 className="title post-title">
                      <FaUserGraduate />
                    </h1>
                    <p className="post-excerpt">
                      M2 <br />
                      &nbsp; &nbsp;Syunki KAMIYA
                      <br />
                      &nbsp; &nbsp;Masamichi HATTORI
                      <br />
                      &nbsp; &nbsp;Kento NAKAMURA
                      <br />
                      <br />
                      M1 <br />
                      &nbsp; &nbsp;Daiki EHARA
                      <br />
                      &nbsp; &nbsp;Fumiya OJIKA
                      <br />
                      &nbsp; &nbsp;Jinxing ZHENG
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">Undergraduate students</h1>
                    <h1 className="title post-title">
                      <FaUserFriends />
                    </h1>
                    <p className="post-excerpt">
                      B4 <br />
                      &nbsp; &nbsp;Arata ISOZAKI
                      <br />
                      &nbsp; &nbsp;Ayumu OTSUKA
                      <br />
                      &nbsp; &nbsp;Kota FURUKAWA
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <PageTopEn />
            <hr />
            <div className="column post is-12">
              <h2 id="contact" className="title post-title">
                Contact:{" "}
              </h2>

              <p className="post-excerpt">
                YAMAZATO Laboratory,
                <br />
                Department of Information and Communication Engineering, <br />
                School of Engineering, Nagoya University
              </p>
              <p className="post-excerpt">
                <FaEnvelope />
                &nbsp; &nbsp;Furo-cho, Chikusa-ku, Nagoya 464-8063 JAPAN
                <br />
                <FaPhoneAlt />
                &nbsp; &nbsp;Laboratory: +81-52-789-3173
                <br />
                <FaPhoneAlt />
                &nbsp; &nbsp;Secretary: +81-52-789-2743
                <br />
              </p>
              <br />

              <h3 id="access" className="title post-title">
                Access:{" "}
              </h3>
              <p className="post-excerpt">
                YAMAZATO Laboratory is located at 5th Floor of the North IB Building.
                <br />
                See also our{" "}
                <a href="https://en.nagoya-u.ac.jp/upload_images/20210129_map_en.pdf" title="Campus map">
                  campus map, C3-1
                </a>{" "}
                , for the location of the North IB Building.
              </p>
              <br />
              <h4 className="subtitle post-subtitle">
                <FaSubway /> From Nagoya Station:
              </h4>
              <p className="post-excerpt">Take the Subway Higashiyama Line to Motoyama Sta. (15 minutes), then transfer to the Subway Meijo Line to Nagoya Daigaku Sta. (Higashiyama Campus is just off the subway exit.).</p>
              <br />
              <h4 className="subtitle post-subtitle">
                <FaSubway /> From Centrair (Central Japan International Airport):{" "}
              </h4>
              <p className="post-excerpt">Take the Meitetsu Line to Kanayama Sta. (30 min.), then transfer to the Subway Meijyo Line to Nagoya Daigaku Sta. (21 min.).</p>
              <br />
              <p className="post-excerpt">
                <FaSubway /> See also{" "}
                <a href="http://en.nagoya-u.ac.jp/access/index.html" title="Nagoya University HP">
                  Nagoya University access map
                </a>
                .
              </p>
              <p className="post-excerpt">
                <SiGooglemaps />
                &nbsp;See the location of Yamazato laboratory in <a href="https://www.google.co.jp/maps/place/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6+IB%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E9%A4%A8+%E5%8C%97%E6%A3%9F/@35.155147,136.9647537,18z/data=!4m5!3m4!1s0x60037b3dbaffafc5:0x4b259fac77fcc377!8m2!3d35.1553519!4d136.9660213?hl=ja">Google map</a>.
              </p>

              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.067613051525!2d136.963807252052!3d35.154934480223524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037abb489f342d%3A0x77c72171e4e956e8!2z5ZCN5Y-k5bGL5aSn5a2m5bel5a2m6YOo44O75aSn5a2m6Zmi5bel5a2m56CU56m256eR!5e0!3m2!1sja!2sjp!4v1634217089125!5m2!1sja!2sjp&amp;language=en"
                width="600"
                height="450"
                // style="border:0;"
                title="See the location of Yamazato laboratory in Google Map."
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}
            </div>
            <PageTopEn />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageTemplateEN;

export const pageQuery = graphql`
  query IndexPageTemplateEN {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page-en" }, lang: { eq: "en" } }) {
      id
      frontmatter {
        templateKey
        lang
        title
        heading
        description
      }
      html
    }
  }
`;
