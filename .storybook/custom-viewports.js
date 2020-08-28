import { screens } from "../designtokens"

export const customViewports = {
  iphone5: {
    name: "Iphone 5/SE",
    styles: {
      width: "320px",
      height: "568px",
    },
    type: "mobile"
  },
  iphoneX: {
    name: "Iphone X",
    styles: {
      width: "375px",
      height: "812px",
    },
    type: "mobile"
  },
  tailwindSM: {
    name: "Tailwind SM",
    styles: {
      width: `${screens.sm}px`,
      height: "720px",
    },
    type: "tablet",
  },
  tailwindMD: {
    name: "Tailwind MD",
    styles: {
      width: `${screens.md}px`,
      height: "720px",
    },
    type: "tablet",
  },
  tailwindLG: {
    name: "Tailwind LG",
    styles: {
      width: `${screens.lg}px`,
      height: "720px",
    },
  },
  tailwindXL: {
    name: "Tailwind XL",
    styles: {
      width: `${screens.xl}px`,
      height: "720px",
    },
  },
}
