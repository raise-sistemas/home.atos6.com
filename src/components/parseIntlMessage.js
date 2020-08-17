import React from "react"
import random from "lodash.random"

export default {
  span: v => <span key={random()}>{v}</span>,
  b: v => <b>{v}</b>,
  br: (_) => <br />
}
