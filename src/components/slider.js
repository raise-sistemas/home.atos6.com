import React, { PureComponent } from "react"
import Slick from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import arrowRight from "../images/arrow-right.png"
import arrowLeft from "../images/arrow-left.png"

const slickSettings = {
  dots: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  nextArrow: <img src={arrowRight} alt="" />,
  prevArrow: <img src={arrowLeft} alt="" />,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class Slider extends PureComponent {
  renderItems() {
    const { items } = this.props

    return items.map((item, index) => (
      <div key={index}>
        <img src={item.image} alt={item.description} />
      </div>
    ))
  }

  render() {
    const { text } = this.props

    return (
      <div className="container slider">
        <div className="slider-text">{text}</div>

        <div className="slider-items">
          <Slick {...slickSettings}>{this.renderItems()}</Slick>
        </div>
      </div>
    )
  }
}

export default Slider
