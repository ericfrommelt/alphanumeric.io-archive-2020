import React from "react"
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import Header from './header'
import useSitemetadata from '../hooks/use-Sitemetadata'

const Layout = ({ children }) => {
  const { title, description } = useSitemetadata();

  return (
  <>
    <Global 
      styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
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
              font-weight: 400;
            }

              + * { 
                margin-top: 0.5rem;
            }

            h1 { font-size: 4rem; }
            h2 { font-size: 3rem; }
            h3 { font-size: 2rem;}

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
      <Header />
      <main
        css={css`
          margin: 4rem auto 4rem;
          max-width: 90vw;
          width: 780px;
        `}
      >
        {children}
      </main>
  </>
  )
}

export default Layout