import React from 'react'
import { css } from '@emotion/core'

const Masthead = () => (
  <div>
    <h1
      css={css`
        text-transform: uppercase;
        font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        letter-spacing: 0rem;
        border: 2px solid #000;
        padding: 12px 14px 12px 16px;
        color: white;
        background: black;
      `}
    >Alphanumeric</h1>
    <h1
      css={css`
        text-transform: uppercase;
        font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        letter-spacing: 0rem;
        padding: 12px 14px 12px 16px;
        color: black;
      `}
    >Alphanumeric</h1>
    <h1
    css={css`
      text-transform: uppercase;
      font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1rem;
      letter-spacing: 0rem;
      border: 2px solid #000;
      padding: 12px 14px 12px 16px;
      color: white;
      background: black;
    `}
  >Alphanumeric</h1>
  </div>
)

export default Masthead
