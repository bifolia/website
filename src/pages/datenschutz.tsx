import { Attributes, Component, ComponentKind, Position } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiDatenschutz: Attributes<{
    description: string
    content: string
  }>
}

const Datenschutz: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiDatenschutz: { data: { attributes: { description, content } } },
  },
}) => {
  const body: Component[] = [
    {
      strapi_component: ComponentKind.Text,
      content,
      is_large: false,
      layout: { position: Position.SemiLeft, len: 2 },
      marginless: false,
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

export const query = graphql`
  {
    strapiDatenschutz {
      data {
        attributes {
          description
          content
        }
      }
    }
  }
`
