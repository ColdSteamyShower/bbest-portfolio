import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />


