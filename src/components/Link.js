import React from "react"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ content }) => (
  <GatsbyLink
    className="hover:underline text-primary"
    to={`/${content.Slug.cached_url === "home" ? "" : content.Slug.cached_url}`}
  >
    {content.Text}
  </GatsbyLink>
)
