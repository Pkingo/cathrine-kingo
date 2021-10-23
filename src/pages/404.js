import React from "react"

import useStoryblok from "../../lib/storyblok"
import DynamicComponent from "../components/DynamicComponent"
import SbEditable from "storyblok-react"

const NotFoundPage = ({ location }) => {
  let components = null
  const story = useStoryblok(null, location)

  if (story) {
    components = story.content.body.map(blok => {
      return <DynamicComponent blok={blok} key={blok._uid} />
    })
  }

  return (
    <SbEditable content={story ? story.content : false}>
      {components}
    </SbEditable>
  )
}
export default NotFoundPage
