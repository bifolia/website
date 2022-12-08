import './projekt.scss'
import { Page, Project } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  allStrapiProject: { nodes: Project[] }
}

type Context = {
  id: string
}

const Projekt: FunctionComponent<PageProps<Data, Context>> = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
  pageContext: { id },
}) => {
  console.log(projects, id)
  const { body, description, name } = projects.find((project) => id === project.id)!

  return (
    <Layout page={Page.Projekte}>
      <SEO title={name} description={description} />
      <h1 className="Projekt__name">{name}</h1>
      <Body components={body} />
    </Layout>
  )
}

export default Projekt

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        id
        name
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
          ... on STRAPI__COMPONENT_BASE_TABLE {
            strapi_component
            layout {
              position
              len
            }
            entries {
              name
              values {
                value
              }
            }
          }
        }
      }
    }
  }
`
