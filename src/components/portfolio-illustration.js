import React from 'react'
import { css } from '@emotion/core'
import WorkIllustration from './work-illustration'

const IllustrationPortfolio = () => {
  return (
    <div css={css`
      display: grid;
      position: relative;
      grid-template-columns: repeat(12, 1fr);
    `}>
      <h3 css={css`
        grid-column: 1 / span 12;
        margin: 2rem;
        @media (min-width: 820px) {
          margin: 4rem 0 4rem -4rem;
          font-size: 8rem;
        }
      `}>Illustration</h3>
      <WorkIllustration></WorkIllustration>
    </div>
  )
}

export default IllustrationPortfolio