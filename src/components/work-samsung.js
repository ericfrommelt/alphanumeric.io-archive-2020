import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkSamsung = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "samsung.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <div css={css`
        grid-column: 2 / span 10;
        grid-row: 8;
        margin-top: 6rem;
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>
    </>
  )
}
export default WorkSamsung