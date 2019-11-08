import React from "react"
import TextLoop from "react-text-loop"

export default ({ texts }) => (
  <TextLoop
    interval={5000}
    adjustingSpeed={1000}
    children={texts.map((text) => (<div className="animated">{text}</div>))}
      className="animation"
      noWrap={false}
  />
)
