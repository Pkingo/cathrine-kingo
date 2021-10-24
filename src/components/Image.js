import React from "react"
import SbEditable from "storyblok-react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-storyblok-image"

export const Image = ({ blok }) => {
  const fluidProps = getFluidGatsbyImage(blok.image)
  return (
    <SbEditable content={blok}>
      <div>
        <Img
          className="mx-auto"
          fluid={fluidProps}
          alt={blok.image_alt}
          title={blok.image_title}
        />
      </div>
    </SbEditable>
  )
}
