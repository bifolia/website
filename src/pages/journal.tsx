import './journal.scss'
import { Entries, JournalEntry, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { JournalEntryComponent } from '../components/JournalEntryComponent'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiJournal: {
    description: string
  }
  allStrapiText: Entries<JournalEntry>
}

const Journal: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiJournal: { description },
    allStrapiText: entries,
  },
}) => (
  <Layout page={Page.Journal} className="Journal">
    <SEO title="Journal" description={description} />
    {entries.edges.map(({ node }, i) => (
      <JournalEntryComponent entry={node} key={i} />
    ))}
  </Layout>
)

export default Journal

export const query = graphql`
  {
    strapiJournal {
      description
    }
    allStrapiText(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          date(formatString: "D. MMMM YYYY", locale: "de")
          authors {
            name
          }
          body {
            strapi_component
            layout {
              layout
            }
            content
            is_large
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
`
