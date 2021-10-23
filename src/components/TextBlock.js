import React from "react"

export const TextBlock = ({ blok }) => (
  <div>
    {blok.title ? <h4>{blok.title}</h4> : null}
    <p>{blok.text}</p>
  </div>
)
