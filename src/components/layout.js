/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"

const Layout = ({ children }) => {
  return <Main>{children}</Main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  background-color: #e5e5e5;
  color: #2c3f56;

  p {
    font-family: "Merriweather", serif;
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 400;
  }

  a {
    color: #31a1c5;
    text-decoration: none;
    border-bottom: 1px solid;

    &:hover {
      border-bottom: 0;
    }
  }
`

export default Layout
