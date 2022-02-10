import './philosophie.scss'
import { Component, Page, Result } from '../types'
import { Link, PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiRaumgestaltung: Result<{
    description: string
    body: Component[]
  }>
  strapiPflanzplanung: Result<{
    description: string
    body: Component[]
  }>
  strapiGartenentwicklung: Result<{
    description: string
    body: Component[]
  }>
}

const Philosophie: FunctionComponent<PageProps<Data>> = ({
  data: { strapiRaumgestaltung, strapiPflanzplanung, strapiGartenentwicklung },
}) => (
  <Layout page={Page.Raumgestaltung} className="Philosophie">
    <SEO
      title="Philosophie"
      description={strapiRaumgestaltung.data.attributes.description}
    />

    <Body components={strapiRaumgestaltung.data.attributes.body} />
    <Body components={strapiPflanzplanung.data.attributes.body} />
    <Body components={strapiGartenentwicklung.data.attributes.body} />

    <div className="Philosophie__Gartengedanken">
      <p>
        Lesen Sie mehr in unseren <Link to="/journal">Gartengedanken</Link>.
      </p>
    </div>
  </Layout>
)

export default Philosophie

export const query = graphql`
  {
    strapiRaumgestaltung {
      data {
        attributes {
          description
          body {
            strapi_component
            content
            is_large
            marginless
            caption
            url
            layout {
              position
              len
            }
            source {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1920
                        quality: 100
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    strapiPflanzplanung {
      data {
        attributes {
          description
          body {
            strapi_component
            content
            is_large
            marginless
            caption
            url
            layout {
              position
              len
            }
            source {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1920
                        quality: 100
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    strapiGartenentwicklung {
      data {
        attributes {
          description
          body {
            strapi_component
            content
            is_large
            marginless
            caption
            url
            layout {
              position
              len
            }
            source {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1920
                        quality: 100
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
