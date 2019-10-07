import React, { useState, useEffect, useRef } from "react"
import random from "lodash/random"

export default ({ texts }) => {
  const [selectedText, setSelectedText] = useState(texts[0])
  const [animation, setAnimation] = useState('')
  const intervalRef = useRef({})

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSelectedText(texts[random(texts.length - 1)])
      setAnimation('fadeInUp')
    }, 3410)

    return function clear() {
      clearInterval(intervalRef.current)
    }
  }, [selectedText])

  return (
    <div className={`animation animated ${animation} infinite`}>
      {selectedText}
    </div>
  )
}
