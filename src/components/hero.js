import React from "react"
import PropTypes from "prop-types"
import { useIntl } from "react-intl"

import WantToKnowButton from "../components/WantToKnowButton"
import FadeInUp from "../components/FadeInUp"

import newsOnApp from "../images/news-on-app.png"
import cellReportsOnApp from "../images/cell-reports-on-app.png"
import indicatorsPanel from "../images/indicators-panel.png"
import managementReports from "../images/management-reports.png"
import onlineDonationsApp from "../images/IPHONE-doacao.png"
import flyingIPhoneXMockups from "../images/Flying-iPhone-X-Mockups.png"
import teaching from "../images/teaching-hero.png"
import eventManagement from "../images/event-management.png"

const images = {
  "/features/pastor-members": indicatorsPanel,
  "/features/cells": cellReportsOnApp,
  "/features/financial": managementReports,
  "/features/online-donations": onlineDonationsApp,
  "/features/custom-app": newsOnApp,
  "/features/teaching": teaching,
  "/features/event-management": eventManagement,
}

const Hero = ({ home, path, title, description }) => {
  const intl = useIntl()

  if (home) {
    return (
      <>
        <div className="background"></div>

        <div className="hero home">
          <div className="container">
            <div className="column">
              <div className="description">
                <span>
                  {intl.formatMessage({ id: "hero.call-to-action-first" })}
                </span>{" "}
                {intl.formatMessage({ id: "hero.call-to-action-second" })}{" "}
                <span>
                  {intl.formatMessage({ id: "hero.call-to-action-third" })}
                </span>{" "}
                {intl.formatMessage({ id: "hero.call-to-action-fourth" })}{" "}
                <span>
                  {intl.formatMessage({ id: "hero.call-to-action-fifth" })}
                </span>
              </div>
            </div>

            <div className="column">
              <div className="image">
                <img
                  src={flyingIPhoneXMockups}
                  alt={intl.formatMessage({ id: "hero.call-to-action-alt" })}
                />
              </div>
            </div>

            <div className="column">
              <div className="with-atos6">
                <span>{intl.formatMessage({ id: "hero.with-atos6" })}</span>

                <FadeInUp
                  texts={[
                    intl.formatMessage({
                      id: "hero.have-total-financial-control",
                    }),
                    intl.formatMessage({
                      id: "hero.organize-their-cells-and-small-groups",
                    }),
                  ]}
                />
              </div>
            </div>

            <div className="row">
              <WantToKnowButton />
            </div>
          </div>
        </div>
      </>
    )
  }

  const image = images[path]

  return (
    <div className="hero">
      <div className="container">
        <div className="column">
          <div className="title">{title}</div>

          <div className="description">{description}</div>

          <div className="call-to-action">
            <a
              href="https://materiais.atos6.com/lp_solucao_completa"
              className="btn-schedule btn-default"
              rel="noopener noreferrer"
              target="_blank"
            >
              {intl.formatMessage({ id: "schedule-demonstration.button" })}
            </a>
          </div>
        </div>

        <div className="column image">
          {image ? <img src={image} alt={title} /> : ""}
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  home: PropTypes.bool.isRequired,
}

Hero.defaultProps = {
  home: false,
}

export default Hero
