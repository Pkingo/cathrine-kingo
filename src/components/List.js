import React from "react"
import DynamicComponent from "./DynamicComponent"
import cx from "classnames"

export const List = ({ blok }) => {
  const components = blok.items.map(blok => (
    <li key={blok._uid}>
      <DynamicComponent blok={blok} />
    </li>
  ))
  return (
    <div>
      {blok.Title ? (
        <>
          <h4>{blok.Title}</h4>
          <hr />
        </>
      ) : null}
      <ul
        className={cx({
          "list-disc": blok["list_style"] === "disc",
          "list-decimal": blok["list_style"] === "number",
          "ml-8": blok["list_style"],
        })}
      >
        {components}
      </ul>
    </div>
  )
}
