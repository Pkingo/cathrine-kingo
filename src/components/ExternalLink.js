import React from "react"

export const ExternalLink = ({ content }) => {
  const href =
    content.type === "email"
      ? `mailto:${content.link}`
      : content.type === "phone"
      ? `tel:${content.link}`
      : content.link

  return (
    <a
      className="hover:underline text-primary"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {content.text}
    </a>
  )
}
