import './projekte.scss'
import { Entries, Page, ProjectPeek } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ProjectPeekComponent } from '../components/ProjectPeekComponent'
import { SEO } from '../components/SEO'

type Data = {
  strapiProjekte: {
    description: string
  }
  allStrapiProject: Entries<ProjectPeek>
}

const Projekte: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiProjekte: { description },
    allStrapiProject: entries,
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title="Projekte" description={description} />
    <h1 className="Projekte__title">Projekte</h1>
    <div className="Projekte__wrapper">
      {entries.edges.map(({ node }, i) => (
        <ProjectPeekComponent project={node} key={i} />
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
    allStrapiProject(sort: { fields: year, order: DESC }) {
      edges {
        node {
          name
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 3840
                  quality: 100
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          place
          year(formatString: "YYYY")
        }
      }
    }
  }
`
