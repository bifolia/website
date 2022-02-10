import './projekte.scss'
import { AllResult, Page, ProjectPeek, Result } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ProjectPeekComponent } from '../components/ProjectPeekComponent'
import { SEO } from '../components/SEO'

type Data = {
  strapiProjekte: Result<{
    description: string
  }>
  strapiProjects: AllResult<ProjectPeek>
}

const Projekte: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiProjekte: {
      data: {
        attributes: { description },
      },
    },
    strapiProjects: { data: projects },
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title="Projekte" description={description} />
    <div className="Projekte__wrapper">
      {projects
        .sort((a, b) => b.attributes.year - a.attributes.year)
        .map(({ attributes: project }, i) => (
          <ProjectPeekComponent project={project} key={i} />
        ))}
    </div>
  </Layout>
)

export default Projekte

export const query = graphql`
  {
    strapiProjekte {
      data {
        attributes {
          description
        }
      }
    }
    strapiProjects {
      data {
        attributes {
          name
          place
          year
          cover {
            data {
              attributes {
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
      }
    }
  }
`
