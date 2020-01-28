import React from 'react'
import { css } from '@emotion/core'

const Nameplate = () => {
  return (
    <div>
      <h3
        css={css`
          font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: .5rem;
          letter-spacing: .25rem;
          text-transform: uppercase;
          font-weight: 700;

          @media (min-width:820px) {
            margin: 35vh 0 .5rem .1rem;
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
  )
}

export default Nameplate