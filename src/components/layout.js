import React from "react"
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Nameplate from '../components/nameplate'
import Info from '../components/info'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
  <>
    <Global 
      styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          ::selection {
            background-color: red;
            color: white;
          }

          a { 
            text-decoration: none;
            color: #000;
            }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 18px;
            line-height: 1.8;

            /* remove margin for the main div that gatsby mounts into */
            > div {
              margin-top: 0;
            }

            h1, h2, h3, h4, h5, h6 {
              color: #222;
              line-height: 1.1;
              font-family: "Quarto A", "Quarto B", Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              font-style: normal;
              font-weight: 700;
            }

              + * { 
                margin-top: 0.5rem;
            }

            h1 { font-size: 4rem; }
            h2 { font-size: 3rem; }
            h3 { font-size: 2rem; }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `} 
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://use.typekit.net/cni2rpi.css"></link>
        <link rel="stylesheet" href="https://cloud.typography.com/7804816/6709192/css/fonts.css" />
      </Helmet>
      <main
        css={css`
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
        `}
      >
        {/* Left */}
        <div 
          css={css`
            @media (min-width:820px) {
              position: fixed;
              width: 50vw;
              height: 100vh;
            }
            background: #fff;
            padding: 2rem;
          `}
          >
          <Nameplate />
          <Info />
        </div>

        {/* Right */}
        <div 
          css={css`
            @media (min-width:820px) {
              width: 50vw;
              margin-left: 50vw;
            }
            margin-top: 0;
          `}>
          <section
          css={css`
            min-height: 100vh;
            background: whitesmoke;
            color: black;
          `}>
          {children}
          </section>
        </div>
      </main>
  </>
  )
}

export default Layout