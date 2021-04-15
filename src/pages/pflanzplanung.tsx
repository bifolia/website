import { Component, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiPflanzplanung: {
    description: string
    body: Component[]
  }
}

const Pflanzplanung: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiPflanzplanung: { description, body },
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
      description
      body {
        strapi_component
        content
        is_large
        caption
        url
        layout {
          layout
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
