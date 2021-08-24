const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiFooterAddress {
      line_2: String
    }

    type StrapiFooterSocial {
      title: String!
      url: String!
    }

    type StrapiFooter implements Node {
      address: StrapiFooterAddress!
      social: [StrapiFooterSocial]
    }

    type StrapiAuthor {
      name: String!
    }

    type StrapiText implements Node {
      authors: [StrapiAuthor]
    }

    type StrapiBaseTableEntry {
      name: String!
      values: [StrapiBaseTableValue]
    }

    type StrapiBaseTableValue {
      value: String!
    }

    type StrapiGartenentwicklungBody {
      caption: String
      url: String
    }

    type StrapiHomepageBody {
      caption: String
      url: String
    }

    type StrapiPflanzplanungBody {
      caption: String
      url: String
    }

    type StrapiProjectBody {
      caption: String
      url: String
    }

    type StrapiRaumgestaltungBody {
      caption: String
      url: String
    }

    type StrapiTeamBody {
      caption: String
      url: String
    }

    type StrapiTextBody {
      caption: String
      url: String
      entries: [StrapiBaseTableEntry]
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiProject {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
  result.data.allStrapiProject.edges.forEach(({ node: { id, name } }) => {
    createPage({
      path: `projekte/${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`,
      component: path.resolve(`./src/templates/projekt.tsx`),
      context: {
        id,
      },
    })
  })
}
