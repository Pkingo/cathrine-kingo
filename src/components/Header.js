import React, { useState } from "react"
import SbEditable from "storyblok-react"
import cx from "classnames"
import DynamicComponent from "./DynamicComponent"
import { Link } from "gatsby"
import { MenuIcon } from "./icons/MenuIcon"
import { CloseIcon } from "./icons/CloseIcon"

export const Header = ({ blok }) => {
  const { content } = blok.reference
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  const components = content.links.map(blok => (
    <li key={blok._uid}>
      <DynamicComponent blok={blok} />
    </li>
  ))

  return (
    <SbEditable content={content}>
      <nav className="flex justify-between py-2 px-8">
        <Link className="text-2xl text-primary hidden lg:block" to="/">
          {content.brand}
        </Link>
        <button className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <MenuIcon />
        </button>
        <ul
          className={cx(
            "flex gap-4 self-center absolute bg-white flex-col top-0 left-0  min-w-min w-1/2 p-4 h-screen z-10 transition-all",
            "lg:static lg:h-auto lg:flex-row lg:p-0 lg:w-min",
            {
              "-left-full": !isOpen,
            }
          )}
        >
          <button onClick={toggleMenu} className="lg:hidden self-end">
            <CloseIcon />
          </button>
          {components}
        </ul>
      </nav>
    </SbEditable>
  )
}
