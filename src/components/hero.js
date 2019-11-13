import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

/* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 780px) / 2) 2rem;
  width: 100%;

  h1 {
    color: white;
    margin-top: 0;
  }

  a, p {
    color: white;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "26_s1m-1920.jpg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>Hello world.</h1>
        <p>I am <Link to="/about/">real</Link>.</p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero