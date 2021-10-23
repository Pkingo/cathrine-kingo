import React from "react"
import SbEditable from "storyblok-react"
import DynamicComponent from "./DynamicComponent"
import { Link } from "gatsby"

export const Header = ({ blok }) => {
  const { content } = blok.reference
  const components = content.links.map(blok => (
    <li key={blok._uid}>
      <DynamicComponent blok={blok} />
    </li>
  ))

  return (
    <SbEditable content={content}>
      <nav className="flex justify-between py-2 px-8">
        <div>
          <Link className="text-2xl text-primary" to="/">
            {content.brand}
          </Link>
        </div>
        <ul className="flex gap-4 self-center">{components}</ul>
      </nav>
    </SbEditable>
  )
}
