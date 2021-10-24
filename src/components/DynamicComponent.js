import SbEditable from "storyblok-react"
import React from "react"
import { Image } from "./Image"
import { List } from "./List"
import { Link } from "./Link"
import { Banner } from "./Banner"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Grid } from "./Grid"
import { Wrapper } from "./Wrapper"
import { Title } from "./Title"
import { Text } from "./Text"
import { line } from "./Line"
import { ExternalLink } from "./ExternalLink"
import { GoogleMap } from "./GoogleMap"

const Components = {
  Image,
  List,
  Link,
  Banner,
  grid: Grid,
  wrapper: Wrapper,
  title: Title,
  text: Text,
  line: line,
  external_link: ExternalLink,
  google_map: GoogleMap,
  footer: Footer,
  header: Header,
}

const DynamicComponent = ({ blok }) => {
  const componentName =
    blok.component === "global_reference" ? blok.reference.slug : blok.component
  const content =
    blok.component === "global_reference"
      ? blok.reference.content.body[0]
      : blok
  if (typeof Components[componentName] !== "undefined") {
    const Component = Components[componentName]
    return (
      <SbEditable content={content}>
        <Component content={content} />
      </SbEditable>
    )
  }
  return (
    <p>
      The component <strong>{componentName}</strong> has not been created yet
    </p>
  )
}

export default DynamicComponent
