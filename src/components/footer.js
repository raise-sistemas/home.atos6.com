import React from "react"
import { injectIntl } from "react-intl"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import PrefixedLink from "./prefixed_link"

library.add(faFacebookSquare)
library.add(faYoutube)
library.add(faInstagram)

const Footer = ({ intl }) => {
  const data = useStaticQuery(graphql`
    # prettier-ignore
    query {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(
            width: 190,
            height: 68,
            fit: CONTAIN,
            cropFocus: CENTER,
            background: "rgba(0, 0, 0, 0)"
          ) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  const socialNetworks = className => (
    <span className={`social-networks ${className}`}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/atosseis/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} size="lg" />
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UC_1IH_uS0iEJL-i6VtBYmMQ"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/atos_6/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
          </a>
        </li>
      </ul>
    </span>
  )

  const blog = (
    <a href="https://blog.atos6.com" rel="noopener noreferrer" target="_blank">
      {intl.formatMessage({ id: "blog" })}
    </a>
  )

  const logIn = (
    <a href="/users/sign_in" rel="noopener norefferer">
      {intl.formatMessage({ id: "log-in" })}
    </a>
  )

  const useTerms = (
    <PrefixedLink to="/use_terms">
      {intl.formatMessage({ id: "terms-of-use" })}
    </PrefixedLink>
  )

  const helpCenter = (
    <a
      href="https://intercom.help/atosseis"
      rel="noopener noreferrer"
      target="_blank"
    >
      {intl.formatMessage({ id: "help-center" })}
    </a>
  )

  return (
    <footer>
      <div className="top-footer hide-on-mobile">
        <div className="container">
          <div className="column">
            <Img
              fixed={data.file.childImageSharp.fixed}
              fadeIn={false}
              loading="eager"
              alt={intl.formatMessage({ id: "white-logo-alt" })}
            />

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
                <a href="#" alt="">
                  {intl.formatMessage({ id: "carrers" })}
                </a>
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="links">
              <li>{logIn}</li>

              <li>{helpCenter}</li>

              <li>{useTerms}</li>
            </ul>
          </div>

          <div className="column">
            <ul className="links">
              <li>
                <span>{intl.formatMessage({ id: "phone" })}</span>
              </li>

              <li>
                <span>{intl.formatMessage({ id: "email" })}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <div className="copyright hide-on-mobile">
            &copy; {intl.formatMessage({ id: "copyright-message" })}
          </div>

          <div className="footer-links show-on-mobile">
            {useTerms}

            {helpCenter}

            {blog}

            {logIn}
          </div>

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
