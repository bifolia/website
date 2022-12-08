import './journal.scss'
import 'moment/locale/de'
import { JournalEntry, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { JournalEntryComponent } from '../components/JournalEntryComponent'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import moment from 'moment'

type Data = {
  strapiJournal: {
    description: string
  }
  allStrapiText: { nodes: JournalEntry[] }
}

const Journal: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiJournal: { description },
    allStrapiText: { nodes: entries },
  },
}) => (
  <Layout page={Page.Journal} className="Journal">
    <SEO title="Journal" description={description} />
    {entries
      .sort(
        (a, b) =>
          moment(b.date, 'D. MMMM YYYY', 'de').unix() -
          moment(a.date, 'D. MMMM YYYY', 'de').unix(),
      )
      .map((entry, i) => (
        <JournalEntryComponent entry={entry} key={i} />
      ))}
  </Layout>
)

export default Journal

export const query = graphql`
  {
    strapiJournal {
      description
    }
    allStrapiText {
      nodes {
        title
        date(formatString: "D. MMMM YYYY", locale: "de")
        authors {
          name
        }
        body {
          ... on STRAPI__COMPONENT_BASE_IMAGE {
            strapi_component
            layout {
              position
              len
            }
            caption
            # url
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
          ... on STRAPI__COMPONENT_BASE_TEXT {
            strapi_component
            layout {
              position
              len
            }
            content {
              data {
                content
              }
            }
            is_large
            marginless
          }
        }
      }
    }
  }
`
