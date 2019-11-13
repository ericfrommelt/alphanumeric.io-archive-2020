import React from 'react'
import { css } from '@emotion/core'

const Masthead = () => (
  <h1
    css={css`
      text-transform: uppercase;
      font-family: stratum-2-web,sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 1rem;
      letter-spacing: .2rem;
      border: 2px solid #000;
      padding: 12px 14px 12px 16px;
      color: white;
      background: black;
    `}
  >Alphanumeric</h1>
)

export default Masthead
