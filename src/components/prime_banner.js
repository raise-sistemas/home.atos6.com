import React from "react"
import { injectIntl } from "react-intl"

import communication from "../images/Flying-iPhone-X-Mockups-new.png"

import parseIntlMessage from "./parseIntlMessage"

const PrimeBanner = ({ intl }) => {
  return (
    <div id="prime" className="prime-banner">
      <div className="container">
        <div className="title">
          {intl.formatMessage({ id: "prime-banner.main-title" })}

          <br />

          {intl.formatMessage(
            { id: "prime-banner.secondary-title" },
            parseIntlMessage
          )}
        </div>

        <div className="column cellphone">
          <img
            src={communication}
            alt={intl.formatMessage({ id: "prime-banner.main-title" })}
          />
        </div>

        <div className="column">
          <div className="description">
            {intl.formatMessage(
              { id: "prime-banner.description" },
              parseIntlMessage
            )}
          </div>

          <a
            href="https://prime.atos6.com"
            className="know-more"
            rel="noopener noreferrer"
            target="_blank"
          >
            {intl.formatMessage({ id: "know-more" })} <span>&#10142;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(PrimeBanner)
