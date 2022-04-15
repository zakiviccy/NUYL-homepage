import * as React from "react";
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
        <StaticImage src="../img/NUYL-logo.svg" width="150" alt="ITS-VLC" placeholder="blurred" />
        <h2 className="subtitle">{data.markdownRemark.frontmatter.title}</h2>
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
                      <h3 className="heading post-category">Category Name</h3>
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
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-5 featured-content va">
                    <div>
                      <h3 className="heading post-category">Category Name</h3>
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
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-7 post-img ">
                    <StaticImage src="../img/ITS-VLC.png" alt="ITS-VLC" placeholder="blurred" />
                  </div>
                  <div className="column is-5 featured-content va">
                    <div>
                      <h3 className="heading post-category">Category Name</h3>
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
            <hr />
            <div className="columns is-multiline">
              <div className="column post is-4">
                <article className="columns is-multiline">
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
              <div className="column post is-4">
                <article className="columns is-multiline">
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
              <div className="column post is-4">
                <article className="columns is-multiline">
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
            <hr />
            <div className="column is-12">
              <hr />
              <h3 className="has-text-weight-semibold is-size-2">News and Updates</h3>
              <br />
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="button" to="/news">
                  Read more
                </Link>
              </div>
            </div>
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
