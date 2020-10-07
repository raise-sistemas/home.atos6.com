import React, { useState } from "react"
import PropTypes from "prop-types"
import { injectIntl } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import useScrollPosition from "../utils/use_scroll_position"

import PrefixedLink from "./prefixed_link"

const Header = ({ intl, path }) => {
  const data = useStaticQuery(graphql`
    # prettier-ignore
    query {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(
            width: 130,
            height: 60,
            fit: CONTAIN,
            cropFocus: CENTER,
            background: "rgba(0, 0, 0, 0)"
          ) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      logoAlternative: file(
        relativePath: { eq: "images/logo-alternative.png" }
      ) {
        childImageSharp {
          fixed(
            width: 130,
            height: 60,
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
  const [scrolled, setScrolled] = useState(false)
  const [showMenuMobile, setShowMenuMobile] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      const isScrolled = currPos.y !== 0

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    },
    [scrolled]
  )

  const toggleShowMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile)
  }

  return (
    <header className={scrolled ? "header-invert" : ""}>
      <div className="container">
        <div
          className={`container-alternative ${
            showMenuMobile ? "show-menu-mobile" : ""
          }`}
        >
          <PrefixedLink to="/" className="logo">
            <Img
              fixed={
                scrolled && !showMenuMobile
                  ? data.logoAlternative.childImageSharp.fixed
                  : data.logo.childImageSharp.fixed
              }
              fadeIn={false}
              loading="eager"
              alt={intl.formatMessage({ id: "site-logo-alt" })}
            />
          </PrefixedLink>

          <button
            className={`hamburger hamburger--slider show-on-mobile ${
              showMenuMobile ? "is-active" : ""
            }
          ${scrolled ? "hamburger-invert" : ""}`}
            type="button"
            onClick={() => toggleShowMenuMobile()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <ul className="menu hide-on-mobile">
          <li>
            <PrefixedLink to="/" activeClassName="activeLink">
              {intl.formatMessage({ id: "home" })}
            </PrefixedLink>
          </li>

          <li>
            <a
              href="#features"
              className={path.indexOf("features") > 0 ? "activeLink" : ""}
            >
              {intl.formatMessage({ id: "features" })}
            </a>
          </li>

          <li>
            <a
              href="https://blog.atos6.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {intl.formatMessage({ id: "blog" })}
            </a>
          </li>

          <li>
            <a
              href={`${window.location.host}/contact`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {intl.formatMessage({ id: "contact" })}
            </a>
          </li>
        </ul>

        <a
          href="/users/sign_in"
          className="log-in hide-on-mobile"
          rel="noopener norefferer"
        >
          {intl.formatMessage({ id: "log-in" })}
        </a>

        <a
          href="https://materiais.atos6.com/gestao_comunicacao_igreja"
          className="btn-schedule hide-on-mobile"
          rel="noopener noreferrer"
          target="_blank"
        >
          {intl.formatMessage({ id: "schedule-demonstration.button" })}
        </a>

        <ul
          className={`menu-mobile show-on-mobile ${
            showMenuMobile ? "active" : ""
          }`}
        >
          <li>
            <PrefixedLink to="/" activeClassName="activeLink">
              {intl.formatMessage({ id: "home" })}
            </PrefixedLink>
          </li>

          <li>
            <PrefixedLink to="#" activeClassName="activeLink" partiallyActive>
              {intl.formatMessage({ id: "features" })}
            </PrefixedLink>

            <ul>
              <li>
                <PrefixedLink
                  to="/features/pastor-members"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.pastor-members.name" })}
                </PrefixedLink>
              </li>

              <li>
                <PrefixedLink
                  to="/features/cells"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.cells.name" })}
                </PrefixedLink>
              </li>

              <li>
                <PrefixedLink
                  to="/features/financial"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.financial.name" })}
                </PrefixedLink>
              </li>

              <li>
                <PrefixedLink
                  to="/features/online-donations"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.online-donations.name" })}
                </PrefixedLink>
              </li>

              <li>
                <PrefixedLink
                  to="/features/custom-app"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.custom-app.name" })}
                </PrefixedLink>
              </li>

              <li>
                <PrefixedLink
                  to="/features/teaching"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.teaching.name" })}
                </PrefixedLink>
              </li>

              <li>
                <PrefixedLink
                  to="/features/event-management"
                  activeClassName="activeLink"
                  partiallyActive
                >
                  {intl.formatMessage({ id: "features.event-management.name" })}
                </PrefixedLink>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="https://blog.atos6.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {intl.formatMessage({ id: "blog" })}
            </a>
          </li>

          <li>
            <a
              href={`${window.location.host}/contact`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {intl.formatMessage({ id: "contact" })}
            </a>
          </li>

          <li>
            <div className="log-in">
              <a
                href="/users/sign_in"
                className="btn-default"
                rel="noopener norefferer"
              >
                {intl.formatMessage({ id: "log-in" })}
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="rule hide-on-mobile" />
    </header>
  )
}

Header.propTypes = {
  path: PropTypes.string,
}

Header.defaultProps = {
  path: "",
}

export default injectIntl(Header)
