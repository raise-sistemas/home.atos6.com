import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import Slick from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import WantToKnowButton from "./WantToKnowButton"

import parseIntlMessage from "./parseIntlMessage"

const slickSettings = {
  dots: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
}

const Info = ({ intl, organizationsCount, testimonials }) => {
  const sliderRef = useRef(null)

  const renderTestimonialItems = () =>
    testimonials.map((testimonial, index) => (
      <div key={index} className="info-testimonials-item">
        <div className="column">
          <div className="testimonial-content-video">
            <iframe
              key={index}
              width="580"
              height="299"
              src={`${testimonial.video}?mode=opaque&amp;rel=0&amp;autohide=1&amp;wmode=transparent`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        <div className="column">
          <div className="testimonial-content-text">
            <div className="testimonial-text">{testimonial.text}</div>

            <div className="testimonial-author">
              {testimonial.author}

              <span>{testimonial.author_title}</span>
            </div>
          </div>
        </div>
      </div>
    ))

  const sliderSettings = { ...slickSettings }
  sliderSettings.appendDots = dots => (
    <div>
      <ul>
        {dots}

        <li
          className="next-testimonial"
          onClick={() => sliderRef.current.slickNext()}
        >
          {intl.formatMessage({ id: "info.next-testimonial" })}{" "}
          <span>&#10142;</span>
        </li>
      </ul>
    </div>
  )

  return (
    <div className="info">
      <div className="container">
        <div className="info-title">
          {intl.formatMessage(
            { id: "info.title" },
            { count: organizationsCount }
          )}
        </div>

        <div className="info-description">
          {intl.formatMessage({ id: "info.description" }, parseIntlMessage)}
        </div>

        <div className="info-testimonials">
          <Slick {...sliderSettings} ref={sliderRef}>
            {renderTestimonialItems()}
          </Slick>
        </div>

        <WantToKnowButton />
      </div>
    </div>
  )
}

export default injectIntl(Info)
