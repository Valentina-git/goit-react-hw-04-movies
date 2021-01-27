import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  padding: 20px;
  border-bottom: 2px solid #ffdab9;
  box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
  .headerList {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .headerListItem:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavElem = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.63;
  color: #696969;
  text-decoration: none;
  text-transform: uppercase;

  &.${props => props.activeClassName} {
    color: red;
  }
`;
