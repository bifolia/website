import './404.scss'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="" description="" />
    <div className="NotFound__wrapper">
      <h1>404</h1>
      <p>Diese Seite existiert leider nicht.</p>
    </div>
  </Layout>
)

export default NotFoundPage
