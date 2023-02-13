import React from "react"
import { injectIntl } from "react-intl"

import WantToKnowButton from "./WantToKnowButton"

import parseIntlMessage from "./parseIntlMessage"

const NativeApps = ({ intl }) => (
  <>
    <div className="native-apps">
      <div className="container">
        <div className="column images" />
        <div className="column descriptive">
          <div className="call-to-action">
            {intl.formatMessage(
              { id: "native-apps.call-to-action" },
              parseIntlMessage
            )}
          </div>

          <div className="description">
            {intl.formatMessage({ id: "native-apps.description" })}
          </div>

          <WantToKnowButton />
        </div>
      </div>
    </div>
  </>
)

export default injectIntl(NativeApps)
