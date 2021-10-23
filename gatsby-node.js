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
    const storyblokEntry = path.resolve("src/templates/Page.js")

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
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.stories.edges

        entries.forEach(entry => {
          if (entry.node.slug !== "home") {
            const page = {
              path: `/${entry.node.full_slug}`,
              component: storyblokEntry,
              context: {
                story: entry.node,
              },
            }
            createPage(page)
          } else {
            const page = {
              path: "/",
              component: storyblokEntry,
              context: {
                story: entry.node,
              },
            }
            createPage(page)
          }
        })
      })
    )
  })
}
