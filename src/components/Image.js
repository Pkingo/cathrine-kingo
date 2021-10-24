import React from "react"
import SbEditable from "storyblok-react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-storyblok-image"

export const Image = ({ content }) => {
  const fluidProps = getFluidGatsbyImage(content.image)
  return (
    <SbEditable content={content}>
      <div>
        <Img
          className="mx-auto"
          fluid={fluidProps}
          alt={content.image_alt}
          title={content.image_title}
        />
      </div>
    </SbEditable>
  )
}
