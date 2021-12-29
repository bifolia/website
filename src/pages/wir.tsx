import { Component, Page, Result } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiWir: Result<{
    description: string
    body: Component[]
  }>
}

const Wir: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiWir: {
      data: {
        attributes: { description, body },
      },
    },
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
      data {
        attributes {
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
              data {
                attributes {
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
        }
      }
    }
  }
`
