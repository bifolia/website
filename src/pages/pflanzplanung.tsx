import { Component, Page, Result } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiPflanzplanung: Result<{
    description: string
    body: Component[]
  }>
}

const Pflanzplanung: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiPflanzplanung: { data: { attributes: { description, body } } },
  },
}) => (
  <Layout page={Page.Pflanzplanung}>
    <SEO title="Pflanzplanung" description={description} />
    <Body components={body} />
  </Layout>
)

export default Pflanzplanung

export const query = graphql`
  {
    strapiPflanzplanung {
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
