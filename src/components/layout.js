import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from 'framer-motion'

import Header from "./header/header"
import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <main id="scroll-container" className="pt-16 md:pt-16 xl:pt-20" data-scroll-container>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
