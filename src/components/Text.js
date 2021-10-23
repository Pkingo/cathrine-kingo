import React from "react"
import cx from "classnames"

export const Text = ({ blok }) => {
  return (
    <p
      className={cx("whitespace-pre-line", {
        "col-span-full": blok.isFullGridWidth,
      })}
      dangerouslySetInnerHTML={{ __html: blok.text }}
    />
  )
}
