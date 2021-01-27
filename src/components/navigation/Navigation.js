import React from 'react';
import { useLocation } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import { Nav, NavElem } from './StyledNavigation';

const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <ul className="headerList">
        {mainRoutes.map(
          ({ path, name, exact, renderLink }) =>
            renderLink && (
              <li className="headerListItem" key={path}>
                <NavElem
                  to={{
                    pathname: path,
                    state: { from: location.pathname },
                  }}
                  exact={exact}
                  className="headerLink"
                  activeClassName="activeLink"
                >
                  {name}
                </NavElem>
              </li>
            ),
        )}
      </ul>
    </Nav>
  );
};

export default Navigation;
