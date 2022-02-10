import './journal.scss'
import 'moment/locale/de'
import { AllResult, JournalEntry, Page, Result } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { JournalEntryComponent } from '../components/JournalEntryComponent'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import moment from 'moment'

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
          moment(b.attributes.date, 'D. MMMM YYYY', 'de').unix() -
          moment(a.attributes.date, 'D. MMMM YYYY', 'de').unix(),
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
