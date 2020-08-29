import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, PageSidebar, NavGroup } from "@patternfly/react-core";
import { LayoutTheme } from "../LayoutUtils";

export const SidebarApp: React.FC = () => {
  const renderPageNav = () => {
    return (
      <Nav id="nav-primary-simple" aria-label="Nav" theme={LayoutTheme}>
        <NavGroup title="Group1">
          <NavItem>
            <NavLink to="/page1" activeClassName="pf-m-current">
              Page1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/page2" activeClassName="pf-m-current">
              Page2
            </NavLink>
          </NavItem>
        </NavGroup>
        <NavGroup title="Group2">
          <NavItem>
            <NavLink to="/page3" activeClassName="pf-m-current">
              Page3
            </NavLink>
          </NavItem>
        </NavGroup>
      </Nav>
    );
  };

  return <PageSidebar nav={renderPageNav()} theme={LayoutTheme} />;
};
