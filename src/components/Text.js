import React from "react"
import cx from "classnames"

export const Text = ({ content }) => {
  return (
    <p
      className={cx("whitespace-pre-line", {
        "col-span-full": content.isFullGridWidth,
      })}
      dangerouslySetInnerHTML={{ __html: content.text }}
    />
  )
}
