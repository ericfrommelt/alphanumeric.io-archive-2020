import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Masthead from '../components/masthead'

const NavLink = styled(Link)`
  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #222;
  font-size: .8rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  /* text-transform: uppercase; */
  text-decoration: none;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      margin: 3rem 0;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 780px - 0.5rem) / 2);
      align-items: center;
    `}
  >
    <NavLink to='/'><Masthead></Masthead></NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to='/' activeClassName="current-page">Home</NavLink>
      <NavLink to='/about/' activeClassName="current-page">About</NavLink>
      <NavLink to='/contact/' activeClassName="current-page">Contact</NavLink>
    </nav>
  </header>
)

export default Header