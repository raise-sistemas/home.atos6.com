import React from "react"

const ImageOverlap = ({ over, under }) => (
  <div className="image-overlap">
    <img src={over} className="over" alt="" />
    <img src={under} className="under" alt="" />
  </div>
)

export default ImageOverlap
