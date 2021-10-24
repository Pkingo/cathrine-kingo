import React from "react"

export const GoogleMap = ({ content }) => (
  <iframe
    src={content.src}
    className="border-0 w-full h-96"
    loading="lazy"
    title={content.title}
  ></iframe>
)
