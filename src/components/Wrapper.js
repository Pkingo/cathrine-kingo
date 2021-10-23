import React from "react"
import DynamicComponent from "./DynamicComponent"
import cx from "classnames"

export const Wrapper = ({ blok }) => {
  const components = blok.items.map(blok => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <div
      className={cx("flex gap-4", {
        "flex-col": !blok.isVertical,
        "col-span-full": blok.isFullGridWidth,
      })}
    >
      {components}
    </div>
  )
}
