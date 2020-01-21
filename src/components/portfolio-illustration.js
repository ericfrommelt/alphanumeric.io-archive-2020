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
        font-size: 16rem;
        position: absolute;
        margin-top: 8rem;
        margin-left: -16rem;
      `}>Illustration</h3>
      <WorkIllustration css={css`
        margin-top: 90rem;
      `}></WorkIllustration>
    </div>
  )
}

export default IllustrationPortfolio