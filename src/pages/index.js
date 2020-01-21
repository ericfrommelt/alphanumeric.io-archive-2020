import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import EditorialPortfolio from "../components/portfolio-editorial"
import MotionPortfolio from "../components/portfolio-motion"
import IllustrationPortfolio from "../components/portfolio-illustration"

export default () => {

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <EditorialPortfolio />
        <MotionPortfolio />
        <IllustrationPortfolio />
      </Layout>
    </>
  )
}


