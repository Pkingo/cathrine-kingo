import React from "react"
import cx from "classnames"

export const Title = ({ content }) => {
  const classes = cx({ "col-span-full": content.isFullGridWidth })
  if (content.type === "h1") {
    return <h1 className={classes}>{content.text}</h1>
  }
  if (content.type === "h2") {
    return <h2 className={classes}>{content.text}</h2>
  }
  if (content.type === "h3") {
    return <h3 className={classes}>{content.text}</h3>
  }
  if (content.type === "h4") {
    return <h4 className={classes}>{content.text}</h4>
  }
  if (content.type === "h5") {
    return <h5 className={classes}>{content.text}</h5>
  }
  return <h6 className={classes}>{content.text}</h6>
}
