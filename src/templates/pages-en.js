import * as React from 'react'
import { Link, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
// import { Helmet } from 'react-helmet'
import Layout from '../components/LayoutEN'
import SeO from '../components/seo'

const PagesTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data
  const tags = post.frontmatter.tags

  return (
    <Layout location={location} title={siteTitle}>
      <SeO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="blog-posts">
        <header>
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.frontmatter.description} />
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 post">
              <h3 className="heading has-text-white-ter">
                {post.frontmatter.date}
              </h3>
              <h1 className="title has-text-white-ter">
                {post.frontmatter.title}
              </h1>
              <p className="has-text-white-ter">
                {post.frontmatter.description}
              </p>
              <hr />
              <section
                className="has-text-white-ter"
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4 className="subtitle post-subtitle">Tags</h4>
                  <ul className="taglist">
                    {post.frontmatter.tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PagesTemplate

export const pageQuery = graphql`
  query PagesBySlugEn($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        lang
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
