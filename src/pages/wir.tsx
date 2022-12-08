import { Component, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiWir: {
    description: string
    body: Component[]
  }
}

const Wir: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiWir: { description, body },
  },
}) => (
  <Layout page={Page.Wir}>
    <SEO title="Wir" description={description} />
    <Body components={body} />
  </Layout>
)

export default Wir

export const query = graphql`
  {
    strapiWir {
      description
      body {
        ... on STRAPI__COMPONENT_BASE_IMAGE {
          strapi_component
          layout {
            position
            len
          }
          caption
          # url
          source {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  quality: 100
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
        ... on STRAPI__COMPONENT_BASE_TEXT {
          strapi_component
          layout {
            position
            len
          }
          content {
            data {
              content
            }
          }
          is_large
          marginless
        }
      }
    }
  }
`
