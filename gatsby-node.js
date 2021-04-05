exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiFooterAddress {
      line_2: String
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
