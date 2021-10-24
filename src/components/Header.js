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
        <button
          aria-label="Åben sidebar"
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
        <div
          className={cx(
            "flex flex-col self-center absolute bg-white top-0 left-0  min-w-min w-1/2 p-4 h-screen z-10 transition-all",
            "lg:static lg:h-auto lg:p-0 lg:w-min",
            {
              "-left-full": !isOpen,
            }
          )}
        >
          <button
            aria-label="Luk sidebar"
            onClick={toggleMenu}
            className="lg:hidden self-end"
          >
            <CloseIcon />
          </button>
          <ul className="flex gap-4 flex-col lg:flex-row">{components}</ul>
        </div>
      </nav>
    </SbEditable>
  )
}
