import React from "react"
import DynamicComponent from "./DynamicComponent"

export const Grid = ({ content }) => {
  const components = content.body.map(blok => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <div className="w-full mb-auto lg:w-main self-center gap-4 py-4 grid lg:grid-cols-2 px-4 lg:px-0">
      {components}
    </div>
  )
}
