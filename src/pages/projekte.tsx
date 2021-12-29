import './projekte.scss'
import { Attributes, Entries, Page, ProjectPeek } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ProjectPeekComponent } from '../components/ProjectPeekComponent'
import { SEO } from '../components/SEO'

type Data = {
  strapiProjekte: Attributes<{
    description: string
  }>
  allStrapiProject: Entries<Attributes<ProjectPeek>>
}

const Projekte: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiProjekte: { data: { attributes: { description } } },
    allStrapiProject: entries,
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title="Projekte" description={description} />
    <div className="Projekte__wrapper">
      {entries.edges.map(({ node: { data: { attributes } } }, i) => (
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
    allStrapiProjects(sort: { fields: year, order: DESC }) {
      edges {
        node {
          data {
            attributes {
              name
              cover {
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
              place
              year
            }
          }
        }
      }
    }
  }
`
