import * as React from 'react'
import PageTop from '../components/PageTop'
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SeO from '../components/seo'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { StaticImage } from 'gatsby-plugin-image'
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
    />
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('/img/home-jumbotron.jpg')`,
        // backgroundImage: {data.markdownRemark.image},
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0#002c76",
          backgroundColor: "#002c76",
          color: "white",
          padding: "1rem",
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h2>
    </div> */}
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <StaticImage
            src="../img/logo-j.png"
            width="300"
            alt="Yamazato Laboratory"
            placeholder="blurred"
          />
          {/* <h2 className="subtitle">名古屋大学山里研究室</h2> */}
        </div>
      </div>
    </div>
    <section className="blog-posts">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <br />
            <div className="tile box">
              <blockquote>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
              </blockquote>
            </div>

            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-7">
                    <div className="column is-12 post-img">
                      <StaticImage
                        src="../img/ITS-VLC.png"
                        alt="ITS-VLC"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                  <div className="column post is-5">
                    <div className="column is-12 featured-content">
                      <h3 className="heading post-category">Research</h3>
                      <h1 className="is-size-3">可視光通信</h1>
                      <div className="content px-2">
                        可視光通信とはLEDを人の目には見えないほど高速に点滅することでデータ伝送を行う通信方式です．
                        私たちは，受信機にカメラを用いるイメージセンサ通信について研究しています．
                      </div>
                      <Link
                        className="button"
                        to="/research/Visible-light-communications/"
                      >
                        Read more
                      </Link>
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
                  <div className="column post is-5">
                    <div className="column is-12 featured-content">
                      <h3 className="heading post-category">Research</h3>
                      <h1 className="is-size-3">確率共鳴現象の通信への応用</h1>
                      <div className="content px-2">
                        確率共鳴とは、システムへの入力雑音の増大と共にそのシステムの応答が向上する現象のことです．私たちは，確率共鳴現象の通信への応用について研究しています．
                      </div>
                      <Link
                        className="button"
                        to="/research/Stochastic-resonance/"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="column post is-7">
                    <div className="column is-12 post-img">
                      <StaticImage
                        src="../img/SR.png"
                        alt="Stochastic Resonance"
                        placeholder="blurred"
                      />
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
                  <div className="column post is-7">
                    <div className="column is-12 post-img">
                    <StaticImage
                      src="../img/Global_Open_Educational_Resources_Logo.svg"
                      alt="Open Educational Resources Logo"
                      placeholder="blurred"
                    />
                    </div>
                  </div>
                  <div className="column post is-5">
                    <div className="column is-12 featured-content">
                      <h3 className="heading post-category">Research</h3>
                      <h1 className="is-size-3">オープン教材</h1>
                      <div className="content px-2">
                      オープン教材とは，教育・学習目的でインターネット上に無償で公開されたテキスト，画像，ビデオなどのデジタル・コンテンツ（教材）を指し，誰でも自由に利用できるだけで無く，改変や再利用の二次利用もできる教材のことを言います．
                      私たちは、オープン教材について研究しています。とりわけ、名古屋大学において教材の無償公開を行っているサイト「<a href="https://ocw.nagoya-u.jp/" title="Nagoya University OpenCourseWare (NUOCW)" target="_blank" rel="noopener noreferrer" >名大の授業</a>」の管理・運用に係わっています。
                      </div>
                      <Link
                        className="button"
                        to="/research/OER/"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
            <h2 id="news">ニュース</h2>
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
            <h2 id="team">
              <Link to="/team/">チーム</Link>
            </h2>
            <div className="columns is-multiline">
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">Staff</h3>
                    <h1>
                      <i class="fas fa-user-tie"></i>
                    </h1>
                    <p className="is-size-5">
                      教授 <br />
                      &nbsp; &nbsp;
                      <Link to="/team/Takaya-Yamazato/">山里敬也</Link>
                      <br />
                      <br />
                      秘書 <br />
                      &nbsp; &nbsp;石川 愛子
                      <br />
                      &nbsp; &nbsp;白石 栄里子
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">博士後期課程</h3>
                    <h1>
                      <i class="fas fa-user-graduate"></i>
                    </h1>
                    <p className="is-size-5">
                      D3 <br />
                      &nbsp; &nbsp;辻井 明日香
                      <br />
                      <br />
                      D2 <br />
                      &nbsp; &nbsp;黄 瑞怡
                      <br />
                      &nbsp; &nbsp;唐 正強
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">博士前期課程</h3>
                    <h1>
                      <i class="fas fa-user-graduate"></i>
                    </h1>
                    <p className="is-size-5">
                      M2 <br />
                      &nbsp; &nbsp;神谷 峻輝
                      <br />
                      &nbsp; &nbsp;服部 将道
                      <br />
                      &nbsp; &nbsp;中村 建翔
                      <br />
                      <br />
                      M1 <br />
                      &nbsp; &nbsp;江原 大貴
                      <br />
                      &nbsp; &nbsp;小鹿 文也
                      <br />
                      &nbsp; &nbsp;鄭 錦星
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">学部</h3>
                    <h1>
                      <i class="fas fa-user-friends"></i>
                    </h1>
                    <p className="is-size-5">
                      B4 <br />
                      &nbsp; &nbsp;磯崎 新
                      <br />
                      &nbsp; &nbsp;大塚 鮎陸
                      <br />
                      &nbsp; &nbsp;古川 晃大
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <PageTop />
            <hr />
            <div className="column post is-12">
              <h2 id="contact">お問い合わせ</h2>
              <p className="is-size-5">
                名古屋大学大学院工学研究科 情報・通信工学専攻 山里研究室
                <br />
              </p>
              <p className="is-size-5">
                <i class="fas fa-envelope"></i>&nbsp; &nbsp;〒464-8603
                名古屋市千種区不老町1
                <br />
                研究室（学生）：IB電子情報館5F&nbsp; &nbsp;
                <i class="fas fa-phone-square-alt"></i>&nbsp; &nbsp;052-789-3173
                <br />
                秘書：IB電子情報館9F片山研&nbsp; &nbsp;
                <i class="fas fa-phone-square"></i>&nbsp; &nbsp;052-789-2743
                <br />
              </p>
              <br />
              <h2 id="access">アクセス</h2>
              <p className="is-size-5">
                山里研究室は IB電子情報館 5Fにあります．
                <br />
                <a href="https://www.nagoya-u.ac.jp/access-map/index.html">
                  キャンパスマップ
                </a>{' '}
                のC3-1になります．
              </p>
              <br />
              <h4 className="is-size-4">
                <i class="fas fa-subway"></i> 名古屋駅から
              </h4>
              <p className="is-size-5">
                名古屋駅より地下鉄東山線(藤が丘方面行き)乗車，本山駅下車
                <br />
                地下鉄名城線(右回り,八事方面行き)乗り換え,名古屋大学駅下車
              </p>
              <br />
              <h4 className="is-size-4">
                <i class="fas fa-subway"></i>&nbsp;
                <a href="http://www.nagoya-u.ac.jp/access/index.html">
                  こちらも
                </a>{' '}
                ご参照ください．
              </h4>

              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.067613051525!2d136.963807252052!3d35.154934480223524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037abb489f342d%3A0x77c72171e4e956e8!2z5ZCN5Y-k5bGL5aSn5a2m5bel5a2m6YOo44O75aSn5a2m6Zmi5bel5a2m56CU56m256eR!5e0!3m2!1sja!2sjp!4v1634217089125!5m2!1sja!2sjp&amp;language=ja"
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
)

export default IndexPageTemplate

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" }, lang: { eq: "ja" } }
    ) {
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
`
