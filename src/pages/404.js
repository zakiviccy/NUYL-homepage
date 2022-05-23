import * as React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <blockquote>
        <h1 className="has-text-centered">NOT FOUND</h1>
        <p className="has-text-centered">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </blockquote>
    </div>
  </Layout>
)

export default NotFoundPage
