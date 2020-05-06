import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const { isDarkModeEnabled, darkEnd, darkStart, text } = props

  const now = new Date().getHours()
  const pmStart = darkStart < 12 ? darkStart + 12 : start
  const isDark = pmStart <= now || now < darkEnd
  const isDarkMode = isDarkModeEnabled && isDark
  const modeClass = isDarkMode ? css(classes.dark) : css(classes.light)

  return <h1 className={modeClass}>{text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
