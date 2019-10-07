import React from "react"
import { injectIntl } from "react-intl"

import PrefixedLink from "./prefixed_link"

const ScheduleDemonstrationBanner = ({ intl }) => (
  <div className="schedule-demonstration-banner">
    <div className="container">
      <div className="call-to-action">
        {intl.formatMessage({ id: "schedule-demonstration.call-to-action" })}
      </div>

      <PrefixedLink to="/schedule" className="btn-schedule btn-default">
        {intl.formatMessage({ id: "schedule-demonstration.button" })}
      </PrefixedLink>
    </div>
  </div>
)

export default injectIntl(ScheduleDemonstrationBanner)
