import './journal.scss'
import { Entries, JournalEntry, Page } from '../types'
import { graphql, useStaticQuery } from 'gatsby'
import { JournalEntryComponent } from '../components/JournalEntryComponent'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'

const Journal = () => {
  const {
    strapiJournal: { description },
    allStrapiText: entries,
  } = useStaticQuery<{
    strapiJournal: {
      description: string
    }
    allStrapiText: Entries<JournalEntry>
  }>(graphql`
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
                      width: 3840
                      quality: 100
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout page={Page.Journal} className="Journal">
      <SEO title="" description={description} />
      {entries.edges.map(({ node }, i) => (
        <JournalEntryComponent entry={node} key={i} />
      ))}
    </Layout>
  )
}

export default Journal
