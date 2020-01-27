import React from "react"
import { css } from '@emotion/core'
import SEO from "../components/seo"
import Layout from "../components/layout"
import EditorialPortfolio from "../components/portfolio-editorial"
import MotionPortfolio from "../components/portfolio-motion"
import IllustrationPortfolio from "../components/portfolio-illustration"
import UxUiPortfolio from "../components/portfolio-uxui"

export default () => {

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <EditorialPortfolio />
        <UxUiPortfolio />
        <IllustrationPortfolio />
        <MotionPortfolio />
      </Layout>
    </>
  )
}


