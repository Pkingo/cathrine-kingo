import React from "react"
import DynamicComponent from "./DynamicComponent"

export const Grid = ({ blok }) => {
  const components = blok.body.map(blok => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <div
      className={`w-main self-center gap-4 py-4 lg:grid lg:grid-cols-${blok.columns}`}
    >
      {components}
    </div>
  )
}
