import React from "react"

export const Banner = ({ blok }) => (
  <div className="bg-primary py-10 text-center text-white">
    <h1>{blok.Header}</h1>
    <h2>{blok.Subheader}</h2>
  </div>
)
