import React from "react"
import SbEditable from "storyblok-react"
import Img from "gatsby-image"
import { getFixedGatsbyImage } from "gatsby-storyblok-image"

export const Image = ({ blok }) => {
  const fluidProps = getFixedGatsbyImage(blok.image)
  return (
    <SbEditable content={blok}>
      <Img
        className="mx-auto"
        fixed={fluidProps}
        alt={blok.image_alt}
        title={blok.image_title}
      />
    </SbEditable>
  )
}
