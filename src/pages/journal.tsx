import './journal.scss'
import { Attributes, Entries, JournalEntry, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { JournalEntryComponent } from '../components/JournalEntryComponent'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiJournal: Attributes<{
    description: string
  }>
  allStrapiText: Entries<Attributes<JournalEntry>>
}

const Journal: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiJournal: { data: { attributes: { description } } },
    allStrapiText: entries,
  },
}) => (
  <Layout page={Page.Journal} className="Journal">
    <SEO title="Journal" description={description} />
    {entries.edges.map(({ node: { data: { attributes } } }, i) => (
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
    allStrapiText(sort: { fields: date, order: DESC }) {
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
                entries {
                  name
                  values {
                    value
                  }
                }
                source {
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
`
