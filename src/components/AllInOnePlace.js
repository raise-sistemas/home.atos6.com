import React from "react"
import { injectIntl } from "react-intl"

import notebook from "../images/notebook-new.png"

import WantToKnowButton from "./WantToKnowButton"

import parseIntlMessage from "./parseIntlMessage"

const AllInOnePlace = ({ intl }) => (
  <div className="all-in-one-place">
    <div className="container">
      <div className="column">
        <div className="call-to-action">
          {intl.formatMessage(
            { id: "all-in-one-place.call-to-action" },
            parseIntlMessage
          )}
        </div>

        <div className="description">
          {intl.formatMessage({ id: "all-in-one-place.description" })}
        </div>

        <WantToKnowButton className="hide-on-mobile" />
      </div>

      <div className="column images">
        <img src={notebook} alt="" />
      </div>

      <WantToKnowButton className="show-on-mobile" />
    </div>
  </div>
)

export default injectIntl(AllInOnePlace)
