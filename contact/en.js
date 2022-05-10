import React from "react";
// import { graphql } from "gatsby"
// import { navigate } from 'gatsby-link'
import Layout from "../src/components/Layout";

const ContactUsPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">Contact / Access</h2>
              <h3 className="is-size-4 has-text-weight-bold">Contact:</h3>
              <p>Takaya YAMAZATO (yamazato AT nagoya-u DOT jp) </p>

              <p>Institute of Liberal Arts and Sciences, Nagoya University</p>
              <p>
                <i className="fas fa-envelope"></i>&nbsp; &nbsp;Furo-cho, Chikusa-ku, Nagoya 464-8063 JAPAN
              </p>
              <br />

              <h3 className="is-size-4 has-text-weight-bold ">Access:</h3>

              <h4 className="is-size-5 has-text-weight-bold">
                <i className="fas fa-subway"></i> From Nagoya Station:
              </h4>
              <p>Take the Subway Higashiyama Line to Motoyama Sta. (15 minutes), then transfer to the Subway Meijo Line to Nagoya Daigaku Sta. (Higashiyama Campus is just off the subway exit.).</p>
              <br />
              <h4 className="is-size-5 has-text-weight-bold">
                <i className="fas fa-subway"></i> From Centrair (Central Japan International Airport):{" "}
              </h4>
              <p>Take the Meitetsu Line to Kanayama Sta. (30 min.), then transfer to the Subway Meijyo Line to Nagoya Daigaku Sta. (21 min.).</p>
              <br />
              <p>
                See also <a href="http://en.nagoya-u.ac.jp/access/index.html">here</a>.
              </p>
              <br />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.329824562581!2d136.96212693731763!3d35.15458571374002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037aa2856e99cd%3A0x40facccda34d6dd6!2z5ZCN5Y-k5bGL5aSn5a2mIOWbvemam-iogOiqnuaWh-WMlueglOeptuenkQ!5e0!3m2!1sja!2sjp!4v1597915686142!5m2!1sja!2sjp&amp;language=en"
                width="600"
                height="450"
                frameborder="0"
                // style="border:0;"
                allowFullScreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.067613051525!2d136.963807252052!3d35.154934480223524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037abb489f342d%3A0x77c72171e4e956e8!2z5ZCN5Y-k5bGL5aSn5a2m5bel5a2m6YOo44O75aSn5a2m6Zmi5bel5a2m56CU56m256eR!5e0!3m2!1sja!2sjp!4v1634217089125!5m2!1sja!2sjp&amp;language=en"
                width="600"
                height="450"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactUsPage;
