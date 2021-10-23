import React from "react"
import cx from "classnames"

export const Title = ({ blok }) => {
  const classes = cx({ "col-span-full": blok.isFullGridWidth })
  if (blok.type === "h1") {
    return <h1 className={classes}>{blok.text}</h1>
  }
  if (blok.type === "h2") {
    return <h2 className={classes}>{blok.text}</h2>
  }
  if (blok.type === "h3") {
    return <h3 className={classes}>{blok.text}</h3>
  }
  if (blok.type === "h4") {
    return <h4 className={classes}>{blok.text}</h4>
  }
  if (blok.type === "h5") {
    return <h5 className={classes}>{blok.text}</h5>
  }
  return <h6 className={classes}>{blok.text}</h6>
}
