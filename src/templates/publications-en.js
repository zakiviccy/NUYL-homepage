import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/LayoutEN-white";
import SeO from "../components/seo";

export default function PublicationsEn() {
  const data = useStaticQuery(graphql`
    query PubllicationsEnQuery {
      allResearchEnCsv {
        nodes {
          field1
          field2
          field3
          field4
          field5
          field6
          id
        }
      }
      site {
        siteMetadata {
          description
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "publications-en" } }) {
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          templateKey
          lang
          journal
          conference
          oral
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
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{data.markdownRemark.frontmatter.title}</h2>
                <p>
                  As of {post.date}, we published and presented {post.journal + post.conference + post.oral} articles.
                </p>
                <div className="columns">
                  <div className="column">
                    <div className="gold-circle">
                      <p>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.journal}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">Journal Articles</div>
                      </p>
                    </div>
                  </div>
                  <div class="column">
                    <div className="silver-circle">
                      <p>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.conference}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">Peer-Reviewed Conference Papers</div>
                      </p>
                    </div>
                  </div>
                  <div class="column">
                    <div className="bronze-circle">
                      <p>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.oral}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">Oral Presentation</div>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <ul>
                  {data.allResearchEnCsv.nodes.map((node) => (
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
