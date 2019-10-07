import React from "react"
import { injectIntl } from "react-intl"
import Slick from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import WantToKnowButton from "./WantToKnowButton"

import arrowRight from "../images/arrow-right.png"
import arrowLeft from "../images/arrow-left.png"
import customApp from "../images/custom_app.png"
import membersAndNewsConverts from "../images/members_and_new_converts.png"
import intelligentDonation from "../images/intelligent_donation.png"
import teaching from "../images/teaching.png"
import cells from "../images/cells.png"
import financial from "../images/financial.png"
import events from "../images/events.png"

const slickSettings = {
  dots: false,
  speed: 500,
  infinite: true,
  className: "center",
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <img src={arrowRight} alt="" />,
  prevArrow: <img src={arrowLeft} alt="" />,
  rows: 1,
}

const features = [
  "custom-app",
  "members-and-new-converts",
  "intelligent-donation",
  "teaching",
  "cells",
  "financial",
  "events",
]

const feature_images = {
  "custom-app": customApp,
  "members-and-new-converts": membersAndNewsConverts,
  "intelligent-donation": intelligentDonation,
  teaching: teaching,
  cells: cells,
  financial: financial,
  events: events,
}

const FeatureIcons = ({ intl }) => {
  const items = () =>
    features.map((feature, index) => (
      <div className="feature-icon" key={index}>
        <img
          src={feature_images[feature]}
          alt={intl.formatMessage({ id: `feature-icons.${feature}.title` })}
        />

        <div className="feature-title">
          {intl.formatMessage({ id: `feature-icons.${feature}.title` })}
        </div>

        <div className="feature-description">
          {intl.formatMessage({ id: `feature-icons.${feature}.description` })}
        </div>
      </div>
    ))

  const slider = () => <Slick {...slickSettings}>{items()}</Slick>

  return (
    <div id="features" className="feature-icons">
      <div className="container">
        <span className="title">
          {intl.formatMessage({ id: "feature-icons.title" })}
        </span>

        <div className="items hide-on-mobile">{items()}</div>

        <div className="items show-on-mobile">{slider()}</div>

        <WantToKnowButton />
      </div>
    </div>
  )
}

export default injectIntl(FeatureIcons)
