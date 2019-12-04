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
            position: fixed;
            background: #fff;
            width: 50vw;
            height: 100vh;
            padding: 2rem;
          `}
          >
          <Header />
          <div 
            css={css`
              height: 80vh;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
            <div>
              <h3
                css={css`
                  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: .5rem;
                  margin: 4rem 0 0 0;
                  letter-spacing: .25rem;
                  text-transform: uppercase;
                  font-weight: 700;
                `}
              >Eric Frommelt</h3>
              <h2 
                css={css`
                  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: 1.4rem;
                  margin-left: -3px;
                  margin-top: .6rem;
                `}>Designer and developer.
              </h2>
            </div>

            <div class="wrap" 
              css={css`
              display: flex;
              `}>
              <div>
                <h3
                  css={css`
                    font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: .7rem;
                    letter-spacing: .25rem;
                    text-transform: uppercase;
                    font-weight: 700;
                  `}
                >Skills</h3>
                <ul
                  css={css`
                    list-style-type: none;
                    padding: 0;
                    font-size: .7rem;
                  `}>
                  <li>Art Direction</li>
                  <li>Visual Design</li>
                  <li>Illustration</li>
                  <li>Motion Design</li>
                  <li>HTML, CSS, JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div 
          css={css`
            width: 50vw;
            margin-top: 0;
            margin-left: 50vw;
          `}>
          <section
          css={css`
            min-height: 100vh;
            background: #ccc;
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