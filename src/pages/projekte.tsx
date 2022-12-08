import './projekte.scss'
import { Page, ProjectPeek } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ProjectPeekComponent } from '../components/ProjectPeekComponent'
import { SEO } from '../components/SEO'

type Data = {
  strapiProjekte: {
    description: string
  }
  allStrapiProject: { nodes: ProjectPeek[] }
}

const Projekte: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiProjekte: { description },
    allStrapiProject: { nodes: projects },
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title="Projekte" description={description} />
    <div className="Projekte__wrapper">
      {projects
        .sort((a, b) => b.year - a.year)
        .map((project, i) => (
          <ProjectPeekComponent project={project} key={i} />
        ))}
    </div>
  </Layout>
)

export default Projekte

export const query = graphql`
  {
    strapiProjekte {
      description
    }
    allStrapiProject {
      nodes {
        name
        place
        year
        cover {
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
