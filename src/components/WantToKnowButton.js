import React from "react"
import { injectIntl } from "react-intl"

const WantToKnowButton = ({ intl, className }) => (
  <a
    href="https://materiais.atos6.com/lp_gestao"
    title={intl.formatMessage({ id: "want-to-know" })}
    className={`btn-want-to-know ${className}`}
    rel="noopener noreferrer"
  >
    {intl.formatMessage({ id: "want-to-know" })}

    <span>&#10142;</span>
  </a>
)

export default injectIntl(WantToKnowButton)
