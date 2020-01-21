import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkIllustration = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "auto-intel2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "quant-junkies2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "visiond-for-space.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "ShotLink_Photo.jpg" }) {
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
        grid-column: 1 / span 10;
        grid-row: 3;
        z-index: 20;
        padding: 6rem 0 0 0;
        margin: -2rem;
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>

      <div css={css`
        grid-column: 3 / span 10;
        grid-row: 2;
        z-index: 10;
        padding: 0; 
        margin-top: 30rem;
      `}>
        <Img fluid={data.image2.sharp.fluid}></Img>
      </div>

      <div css={css`
        grid-column: 1 / span 12;
        grid-row: 4;
        padding: 6rem 0 0 0;
        margin-left: -10rem;
      `}>
        <Img fluid={data.image3.sharp.fluid}></Img>
      </div>

      <div css={css`
        grid-column: 1 / span 10;
        grid-row: 5;
        padding: 6rem 0 0 0;
        margin: -2rem;
      `}>
        <Img fluid={data.image4.sharp.fluid}></Img></div>
    </>
  )
}

export default WorkIllustration