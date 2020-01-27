import React from 'react'
import { css } from '@emotion/core'
import WorkHPE from './work-hpe'
import WorkWired from './work-wired'
import WorkSamsung from './work-samsung'

const EditorialPortfolio = () => {
  return (
    <div css={css`
      display: grid;
      position: relative;
      grid-template-columns: repeat(12, 1fr);
    `}>
      <h3 css={css`
        font-size: 8rem;
        grid-column: 1 / span 12;
        margin: 4rem 0 4rem -4rem;
      `}>Editorial</h3>
      <WorkHPE></WorkHPE>
      <WorkWired css={css`
        margin-top: 8rem;
      `}></WorkWired>
      <WorkSamsung></WorkSamsung>
    </div>
  )
}

export default EditorialPortfolio