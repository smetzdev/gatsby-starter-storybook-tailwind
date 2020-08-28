import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article className="p-5">
      <h1 className="text-3xl">Iam a Headline</h1>
      <p className="text-lg text-indigo-500">
        Iam some Text... happy hacking with{" "}
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
