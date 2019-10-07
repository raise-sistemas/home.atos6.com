import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "react-intl"

import locales from "../constants/locales"

const PrefixedLink = props => {
  let clonedProps = { ...props }

  const { intl } = props
  const { to } = clonedProps

  delete clonedProps.to

  const selectedLocale = locales[intl.locale]

  let prefixedPath = to

  if (selectedLocale && typeof selectedLocale.default === "undefined") {
    prefixedPath = to === "/" ? `${intl.locale}` : `${intl.locale}${to}`
  }

  return <Link to={prefixedPath.toString()} {...clonedProps} />
}

export default injectIntl(PrefixedLink)
