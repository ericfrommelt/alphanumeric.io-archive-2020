import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import MastheadDupe from '../components/masthead-dupe'

const NavLink = styled(Link)`
  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #222;
  font-size: .8rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  >
    <Link to='/'><MastheadDupe></MastheadDupe></Link>
  </header>
)

export default Header