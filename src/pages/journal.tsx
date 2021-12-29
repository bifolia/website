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
  strapiTexts: AllResult<JournalEntry>
}

const Journal: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiJournal: {
      data: {
        attributes: { description },
      },
    },
    strapiTexts: { data: entries },
  },
}) => (
  <Layout page={Page.Journal} className="Journal">
    <SEO title="Journal" description={description} />
    {entries
      .sort(
        (a, b) =>
          new Date(a.attributes.date).getTime() -
          new Date(b.attributes.date).getTime(),
      )
      .map(({ attributes: entry }, i) => (
        <JournalEntryComponent entry={entry} key={i} />
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
    strapiTexts {
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
`
