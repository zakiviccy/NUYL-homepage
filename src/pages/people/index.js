import React from "react";
// import { graphql } from "gatsby"
// import { navigate } from 'gatsby-link'
import Layout from "../../components/Layout";

const ContactUsPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">Out team</h2>
              <h3 className="is-size-4 has-text-weight-bold">Professor:</h3>
              <dl>
                <dd>Takaya YAMAZATO</dd>
                <dd>
                  <a href="https://profs.provost.nagoya-u.ac.jp/html/100001840_en.html" rel="nofollow">
                    [Faculty Profile
                  </a>
                  ,
                  <a href="http://yamazato.ilas.nagoya-u.ac.jp" rel="nofollow">
                    ILAS
                  </a>
                  ,
                  <a href="https://scholar.google.co.jp/citations?user=huzxGUAAAAAJ&amp;hl=ja&amp;oi=ao" rel="nofollow">
                    Google Scholar
                  </a>
                  ]
                </dd>
              </dl>
              <br />
              <h3 className="is-size-4 has-text-weight-bold">Secretary:</h3>
              <dl>
                <dd>Aiko ISHIKAWA, Eriko SHIRAISHI</dd>
              </dl>
              <h3 className="is-size-4 has-text-weight-bold">Ph.D Candidates</h3>
              <dl>
                <dt>D2:</dt>
                <dd>Asuka TSUJII</dd>
              </dl>
              <dl>
                <dt>D1:</dt>
                <dd>Ruiyi HUANG, Zhengqiang TANG</dd>
              </dl>
              <h3 className="is-size-4 has-text-weight-bold">Graduate Students </h3>
              <dl>
                <dt>M1:</dt>
                <dd>Syunki KAMIYA, Masamichi HATTORI, Kento NAKAMURA</dd>
              </dl>
              <h3 className="is-size-4 has-text-weight-bold">Undergraduate Students </h3>
              <dl>
                <dt>B4:</dt>
                <dd>Fumiya OJIKA, Jinxing ZHENG</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactUsPage;
