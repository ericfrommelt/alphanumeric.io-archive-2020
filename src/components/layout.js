import React from "react"
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import Header from './header'
import useSiteMetadata from '../hooks/use-sitemetadata'

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
          <Header />
          <div 
            css={css`
              @media (min-width:820px) {
                height: 80vh;
              }
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
            <div>
              <h3
                css={css`
                  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: .5rem;
                  letter-spacing: .25rem;
                  text-transform: uppercase;
                  font-weight: 700;

                  @media (min-width:820px) {
                    margin: 45vh 0 .5rem .1rem;
                  }
                `}
              >Eric Frommelt</h3>
              <h2 
                css={css`
                  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: 1.4rem;
                  margin-left: -2px;
                  margin-top: .6rem;
                  margin-bottom: 1rem;
                `}>Designer and UX Engineer
              </h2>
              <p css={css`
                font-size: .8rem;
                margin-bottom: 2rem;
              `}>Telling stories at the intersection of design and development.</p>
            </div>

            <div class="wrap" 
              css={css`
              display: flex;
              `}>
              <div css={css`
                width: 25vw;
              `}>
                <h3
                  css={css`
                    font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: .5rem;
                    letter-spacing: .25rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    margin-bottom: 1rem;
                  `}
                >Skills</h3>
                <ul
                  css={css`
                    list-style-type: none;
                    padding: 0;
                    font-size: .7rem;
                  `}>
                  <li>UX/UI Design</li>
                  <li>HTML/CSS/JS</li>
                  <li>Art Direction</li>
                  <li>Visual Design</li>
                  <li>Illustration</li>
                  <li>Motion Design</li>
                </ul>

                <h3
                  css={css`
                    font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: .5rem;
                    letter-spacing: .25rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                  `}
                >Projects</h3>
                <ul
                  css={css`
                    list-style-type: none;
                    padding: 0;
                    font-size: .7rem;
                  `}>
                  <li>ericfrommelt.com</li>
                  <li>scenario74.com</li>
                </ul>
              </div>

              <div css={css`
                margin-left: 4rem;
              `}>
                <h3
                  css={css`
                    font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: .5rem;
                    letter-spacing: .25rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    margin-bottom: 1rem;
                  `}
                >About this site</h3>
                <p css={css`
                  font-size: .7rem;
                  margin-bottom: 2rem;
                `}>alphanumeric.io was designed in the browser with Visual Studio Code and the occasional foray into Sketch. Built with Gatsby.</p>
                <h3
                  css={css`
                    font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: .5rem;
                    letter-spacing: .25rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    margin-bottom: 1rem;
                  `}
                >Learning</h3>
                <p css={css`
                  font-size: .7rem;
                `}>I'm currently focused on:</p>
                <ul
                css={css`
                  list-style-type: none;
                  padding: 0;
                  font-size: .7rem;
                `}>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Analog synthesizers</li>
                  <li>Ableton</li>
                </ul>
              </div>
            </div>
          </div>
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