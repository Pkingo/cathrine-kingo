import React from "react"

import { Shell } from "../components/Shell"
import useStoryblok from "../../lib/storyblok"
import DynamicComponent from "../components/DynamicComponent"
import SbEditable from "storyblok-react"
import { Seo } from "../components/Seo"

const PageTemplate = ({ pageContext, location, ...rest }) => {
  const story = useStoryblok(pageContext.story, location)

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  return (
    <Shell>
      <Seo
        location={location}
        description={story.content.description}
        keywords={story.content.keywords}
        image={story.content.image}
        title={story.content.title}
      />
      <SbEditable content={story?.content || false}>{components}</SbEditable>
    </Shell>
  )
}
export default PageTemplate
