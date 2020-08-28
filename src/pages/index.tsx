import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article className="p-5 container">
      <h1 className="md:text-2xl">Hello there!</h1>
      <p className="text-lg text-gray-700">
        Happy hacking with{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://storybook.js.org/"
        >
          Storybook
        </a>{" "}
        and{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </a>
        !
      </p>
    </article>
  </Layout>
)

export default IndexPage
