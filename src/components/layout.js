import React, { Component } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { IntlProvider } from "react-intl"

import { messages } from "./translation"

import Hero from "./hero"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./navigation"
import SEO from "./seo"

import "../css/layout.scss"

class Layout extends Component {
  render() {
    const { children, pageContext } = this.props
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
            {
              name: "facebook-domain-verification",
              content: "l250hquin7pas7t0ci1hcxy4v5v3t5",
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
      <Helmet>
        <script
          src="https://api.consenty.me/script/efc8d0ab-7e2c-4b7f-93fc-6cf3acac4ff4.js"
          async
        ></script>
      </Helmet>
    </IntlProvider>
  )
}
