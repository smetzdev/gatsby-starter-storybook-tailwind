import React from "react"
import Header from "@components/header"

export default {
  title: "Header",
  component: Header,
  args: {
    title: "Gatsby Starter Storybook and Tailwind inside Storybook",
  },
}

export const Base = args => <Header {...args} />
