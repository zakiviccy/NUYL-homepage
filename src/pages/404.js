import React from "react";
// import { graphql } from "gatsby"
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="is-size-2 has-text-weight-bold">NOT FOUND</h2>
              <h5>You just hit a route that doesn&#39;t exist... the sadness.</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
