import { Layout } from '../components/Layout'
import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../components/SEO'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
  <Layout>
    <SEO title="" description="" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </p>
  </Layout>
)

export default IndexPage
