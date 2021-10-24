import React from "react"

export const Banner = ({ content }) => (
  <div className="bg-primary py-10 text-center text-white px-4">
    <h1>{content.Header}</h1>
    <h2>{content.Subheader}</h2>
  </div>
)
