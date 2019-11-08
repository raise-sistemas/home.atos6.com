import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "react-intl"
import { Link } from "gatsby"
import Slick from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import parseIntlMessage from "./parseIntlMessage"

import pastorMembers from "../images/pastor-members.gif"
import cellsFeature from "../images/cells-feature.gif"
import financialFeature from "../images/financial-feature.gif"
import onlineDonations from "../images/online-donations.gif"
import teachingFeature from "../images/teaching-feature.gif"
import communicationFeature from "../images/communication-feature.gif"
import eventsManagementFeature from "../images/events-management-feature.gif"

import FeatureAccordion from "./feature_accordion"

const primaryFeatures = [
  "pastor-members",
  "cells",
  "financial",
  "online-donations",
]

const primaryFeatureImages = {
  "pastor-members": pastorMembers,
  cells: cellsFeature,
  financial: financialFeature,
  "online-donations": onlineDonations,
}

const secondaryFeatures = [
  "custom-app",
  "teaching",
  "event-management",
]

const secondaryFeatureImages = {
  "custom-app": communicationFeature,
  teaching: teachingFeature,
  "event-management": eventsManagementFeature,
}

const slickSettings = {
  dots: true,
  speed: 500,
  infinite: true,
  centerMode: true,
  centerPadding: "30px",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rows: 1,
}

const Why = ({ intl, markAsNew, langKey }) => {
  const handlePath = (path) => {
    if (langKey) {
      return `/${langKey}/${path}`
    }

    return path
  }

  const primaryFeatureItems = primaryFeatures.map(feature => ({
    name: intl.formatMessage({ id: `features.${feature}.name` }),
    description: intl.formatMessage({ id: `features.${feature}.description` }, parseIntlMessage),
    path: handlePath(`/features/${feature}`),
    image: primaryFeatureImages[feature],
  }))
  const secondaryFeatureItems = secondaryFeatures.map(feature => ({
    name: intl.formatMessage({ id: `features.${feature}.name` }),
    description: intl.formatMessage({ id: `features.${feature}.description` }, parseIntlMessage),
    path: handlePath(`/features/${feature}`),
    image: secondaryFeatureImages[feature],
  }))

  const items = primaryFeatureItems.concat(secondaryFeatureItems)

  const slideItems = items.map((item, index) => (
    <div key={index} className="why-feature-item">
      <img src={item.image} alt={item.name} />

      <div className="why-feature-item-detail">
        <span className="why-feature-item-detail-name">{item.name}</span>

        <span className="why-feature-item-detail-description">
          {item.description}
        </span>

        <Link to={item.path} className="know-more">
          {intl.formatMessage({ id: "know-more" })} <b>&#10230;</b>
        </Link>
      </div>
    </div>
  ))

  return (
    <div className="why">
      <div className="container">
        <div className="why-title">
          {intl.formatMessage({ id: "why.title" })}
        </div>

        <div className="why-briefing">
          {intl.formatMessage({ id: "why.briefing" })}
        </div>
      </div>

      <div className="why-features show-on-mobile">
        <Slick {...slickSettings}>{slideItems}</Slick>
      </div>

      <div className="why-features hide-on-mobile">
        <div className="container">
          <FeatureAccordion
            className="primary-features"
            markAsNew={markAsNew}
            items={primaryFeatureItems}
          />

          <FeatureAccordion
            markAsNew={markAsNew}
            imageOnLeft
            items={secondaryFeatureItems}
          />
        </div>
      </div>
    </div>
  )
}

Why.propTypes = {
  markAsNew: PropTypes.string.isRequired,
}

Why.defaultProps = {
  markAsNew: "",
}

export default injectIntl(Why)
