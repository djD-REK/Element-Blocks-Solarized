
import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const { isDarkModeEnabled = false, text = "" } = props
  const modeClass = isDarkModeEnabled ? css(classes.dark) : css(classes.light)
  return <h1 className={modeClass}>{text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
