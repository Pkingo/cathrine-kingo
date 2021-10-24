import React from "react"
import DynamicComponent from "./DynamicComponent"
import cx from "classnames"

export const Wrapper = ({ content }) => {
  const components = content.items.map(blok => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <div
      className={cx("flex gap-4", {
        "flex-col": !content.isVertical,
        "col-span-full": content.isFullGridWidth,
      })}
    >
      {components}
    </div>
  )
}
