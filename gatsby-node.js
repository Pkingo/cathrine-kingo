/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const PAGE_TEMPLATE = path.resolve("src/templates/Page.js")
    const GLOBAL_COMPONENT_TEMPLATE = path.resolve("src/templates/Global.js")

    resolve(
      graphql(`
        query PagesQuery {
          stories: allStoryblokEntry(
            filter: { field_component: { eq: "page" } }
          ) {
            edges {
              node {
                content
                id
                full_slug
                name
                slug
              }
            }
          }
          global: allStoryblokEntry(
            filter: { field_component: { eq: "global" } }
          ) {
            edges {
              node {
                content
                id
                full_slug
                name
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const stories = result.data.stories.edges

        stories.forEach(entry => {
          const page = {
            path: entry.node.slug !== "home" ? `/${entry.node.full_slug}` : "/",
            component: PAGE_TEMPLATE,
            context: {
              story: entry.node,
            },
          }
          createPage(page)
        })

        const globalComponents = result.data.global.edges

        globalComponents.forEach(entry => {
          const page = {
            path: `/${entry.node.full_slug}`,
            component: GLOBAL_COMPONENT_TEMPLATE,
            context: {
              story: entry.node,
            },
          }
          createPage(page)
        })
      })
    )
  })
}
