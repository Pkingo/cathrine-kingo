import React from "react"

export const GoogleMap = ({ blok }) => (
  <iframe
    src={blok.src}
    className="border-0 w-full h-96"
    loading="lazy"
    title={blok.title}
  ></iframe>
)
