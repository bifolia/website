import { graphql, useStaticQuery } from 'gatsby'
import { Body } from '../components/Body'
import { Component } from '../types'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const Pflanzplanung = () => {
  const {
    strapiPflanzplanung: { description, body },
  } = useStaticQuery<{
    strapiPflanzplanung: {
      description: string
      body: Component[]
    }
  }>(graphql`
    {
      strapiPflanzplanung {
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
    <Layout>
      <SEO title="" description={description} />
      <Body components={body} />
    </Layout>
  )
}

export default Pflanzplanung
