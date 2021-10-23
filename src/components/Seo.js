import React from "react"
import { Helmet } from "react-helmet"

export const Seo = ({ location, description, keywords, image, title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={location.href} />
    <meta name="keywords" content={keywords} />
    {image ? <meta name="image" content={image} /> : null}

    <meta property="og:url" content={location.href} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image ? <meta name="og:image" content={image.href} /> : null}
  </Helmet>
)
