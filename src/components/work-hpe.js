import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkHPE = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "CloudCliff_8-24-2017-01.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "CyberCrime_8-15-2017-01.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "hpe-3.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "Storage_Myths_07-12-2017-02.jpg" }) {
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
      <h4 css={css`
        font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: .7rem;
        letter-spacing: .25rem;
        text-transform: uppercase;
        font-weight: 700;
        padding-top: 1rem;
        min-height: 4rem;
        margin: 30rem 0 0 0;
        grid-column: 3;
      `}>HPE</h4>

      {/* Cloud Cliff */}
      <div css={css`
        grid-column: 1 / span 10;
        grid-row: 3;
        z-index: 20;
        padding: 6rem 0 0 0;
        margin: -2rem;
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>

      {/* Cyber Crime */}
      <div css={css`
        grid-column: 3 / span 10;
        grid-row: 2;
        z-index: 10;
        padding: 0;
      `}>
        <Img fluid={data.image2.sharp.fluid}></Img>
      </div>

      {/* Genomic */}
      <div css={css`
        grid-column: 3 / span 10;
        grid-row: 4;
        padding: 6rem 0 0 0;
      `}>
        <Img fluid={data.image3.sharp.fluid}></Img>
      </div>

      {/* Flash Storage Myths */}
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

export default WorkHPE