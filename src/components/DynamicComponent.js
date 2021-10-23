import SbEditable from "storyblok-react"
import React from "react"
import { Image } from "./Image"
import { List } from "./List"
import { Link } from "./Link"
import { TextBlock } from "./TextBlock"
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
  text_block: TextBlock,
  Banner,
  grid: Grid,
  wrapper: Wrapper,
  title: Title,
  text: Text,
  line: line,
  external_link: ExternalLink,
  google_map: GoogleMap,
}

const GlobalReference = {
  Footer,
  Header,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }
  if (
    blok.component === "global_reference" &&
    GlobalReference[blok.reference.name]
  ) {
    const Component = GlobalReference[blok.reference.name]
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet
    </p>
  )
}

export default DynamicComponent
