import './index.scss'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Component } from '../types'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiHomepage: {
    description: string
    body: Component[]
  }
}

const IndexPage: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiHomepage: { description, body },
  },
}) => (
  <Layout>
    <SEO title="" description={description} />
    <Body components={body} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    strapiHomepage {
      description
      body {
        strapi_component
        layout {
          layout
        }
        content
        is_large
        caption
        url
        source {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 3840
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`
