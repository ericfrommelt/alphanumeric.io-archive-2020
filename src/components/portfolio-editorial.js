import React from 'react'
import { css } from '@emotion/core'
import WorkHPE from './work-hpe'
import WorkWired from './work-wired'

const EditorialPortfolio = () => {
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
      `}>Editorial</h3>
      <WorkHPE></WorkHPE>
      <WorkWired></WorkWired>
    </div>
  )
}

export default EditorialPortfolio