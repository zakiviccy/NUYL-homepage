import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SeO from "../components/seo";

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PubllicationsQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "publications" } }) {
        frontmatter {
          title
          description
          date(formatString: "YYYY年MM月DD日 ")
          templateKey
          lang
          journal
          conference
          oral
        }
      }
      allResearchCsv {
        nodes {
          field1
          field2
          field3
          field4
          field5
          id
        }
      }
    }
  `);

  const post = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SeO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section content">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{post.title}</h2>
                <p>
                  {post.date}現在，{post.journal + post.conference + post.oral} の業績があります.
                </p>
                <div className="columns">
                  <div className="column">
                    <div className="gold-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.journal}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">論文</div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="silver-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.conference}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">国際会議</div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="bronze-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.oral}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">口頭発表</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <ul>
                  {data.allResearchCsv.nodes.map((node) => (
                    <li key={node.id}>
                      <h5>{node.field2}</h5>
                      <ul>
                        <li>{node.field1}</li>
                        <li>{node.field3}</li>
                        <li>{node.field5}</li>
                        <li className="nodot">{node.field6}</li>
                        <li className="nodot">{node.field4}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
