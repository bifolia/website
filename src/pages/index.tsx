import './index.scss'
import { Layout } from '../components/Layout'
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
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
