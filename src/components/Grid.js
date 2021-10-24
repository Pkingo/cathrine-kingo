import React from "react"
import DynamicComponent from "./DynamicComponent"

export const Grid = ({ blok }) => {
  const components = blok.body.map(blok => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <div
      className={`w-full lg:w-main self-center gap-4 py-4 grid lg:grid-cols-${blok.columns} px-4 lg:px-0`}
    >
      {components}
    </div>
  )
}
