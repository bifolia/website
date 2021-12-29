import './projekt.scss'
import { Attributes, Page, Project } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiProject: Attributes<Project>
}

type Context = {
  id: string
}

const Projekt: FunctionComponent<PageProps<Data, Context>> = ({
  data: {
    strapiProject: { data: { attributes: { description, name, body } } },
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title={name} description={description} />
    <h1 className="Projekt__name">{name}</h1>
    <Body components={body} />
  </Layout>
)

export default Projekt

export const query = graphql`
  query Projekt($id: String) {
    strapiProjects(id: { eq: $id }) {
      data {
        attributes {
          name
          description
          body {
            strapi_component
            layout {
              position
              len
            }
            content
            is_large
            marginless
            caption
            url
            entries {
              name
              values {
                value
              }
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
    }
  }
`
