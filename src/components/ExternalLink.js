import React from "react"

export const ExternalLink = ({ blok }) => {
  const href =
    blok.type === "email"
      ? `mailto:${blok.link}`
      : blok.type === "phone"
      ? `tel:${blok.link}`
      : blok.link

  return (
    <a
      className="hover:underline text-primary"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {blok.text}
    </a>
  )
}
