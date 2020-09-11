/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

import Header from "./header"
import Hero from "./hero"
import Blocks from "./blocks"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
        <Header siteTitle={'Home'} />
        <Hero/>
        <Blocks/>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
