import * as React from "react";
import PageTop from "../components/PageTop";
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby";
import SeO from "../components/seo";
import Layout from "../components/LayoutEN";
import BlogRoll from "../components/BlogRoll";
import { StaticImage } from "gatsby-plugin-image";

// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";


const IndexPageTemplateEN = ({ data }) => (
  <Layout>
    <SeO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description} />
    <div className="hero-body">
      <div className="container has-text-centered">
        <StaticImage src="../img/NUYL-logo.svg" width="150" alt="NUYL" placeholder="blurred" />
        <h2 className="subtitle">Nagoya University</h2>
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
                      <h3 className="heading post-category">Research</h3>
                      <h1 className="title post-title">Blog Posts Template</h1>
                      <p className="post-excerpt">
                        This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!
                      </p>
                      <br />
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-5 featured-content va">
                    <div>
                      <h3 className="heading post-category">Research</h3>
                      <h1 className="title post-title">Blog Posts Template</h1>
                      <p className="post-excerpt">
                        This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!
                      </p>
                      <br />
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="column is-7 post-img ">
                    <StaticImage src="../img/ITS-VLC.png" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-7 post-img ">
                    <StaticImage src="../img/ITS-VLC.png" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                  <div className="column is-5 featured-content va">
                    <div>
                      <h3 className="heading post-category">Research</h3>
                      <h1 className="title post-title">Blog Posts Template</h1>
                      <p className="post-excerpt">
                        This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!
                      </p>
                      <br />
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
            <div className="columns is-multiline">
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/ac1.jpg" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/Rotary-LED.png" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
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
            <PageTop />
            <hr />
            <h2 className="title post-title"><a id="team">Our Team</a></h2>
            <div className="columns is-multiline">
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Staff</h3>
                    <h1 className="title post-title"><i class="fas fa-user-tie"></i></h1>
                    <p className="post-excerpt">
                      Professor <br />
                      &nbsp; &nbsp;<Link to="/team/Takaya-Yamazato/">Takaya YAMAZATO</Link><br />
                      <br />
                      Secretaries <br />
                      &nbsp; &nbsp;Aiko ISHIKAWA<br />
                      &nbsp; &nbsp;Eriko SHIRAISHI
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Ph.D. Candidates</h3>
                    <h1 className="title post-title"><i class="fas fa-user-graduate"></i></h1>
                    <p className="post-excerpt">
                      D3 <br />
                      &nbsp; &nbsp;Asuka TSUJII<br />
                      <br />
                      D1  <br />
                      &nbsp; &nbsp;Ruiyi HUANG<br />
                      &nbsp; &nbsp;Zhengqiang TANG
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Master students</h3>
                    <h1 className="title post-title"><i class="fas fa-user-graduate"></i></h1>
                    <p className="post-excerpt">
                      M2 <br />
                      &nbsp; &nbsp;Syunki KAMIYA<br />
                      &nbsp; &nbsp;Masamichi HATTORI<br />
                      &nbsp; &nbsp;Kento NAKAMURA<br />
                      <br />
                      M1 <br />
                      &nbsp; &nbsp;Daiki EHARA<br />
                      &nbsp; &nbsp;Fumiya OJIKA<br />
                      &nbsp; &nbsp;Jinxing ZHENG
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Undergraduate students</h3>
                    <h1 className="title post-title"><i class="fas fa-user-friends"></i></h1>
                    <p className="post-excerpt">
                      B4 <br />
                      &nbsp; &nbsp;Arata ISOZAKI<br />
                      &nbsp; &nbsp;Ayumu OTSUKA<br />
                      &nbsp; &nbsp;Kota FURUKAWA
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
            <div className="column post is-12">

              <h2 className="title post-title"><a id="contact">Contact:</a></h2>
              
              <p className="post-excerpt">YAMAZATO Laboratory,<br />
              Department of Information and Communication Engineering, <br />
              School of Engineering, Nagoya University</p>
              <p className="post-excerpt">
                <i class="fas fa-envelope"></i>&nbsp; &nbsp;Furo-cho, Chikusa-ku, Nagoya 464-8063 JAPAN<br />
                <i class="fas fa-phone-square-alt"></i>&nbsp; &nbsp;Laboratory: +81-52-789-3173<br />
                <i class="fas fa-phone-square"></i>&nbsp; &nbsp;Secretary: +81-52-789-2743<br />
              </p>
              <br />

              <h3 className="title post-title"><a id="access">Access:</a></h3>
              <p className="post-excerpt">YAMAZATO Laboratory is located at 5th Floor of the North IB Building.<br />
              See also our <a href="https://en.nagoya-u.ac.jp/upload_images/20210129_map_en.pdf">campus map, C3-1</a> , for the location of the North IB Building.</p>
              <br />
              <h4 className="subtitle post-subtitle">
                <i class="fas fa-subway"></i> From Nagoya Station:
              </h4>
              <p className="post-excerpt">Take the Subway Higashiyama Line to Motoyama Sta. (15 minutes), then transfer to the Subway Meijo Line to Nagoya Daigaku Sta. (Higashiyama Campus is just off the subway exit.).</p>
              <br />
              <h4 className="subtitle post-subtitle">
                <i class="fas fa-subway"></i> From Centrair (Central Japan International Airport):{" "}
              </h4>
              <p className="post-excerpt">Take the Meitetsu Line to Kanayama Sta. (30 min.), then transfer to the Subway Meijyo Line to Nagoya Daigaku Sta. (21 min.).</p>
              <br />
              <p className="post-excerpt">  
                See also <a href="http://en.nagoya-u.ac.jp/access/index.html">here</a>.
              </p>
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.067613051525!2d136.963807252052!3d35.154934480223524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037abb489f342d%3A0x77c72171e4e956e8!2z5ZCN5Y-k5bGL5aSn5a2m5bel5a2m6YOo44O75aSn5a2m6Zmi5bel5a2m56CU56m256eR!5e0!3m2!1sja!2sjp!4v1634217089125!5m2!1sja!2sjp&amp;language=en"
                width="600"
                height="450"
                // style="border:0;"
                title="Google Map"
                allowfullscreen=""
                loading="lazy"
              ></iframe>

          </div>
          <PageTop />
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
        subtitle
        heading
        description
      }
      html
    }
  }
`;
