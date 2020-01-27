import React from 'react'
import { css } from '@emotion/core'

const MotionPortfolio = () => {
  return (
    <div css={css`
      display: grid;
      position: relative;
      grid-template-columns: repeat(12, 1fr);
    `}>
      <h3 css={css`
        grid-column: 1 / span 12;
        margin: 2rem;
        @media (min-width:820px) {
          margin: 4rem 0 4rem -4rem;
          font-size: 8rem;
        }
      `}>Motion</h3>
      <div css={css`
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
        margin: 0 0 6rem 0;
        grid-column: 1 / span 11;
      `}>
        <iframe css={css`
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        `} src="https://player.vimeo.com/video/283314295" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>

      <div css={css`
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
        margin: 0 0 6rem 0;
        grid-column: 2 / span 11;
      `}>
        <iframe css={css`
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        `} src="https://player.vimeo.com/video/15885998" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default MotionPortfolio