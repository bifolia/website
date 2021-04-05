import { Component, Page } from '../types'
import { graphql, useStaticQuery } from 'gatsby'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const Raumgestaltung = () => {
  const {
    strapiRaumgestaltung: { description, body },
  } = useStaticQuery<{
    strapiRaumgestaltung: {
      description: string
      body: Component[]
    }
  }>(graphql`
    {
      strapiRaumgestaltung {
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
    <Layout page={Page.Raumgestaltung}>
      <SEO title="Raumgestaltung" description={description} />
      <Body components={body} />
    </Layout>
  )
}

export default Raumgestaltung
