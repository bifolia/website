import { Component, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiGartenentwicklung: {
    description: string
    body: Component[]
  }
}

const Gartenentwicklung: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiGartenentwicklung: { description, body },
  },
}) => (
  <Layout page={Page.Gartenentwicklung}>
    <SEO title="Gartenentwicklung" description={description} />
    <Body components={body} />
  </Layout>
)

export default Gartenentwicklung

export const query = graphql`
  {
    strapiGartenentwicklung {
      description
      body {
        strapi_component
        content
        is_large
        marginless
        caption
        url
        layout {
          position
          len
        }
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
