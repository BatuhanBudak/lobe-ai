import useResponsiveNav from "../hooks/useResponsiveNav";
import Nav from "./Nav";

import {
  StyledHeader,
  Hamburger,
  SROnly,
  NavToggle,
  StyledLogo,
  Blur,
  BlurMob,
} from "../styles/NavBarStyles";
import { LobeLogo } from "./Icon";

export default function Header() {
  const [navToggled, windowWidth, toggleNav, closeNav] = useResponsiveNav();

  if (windowWidth) {
    if (windowWidth > 800) {
      return (
        <StyledHeader>
          <Blur navOpen={navToggled}></Blur>
          <StyledLogo>
            <LobeLogo />
          </StyledLogo>
          <Nav closeNav={closeNav} navOpen={navToggled} />
        </StyledHeader>
      );
    } else {
      return (
        <StyledHeader>
          <Blur navOpen={navToggled}></Blur>
          <BlurMob navOpen={navToggled} />
          <StyledLogo>
            <LobeLogo />
          </StyledLogo>
          <NavToggle
            aria-expanded={navToggled}
            onClick={toggleNav}
            aria-controls="primary-navigation"
          >
            <Hamburger navOpen={navToggled}></Hamburger>
            <SROnly>Menu</SROnly>
          </NavToggle>
          <Nav navOpen={navToggled} closeNav={closeNav} />
        </StyledHeader>
      );
    }
  } else {
    return (
      <StyledHeader>
        <StyledLogo>
          <LobeLogo />
        </StyledLogo>
      </StyledHeader>
    );
  }
}
