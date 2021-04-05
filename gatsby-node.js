exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiFooterAddress {
      line_2: String
    }

    type StrapiHomepageBody {
      caption: String
      url: String
    }
  `
  createTypes(typeDefs)
}
