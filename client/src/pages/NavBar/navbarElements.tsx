import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #1a9ff1;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100%;
`

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`
export const NavLinkButton = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`
export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    text-align:center;
`
export const TitleButton = styled.h1`
    font-size: 0.8em;
    text-align: center;
    width: 100%;
    color: #fff;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 3px;
`