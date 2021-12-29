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
  allStrapiProjects: AllResult<ProjectPeek>
}

const Projekte: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiProjekte: { data: { attributes: { description } } },
    allStrapiProjects,
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title="Projekte" description={description} />
    <div className="Projekte__wrapper">
      {allStrapiProjects.edges[0].node.data.map(({ attributes }, i) => (
        <ProjectPeekComponent project={attributes} key={i} />
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
    allStrapiProjects(sort: { fields: data___attributes___year, order: DESC }) {
      edges {
        node {
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
  }
`
