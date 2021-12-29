import './journal.scss'
import { AllResult, JournalEntry, Page, Result } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { JournalEntryComponent } from '../components/JournalEntryComponent'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiJournal: Result<{
    description: string
  }>
  allStrapiTexts: AllResult<JournalEntry>
}

const Journal: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiJournal: { data: { attributes: { description } } },
    allStrapiTexts,
  },
}) => (
  <Layout page={Page.Journal} className="Journal">
    <SEO title="Journal" description={description} />
    {allStrapiTexts.edges[0].node.data.map(({ attributes }, i) => (
      <JournalEntryComponent entry={attributes} key={i} />
    ))}
  </Layout>
)

export default Journal

export const query = graphql`
  {
    strapiJournal {
      data {
        attributes {
          description
        }
      }
    }
    allStrapiTexts(sort: { fields: data___attributes___date, order: DESC }) {
      edges {
        node {
          data {
            attributes {
              title
              date(formatString: "D. MMMM YYYY", locale: "de")
              authors {
                name
              }
              body {
                strapi_component
                layout {
                  position
                  len
                }
                content
                is_large
                marginless
                caption
                url
                source {
                  data {
                    attributes {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 3840
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
    }
  }
`
