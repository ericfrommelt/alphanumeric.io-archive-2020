import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkWired = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "wired-okcupid.png" }) {
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
        margin: 2rem 0 0 0;
        grid-column: 9;
        grid-row: 6;
        z-index: 30;
        position: relative;
      `}>Wired</h4>

      <div css={css`
        grid-column: 1 / span 12;
        grid-row: 6;
        padding: 6rem 0 0 0;
        margin-left: -10rem;
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>
    </>
  )
}
export default WorkWired