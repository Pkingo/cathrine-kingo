import React from "react"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ blok }) => (
  <GatsbyLink
    className="hover:underline text-primary"
    to={`/${blok.Slug.cached_url === "home" ? "" : blok.Slug.cached_url}`}
  >
    {blok.Text}
  </GatsbyLink>
)
