import React, { Component } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { IntlProvider } from "react-intl"
import { getUserLangKey } from "ptz-i18n"
import { withPrefix } from "gatsby-link"

import { messages } from "./translation"

import Hero from "./hero"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./navigation"
import SEO from "./seo"

import languages from "../locales/languages"

import "../css/layout.scss"

class Layout extends Component {
  constructor(props) {
    super(props)

    // Skip build, Browsers only
    // if (typeof window !== "undefined") {
    //   const { langs, defaultLangKey } = languages
    //   const { path } = props
    //
    //   const langKey = getUserLangKey(langs, defaultLangKey)
    //
    //   const langFound = langs.find((lang) => (path.startsWith(`/${lang}/`)))
    //
    //   if (langFound && langFound.length > 0) {
    //     return
    //   }
    //
    //   const url = langKey !== defaultLangKey ? withPrefix(`/${langKey}/${path}`) : `/${path}`
    //
    //   navigate(url)
    // }
  }

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
    </IntlProvider>
  )
}
