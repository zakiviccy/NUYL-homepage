import * as React from "react";
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby";
import SeO from "../components/seo";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import { StaticImage } from "gatsby-plugin-image";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description} />
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('/img/home-jumbotron.jpg')`,
        // backgroundImage: {data.markdownRemark.image},
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0#002c76",
          backgroundColor: "#002c76",
          color: "white",
          padding: "1rem",
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h1>
    </div>

    <section className="blog-posts">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-7 post-img ">{/* <img src="https://cdn.emk.dev/templates/featured-image.png" alt=""> */}</div>
                  <div className="column is-5 featured-content va">
                    <div>
                      <h3 className="heading post-category">Category Name</h3>
                      <h1 className="title post-title">Blog Posts Template</h1>
                      <p className="post-excerpt">
                        This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!
                      </p>
                      <br />
                      <a href="#" className="button is-primary">
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
                  <div className="column is-12 post-img">{/* <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"> */}</div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button is-primary">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">{/* <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"> */}</div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button is-primary">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className="column post is-4">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">{/* <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"> */}</div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button is-primary">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className="column post is-4">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">{/* <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"> */}</div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button is-primary">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className="column post is-4">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">{/* <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"> */}</div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Category Name</h3>
                    <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                    <br />
                    <a href="#" className="button is-primary">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blog-posts">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <br />
            <div className="tile box">
              <blockquote>
                <div className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
              </blockquote>
            </div>

            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-7">
                    <article className="columns is-multiline">
                      <div className="column is-12 post-img">
                        <a href="https://www.thers.ac.jp/research/academic-central/" target="_blank" rel="noopener noreferrer">
                          <StaticImage src="../img/ac1.jpg" alt="ITS-VLC" placeholder="blurred" />
                        </a>
                      </div>
                      <div className="column is-12 featured-content">
                        <h3 className="heading post-category">Research</h3>
                        <h1 className="title post-title">可視光通信</h1>
                        <div className="content px-2">可視光通信とはLEDを人の目には見えないほど高速に点滅することでデータ伝送を行う通信方式です． 私たちは，受信機にカメラを用いるイメージセンサ通信について研究しています．</div>
                        <br />
                        <Link className="btn" to="/">
                          Read more
                        </Link>
                      </div>
                    </article>
                  </div>
                  <div className="column post is-6">
                    <article className="columns is-multiline">
                      <div className="column is-12 post-img">
                        <a href="https://vimeo.com/631905450" target="_blank" rel="noopener noreferrer">
                          <StaticImage src="../img/ac2.jpg" alt="インストラクショナル・デザインチーム" placeholder="blurred" />
                        </a>
                      </div>
                      <div className="column is-12 featured-content ">
                        <h3 className="heading post-category">Research</h3>
                        <h1 className="title post-title">確率共鳴現象の通信への応用</h1>
                        <div className="content px-2">確率共鳴とは、システムへの入力雑音の増大と共にそのシステムの応答が向上する現象のことです．私たちは，確率共鳴現象の通信への応用について研究しています．</div>
                        <br />
                        <Link className="btn" to="/research/Instructional-Design-Team/">
                          Read more
                        </Link>
                      </div>
                    </article>
                  </div>
                </article>
              </div>
            </div>
            <hr />
            <div className="columns is-multiline">
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    {/* <StaticImage src="../img/bo01_on.png" alt="⾼⼤接続連携部⾨" placeholder="blurred" /> */}
                    <iframe src="https://player.vimeo.com/video/631905450" width="500" height="450" allow="autoplay; fullscreen"></iframe>
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">高校・大学接続関連</h3>
                    <h1 className="title post-title">⾼⼤接続連携部⾨</h1>
                    <div className="content px-2">
                      <ul>
                        <li>高等学校までの学習指導要領の変更及び入試制度改革の動向を踏まえた、両大学における入学者選抜方法の広報の支援</li>
                        <li>高等学校教育の改革に関する情報を収集し、高大接続の観点から、大学教育において適切に対応できるよう、関係部門や両大学へ情報を提供</li>
                        <li>機構における高大接続・連携活動についての企画・立案</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/research/High-School-University-Articulation/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/bo02_on.png" alt="高度リベラル・アーツ教育共創部門" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">教養・共通教育</h3>
                    <h1 className="title post-title">高度リベラル・アーツ教育共創部門</h1>
                    <div className="content px-2">
                      <ul>
                        <li>機構としての学部初年次生から大学院生までのシームレスなリベラル・アーツ教育、英語等のコモン・ベーシックス教育の推進</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/research/Liberal-Arts/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/bo03_on.png" alt="シームレス数理・データ科学教育共創部門" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">次世代教育</h3>
                    <h1 className="title post-title">シームレス数理・データ科学教育共創部門</h1>
                    <div className="content">
                      <ul>
                        <li>機構における教養教育から学部専門教育、大学院教育までシームレスな数理・データ科学教育の推進</li>
                        <li>両大学が連係した大学院・社会人を対象としたデータサイエンティスト育成事業の実施</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/research/Data-Science/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/ac6.jpg" alt="トランスディシプリナリー博士課程教育推進部門" placeholder="blurred" />
                  </div>

                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">高度基盤教育</h3>
                    <h1 className="title post-title">トランスディシプリナリー博士課程教育推進部門</h1>
                    <div className="content">
                      <ul>
                        <li>大学院生に対し、グローバルにその能力を発揮させるために、自分の専門領域の深い学識と卓越した能力に加えて、関係者との協働ネットワークを創造発展させる能力の育成</li>
                        <li>プロフェッショナル・リテラシーの岐阜大学への展開</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/research/Doctoral-Education/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/ac7.jpg" alt="QTA・GSI トレーニングセンター" placeholder="blurred" />
                  </div>

                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">次世代リーダー養成</h3>
                    <h1 className="title post-title">QTA・GSI トレーニングセンター</h1>
                    <div className="content">
                      <ul>
                        <li>大学院生が QTA、GSI として教育に参画するための体制の構築、育成研修の実施</li>
                      </ul>
                      <p>
                        QTA：Qualified Teaching Assistantの略称。
                        <br />
                        GSI：Graduate Student Instructorの略称。
                      </p>
                    </div>
                    <br />
                    <Link className="btn" to="/research/QTA/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../img/ac8.jpg" alt="人生構想力教育共創部門" placeholder="blurred" />
                  </div>

                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">学生支援、生涯教育</h3>
                    <h1 className="title post-title">人生構想力教育共創部門</h1>
                    <div className="content">
                      <ul>
                        <li>大学・地域・社会・産業界を構成する人材すべての生涯ウェルビーイングを育てる新たな教育の実施。</li>
                        <ul>
                          <li>学生の社会的・職業的自立に必要な基盤となる能力や態度を育てるキャリア教育の企画</li>
                          <li>大学のノウハウを活用したリカレント教育等の実施</li>
                        </ul>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/research/Life-Concept/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>

              <div className="column is-12">
                <hr />
                <h3 className="has-text-weight-semibold is-size-2">News and Updates</h3>
                <br />
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/news">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageTemplate;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" }, lang: { eq: "ja" } }) {
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
