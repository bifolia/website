const path = require('path')

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

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allStrapiProject {
//         edges {
//           node {
//             description
//             name
//             body {
//               strapi_component
//               layout {
//                 layout
//               }
//               content
//               is_large
//               caption
//               url
//               entries {
//                 name
//                 values {
//                   value
//                 }
//               }
//               source {
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData(
//                       width: 3840
//                       quality: 100
//                       placeholder: BLURRED
//                       formats: [AUTO, WEBP, AVIF]
//                     )
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allStrapiProject.edges.forEach(({ node }) => {
//     createPage({
//       path: `projekte/${node.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`,
//       component: path.resolve(`./src/templates/projekt.tsx`),
//       context: {
//         project: node,
//       },
//     })
//   })
// }
