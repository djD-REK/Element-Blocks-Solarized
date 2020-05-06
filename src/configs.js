import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  text: {
    label: "Text content",
    type: ElementPropTypes.string,
  },
  isDarkModeEnabled: {
    label: "Enable Dark Mode",
    type: ElementPropTypes.bool,
  },
  darkModeHeader: {
    type: ElementPropTypes.sectionHeader,
  },
  darkStart: {
    label: "dark start (evening)",
    type: ElementPropTypes.number,
  },
  darkEnd: {
    label: "dark end (morning)",
    type: ElementPropTypes.number,
  },
}

export const defaultConfig = {
  text: "Light or Dark",
  isDarkModeEnabled: true,
  darkModeHeader: "Dark Mode Hours",
  darkStart: 8,
  darkEnd: 6,
}
