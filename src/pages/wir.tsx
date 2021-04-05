import { Component, Page } from '../types'
import { graphql, useStaticQuery } from 'gatsby'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const Wir = () => {
  const {
    strapiTeam: { description, body },
  } = useStaticQuery<{
    strapiTeam: {
      description: string
      body: Component[]
    }
  }>(graphql`
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
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout page={Page.Wir}>
      <SEO title="Wir" description={description} />
      <Body components={body} />
    </Layout>
  )
}

export default Wir
