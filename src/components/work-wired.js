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
      <div css={css`
        grid-column: 1 / span 12;
        grid-row: 7;
        margin-top: 12rem;
        @media (min-width:820px) {
          margin-left: -20rem;
        }
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>
    </>
  )
}
export default WorkWired