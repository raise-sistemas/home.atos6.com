import React from "react"
import { injectIntl } from "react-intl"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import PrefixedLink from "./prefixed_link"

import whiteLogo from "../images/white-logo.png"

library.add(faFacebookSquare)
library.add(faYoutube)
library.add(faInstagram)

const Footer = ({ intl }) => {
  const socialNetworks = className => (
    <span className={`social-networks ${className}`}>
      <ul>
        <li>
          <FontAwesomeIcon icon={["fab", "facebook-square"]} size="lg" />
        </li>

        <li>
          <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
        </li>

        <li>
          <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
        </li>
      </ul>
    </span>
  )

  const contactDetails = className => (
    <div className={`contact-details ${className}`}>
      <div className="phone">
        <span>{intl.formatMessage({ id: "phone" })}</span>

        {intl.formatMessage({ id: "phone-and-whatsapp" })}
      </div>

      <div className="email">{intl.formatMessage({ id: "email" })}</div>
    </div>
  )

  const blog = (
    <a href="https://blog.atos6.com" rel="noopener noreferrer">
      {intl.formatMessage({ id: "blog" })}
    </a>
  )

  const logIn = (
    <a href="/users/sign_in" className="log-in" rel="noopener norefferer">
      {intl.formatMessage({ id: "log-in" })}
    </a>
  )

  const useTerms = (
    <a href="/use_terms" rel="noopener noreferrer">
      {intl.formatMessage({ id: "terms-of-use" })}
    </a>
  )

  const helpCenter = (
    <a href="https://ajuda.atos6.com/" rel="noopener noreferrer">
      {intl.formatMessage({ id: "help-center" })}
    </a>
  )

  return (
    <footer>
      <div className="top-footer hide-on-mobile">
        <div className="container">
          <div className="column">
            <img
              src={whiteLogo}
              alt={intl.formatMessage({ id: "white-logo-alt" })}
            />

            <span className="atos6-slogan">
              {intl.formatMessage({ id: "slogan" })}
            </span>

            {socialNetworks("")}
          </div>

          <div className="column">
            <ul className="links">
              <li>
                <PrefixedLink to="/">
                  {intl.formatMessage({ id: "home" })}
                </PrefixedLink>
              </li>

              <li>{blog}</li>

              <li>
                <PrefixedLink to="/carrers">
                  {intl.formatMessage({ id: "carrers" })}
                </PrefixedLink>
              </li>

              <li>{logIn}</li>
            </ul>
          </div>

          <div className="column">{contactDetails("")}</div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <div className="copyright hide-on-mobile">
            &copy; {intl.formatMessage({ id: "copyright-message" })}
          </div>

          <div className="footer-links hide-on-mobile">
            {helpCenter}

            <span className="dot">&bull;</span>

            {useTerms}
          </div>

          <div className="footer-links show-on-mobile">
            {useTerms}

            {helpCenter}

            {blog}

            {logIn}
          </div>

          {contactDetails("show-on-mobile")}

          {socialNetworks("show-on-mobile")}

          <div className="copyright show-on-mobile">
            &copy; {intl.formatMessage({ id: "copyright-message" })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default injectIntl(Footer)
