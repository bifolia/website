const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiFooterDataAttributesAddress {
      line_2: String
    }

    type StrapiFooterDataAttributesSocial {
      title: String!
      url: String!
    }

    type StrapiFooterDataAttributes {
      address: StrapiFooterDataAttributesAddress!
      social: [StrapiFooterDataAttributesSocial]
    }

    type StrapiAuthorDataAttributes {
      name: String!
    }

    type StrapiTextsDataAttributes {
      authors: [StrapiAuthorDataAttributes]
    }

    type StrapiBaseTableEntry {
      name: String!
      values: [StrapiBaseTableValue]
    }

    type StrapiBaseTableValue {
      value: String!
    }

    type StrapiGartenentwicklungDataAttributesBody {
      caption: String
      url: String
    }

    type StrapiHomepageDataAttributesBody {
      caption: String
      url: String
    }

    type StrapiPflanzplanungDataAttributesBody {
      caption: String
      url: String
    }

    type StrapiProjectsDataAttributesBody {
      caption: String
      url: String
      entries: [StrapiBaseTableEntry]
      content: String
      is_large: Boolean
      marginless: Boolean
    }

    type StrapiRaumgestaltungDataAttributesBody {
      caption: String
      url: String
    }

    type StrapiWirDataAttributesBody {
      caption: String
      url: String
    }

    type StrapiTextsDataAttributesBody {
      caption: String
      url: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      strapiProjects {
        data {
          id
          attributes {
            name
          }
        }
      }
    }
  `)
  result.data.strapiProjects.data.forEach(({ id, attributes: { name } }) => {
    createPage({
      path: `projekte/${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`,
      component: path.resolve(`./src/templates/projekt.tsx`),
      context: {
        id,
      },
    })
  })
}
