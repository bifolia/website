import { Component, ComponentKind, LayoutKind } from '../types'
import { graphql, useStaticQuery } from 'gatsby'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const Datenschutz = () => {
  const {
    strapiDatenschutz: { description, content },
  } = useStaticQuery<{
    strapiDatenschutz: {
      description: string
      content: string
    }
  }>(graphql`
    {
      strapiDatenschutz {
        description
        content
      }
    }
  `)
  const body: Component[] = [
    {
      strapi_component: ComponentKind.Text,
      content,
      is_large: false,
      layout: { layout: LayoutKind.Center },
    },
  ]

  return (
    <Layout>
      <SEO title="Datenschutz" description={description} />
      <h1 className="Datenschutz__title">Datenschutz</h1>
      <Body components={body} />
    </Layout>
  )
}

export default Datenschutz
