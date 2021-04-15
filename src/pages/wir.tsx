import { Component, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiTeam: {
    description: string
    body: Component[]
  }
}

const Wir: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiTeam: { description, body },
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
    strapiTeam {
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
