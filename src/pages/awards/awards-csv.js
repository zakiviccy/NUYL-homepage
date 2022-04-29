import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SeO from '../../components/seo'

export default function Award2() {
  const data = useStaticQuery(graphql`
    query AwardQuery2 {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "awards-page" } }) {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        html
      }
      allAwardsCsv {
        nodes {
          id
          field1
          field2
          field3
          field4
        }
      }
    }
  `)

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    // <Layout location={location} title={siteTitle}>
    <Layout>
      <SeO
        // title={post.frontmatter.title}
        title={siteTitle}
        // description={post.frontmatter.description}
      />
      <section className="section section--gradient">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  受賞一覧
                </h2>
                <ul>
                  {data.allAwardsCsv.nodes.map((node) => (
                    <li key={node.id}>
                      <h5>{node.field2}</h5>
                      <ul>
                        <li>{node.field4}</li>
                        <li>{node.field3}</li>
                        <li>{node.field1}</li>
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
  )
}