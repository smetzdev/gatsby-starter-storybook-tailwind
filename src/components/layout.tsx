import React from "react"
import Header from "./header"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header title="Gatsby Starter Storybook and Tailwind" />
      {children}
    </>
  )
}

export default Layout
