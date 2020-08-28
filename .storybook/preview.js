import { action } from "@storybook/addon-actions"
import { customBackgrounds } from "./custom-backgrounds"
import { customViewports } from "./custom-viewports"
import "@styles/main.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: customBackgrounds,
  },
  layout: "fullscreen",
  viewport: {
    viewports: customViewports,
  },
}
