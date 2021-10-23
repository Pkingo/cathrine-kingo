module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "L5EPr4JRMBDm9WsgZ8rs7wtt",
        version: "draft",
        resolveRelations: ["global_reference.reference"],
      },
    },
    "gatsby-plugin-postcss",
  ],
}
