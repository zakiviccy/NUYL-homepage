import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SeO from '../../components/seo'

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PubllicationsQuery {
        site {
            siteMetadata {
                description
                title
                }
            }
        allResearchCsv {
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
        }
  `)

  return (
    <Layout>
      <SeO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <section className="section section--gradient">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  研究業績
                </h2>
                <ul>
                  {data.allResearchCsv.nodes.map((node) => (
                    <li key={node.id}>
                      <h5>{node.field2}</h5>
                      <ul>
                        <li>{node.field1}</li>
                        <li>{node.field3}</li>
                        <li>{node.field5}</li>
                        <li>{node.field4}</li>
                        <li>{node.field6}</li>
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