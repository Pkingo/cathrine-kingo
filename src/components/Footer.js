import React from "react"
import SbEditable from "storyblok-react"

export const Footer = ({ blok }) => {
  const { content } = blok.reference
  return (
    <SbEditable content={content}>
      <div className="bg-primary py-10 text-center text-white">
        <p
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: content.Text }}
        />
      </div>
    </SbEditable>
  )
}
