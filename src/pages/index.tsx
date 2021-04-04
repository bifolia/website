import './index.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { Body } from '../components/Body'
import { Component } from '../types'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const IndexPage = () => {
  const {
    strapiHomepage: { description, body },
  } = useStaticQuery<{
    strapiHomepage: {
      description: string
      body: Component[]
    }
  }>(graphql`
    {
      strapiHomepage {
        description
        body {
          strapi_component
          title
          content
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

export default IndexPage
