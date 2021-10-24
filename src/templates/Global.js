import React from "react"

import { Shell } from "../components/Shell"
import useStoryblok from "../../lib/storyblok"
import DynamicComponent from "../components/DynamicComponent"
import SbEditable from "storyblok-react"

const PageTemplate = ({ pageContext, location }) => {
  const story = useStoryblok(pageContext.story, location)

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  return (
    <Shell>
      <SbEditable content={story?.content || false}>{components}</SbEditable>
    </Shell>
  )
}
export default PageTemplate
