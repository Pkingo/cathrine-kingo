import React from "react"
import { graphql } from "gatsby"
import SbEditable from "storyblok-react"

import useStoryblok from "../../lib/storyblok"
import DynamicComponent from "../components/DynamicComponent"
import { Shell } from "../components/Shell"

export const query = graphql`
  query IndexPage {
    storyblokEntry(slug: { eq: "home" }) {
      content
      name
    }
  }
`

const IndexPage = ({ data, location }) => {
  const story = useStoryblok(data?.storyblokEntry, location)

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  return (
    <Shell>
      <SbEditable content={story?.content || false}>{components}</SbEditable>
    </Shell>
  )
}
export default IndexPage
