import React from "react"
import { injectIntl } from "react-intl"

import PrefixedLink from "./prefixed_link"

const Navigation = ({ intl, previous, next }) => {
  if (!previous && !next) {
    return null
  }

  const renderPreviousPath = () => (
    <PrefixedLink to={previous.path} className="navigation-button">
      <div className="more-features">
        {intl.formatMessage({ id: "navigation.more-features" })}
      </div>

      <div className="navigation-button-title">
        {previous.title}

        <span className="arrow-left">&#10142;</span>
      </div>
    </PrefixedLink>
  )

  const renderNextPath = () => (
    <PrefixedLink to={next.path} className="navigation-button">
      <div className="more-features">
        {intl.formatMessage({ id: "navigation.more-features" })}
      </div>

      <div className="navigation-button-title">
        {next.title}

        <span className="arrow-right">&#10142;</span>
      </div>
    </PrefixedLink>
  )

  return (
    <div className="navigation">
      <div className="container">
        <div className="previous">
          {previous ? (
            renderPreviousPath()
          ) : (
            <span>
              {intl.formatMessage({ id: "navigation.know-more-advantages" })}
            </span>
          )}
        </div>

        <div className="next">
          {next ? (
            renderNextPath()
          ) : (
            <span>
              {intl.formatMessage({ id: "navigation.know-more-advantages" })}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Navigation)
