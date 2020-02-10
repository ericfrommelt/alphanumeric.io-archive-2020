import React from 'react'
import { css } from '@emotion/core'

const Info = () => {
  return (
    <div 
      css={css`
      display: grid;
      grid-template-columns: 12rem auto;
      `}>
      <div>
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
        >Projects + Prototypes</h3>
        <ul
          css={css`
            list-style-type: none;
            padding: 0;
            font-size: .7rem;
          `}>
          <li><a href="http://www.ericfrommelt.com">ericfrommelt.com</a></li>
          <li><a href="https://github.com/ericfrommelt">Github</a></li>
          <li css={css`
            text-decoration: line-through;
          `}>scenario74.com</li>
        </ul>
      </div>
      <div>
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
  )
}

export default Info