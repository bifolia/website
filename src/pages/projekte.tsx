import './projekte.scss'
import { Entries, ProjectPeek } from '../types'
import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from '../components/Layout'
import { ProjectPeekComponent } from '../components/ProjectPeekComponent'
import React from 'react'
import { SEO } from '../components/SEO'

const Projekte = () => {
  const {
    strapiProjekte: { description },
    allStrapiProject: entries,
  } = useStaticQuery<{
    strapiProjekte: {
      description: string
    }
    allStrapiProject: Entries<ProjectPeek>
  }>(graphql`
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
  `)

  return (
    <Layout>
      <SEO title="Projekte" description={description} />
      <h1 className="Projekte__title">Projekte</h1>
      <div className="Projekte__wrapper">
        {entries.edges.map(({ node }, i) => (
          <ProjectPeekComponent project={node} key={i} />
        ))}
      </div>
    </Layout>
  )
}

export default Projekte
