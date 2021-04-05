import './projekt.scss'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { PageProps } from 'gatsby'
import { Project } from '../types'
import { SEO } from '../components/SEO'

type Context = {
  project: Project
}

const Projekt: FunctionComponent<PageProps<unknown, Context>> = ({
  pageContext: {
    project: { description, name, body },
  },
}) => (
  <Layout className="Projekt">
    <SEO title={name} description={description} />
    <h1 className="Projekt__name">{name}</h1>
    <Body components={body} />
  </Layout>
)

export default Projekt
