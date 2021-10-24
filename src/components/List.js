import React from "react"
import DynamicComponent from "./DynamicComponent"
import cx from "classnames"

export const List = ({ content }) => {
  const components = content.items.map(blok => (
    <li key={blok._uid}>
      <DynamicComponent blok={blok} />
    </li>
  ))
  return (
    <div>
      {content.Title ? (
        <>
          <h4>{content.Title}</h4>
          <hr />
        </>
      ) : null}
      <ul
        className={cx({
          "list-disc": content["list_style"] === "disc",
          "list-decimal": content["list_style"] === "number",
          "ml-8": content["list_style"],
        })}
      >
        {components}
      </ul>
    </div>
  )
}
