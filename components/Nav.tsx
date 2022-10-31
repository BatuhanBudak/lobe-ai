import React from "react";
import {
  NavBar,
  NavList,
  NavLink,
  NavItem,
  NavButton,
} from "../styles/NavBarStyles";

interface Props {
  closeNav: () => void;
  navOpen: boolean;
}

export default function Nav({ closeNav, navOpen }: Props) {
  return (
    <NavBar navOpen={navOpen}>
      <NavList navOpen={navOpen} id="primary-navigation">
        <NavItem>
          <NavLink href="/#home" onClick={() => closeNav()}>
            Overview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#services" onClick={() => closeNav()}>
            Examples
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#about" onClick={() => closeNav()}>
            Tour
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#work" onClick={() => closeNav()}>
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#work" onClick={() => closeNav()}>
            Help
          </NavLink>
        </NavItem>
        <NavItem>
          <NavButton>Download</NavButton>
        </NavItem>
      </NavList>
    </NavBar>
  );
}
