import './projekt.scss'
import { AllResult, Page, Project } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiProject: AllResult<Project>
}

type Context = {
  id: number
}

const Projekt: FunctionComponent<PageProps<Data, Context>> = ({
  data: {
    strapiProject: { data: projects },
  },
  pageContext: { id },
}) => {
  const {
    attributes: { body, description, name },
  } = projects.find((project) => id === project.id)!

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
    strapiProjects {
      data {
        id
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
