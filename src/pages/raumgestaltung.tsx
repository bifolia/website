import { Component, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiRaumgestaltung: {
    description: string
    body: Component[]
  }
}

const Raumgestaltung: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiRaumgestaltung: { description, body },
  },
}) => (
  <Layout page={Page.Raumgestaltung}>
    <SEO title="Raumgestaltung" description={description} />
    <Body components={body} />
  </Layout>
)

export default Raumgestaltung

export const query = graphql`
  {
    strapiRaumgestaltung {
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
                width: 1920
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
