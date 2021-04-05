import './projekt.scss'
import { Page, Project } from '../types'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { PageProps } from 'gatsby'
import { SEO } from '../components/SEO'

type Context = {
  project: Project
}

const Projekt: FunctionComponent<PageProps<unknown, Context>> = ({
  pageContext: {
    project: { description, name, body },
  },
}) => (
  <Layout page={Page.Projekte}>
    <SEO title={name} description={description} />
    <h1 className="Projekt__name">{name}</h1>
    <Body components={body} />
  </Layout>
)

export default Projekt
