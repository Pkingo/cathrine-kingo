require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.STORYBLOK_ACCESS_KEY,
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        resolveRelations: ["global_reference.reference"],
      },
    },
    "gatsby-plugin-postcss",
  ],
}
