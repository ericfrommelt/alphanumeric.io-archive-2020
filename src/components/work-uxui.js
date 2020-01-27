import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkUxUi = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "twcbcc_stacked.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "voicezone.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "vbb_stacked.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <div css={css`
        grid-column: 1 / span 12;
        grid-row: 3;
        z-index: 20;
        margin-top: 4rem;
        @media (min-width:820px) {
          margin-left: -40vw;
        }
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>

      <div css={css`
        grid-column: 1 / span 12;
        grid-row: 2;
        z-index: 10;
        @media (min-width:820px) {
          margin-left: -40vw;
        }
      `}>
        <Img fluid={data.image2.sharp.fluid}></Img>
      </div>

      <div css={css`
        grid-column: 1 / span 12;
        grid-row: 4;
        padding: 6rem 0 0 0;
        @media (min-width:820px) {
          margin-left: -40vw;
        }
      `}>
        <Img fluid={data.image3.sharp.fluid}></Img>
      </div>
    </>
  )
}

export default WorkUxUi