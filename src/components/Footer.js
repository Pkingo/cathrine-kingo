import React from "react"

export const Footer = ({ content }) => (
  <div className="bg-primary py-10 text-center text-white px-4">
    <p
      className="whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: content.text }}
    />
  </div>
)
