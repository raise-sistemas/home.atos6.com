import React from "react"
import PropTypes from "prop-types"
import { IntlProvider } from "react-intl"

import { messages } from "./translation"

import Hero from "./hero"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./navigation"
import SEO from "./seo"

import "../css/layout.scss"

const Layout = ({ children, pageContext }) => {
  const {
    path,
    title,
    description,
    keywords,
    hero,
    previous,
    next,
  } = pageContext.frontmatter

  return (
    <>
      <SEO
        title={title}
        description={description}
        meta={[
          {
            name: "keywords",
            content: keywords,
          },
        ]}
      />

      <Hero path={path} {...hero} />

      <Header path={path} />

      <main>{children}</main>

      <Navigation previous={previous} next={next} />

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => {
  const {
    pageContext: { langKey },
  } = props

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <Layout {...props} />
    </IntlProvider>
  )
}
