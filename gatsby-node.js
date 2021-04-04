exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiFooterAddress {
      line_2: String
    }

    type StrapiHomepageBody {
      title: String
      caption: String
      url: String
    }
  `
  createTypes(typeDefs)
}
