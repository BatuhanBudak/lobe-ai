import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  width: 100%;
  z-index: 9999;

  @media (min-width: 800px) {
    gap: 2em;
  }
`;

export const Blur = styled.div`
  visibility: ${(props) => (props.navOpen ? "visible" : "hidden")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 554.188px;
  background: hsla(0, 0%, 100%, 0.97);
  @supports (backdrop-filter: blur(20px)) {
    background-color: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(20px);
  }
  @media (min-width: 50em) {
    height: unset;
    bottom: 0;
    visibility: visible;
  }
`;

export const BlurMob = styled.div`
  visibility: ${(props) => (props.navOpen ? "hidden" : "visible")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: hsla(0, 0%, 100%, 0.97);
  @supports (backdrop-filter: blur(20px)) {
    background-color: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(20px);
  }
`;

export const StyledLogo = styled.div`
  width: 100px;
  height: 52px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavBar = styled.nav`
  position: absolute;

  color: var(--clr-dark);
  top: ${({ navOpen }) => (navOpen ? "80px " : "0")};
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  display: block;
  visibility: ${(props) => (props.navOpen ? "visible" : "hidden")};
  transform: ${({ navOpen }) => (navOpen ? "scale(1)" : "scale(0)")};
  opacity: ${({ navOpen }) => (navOpen ? "opacity(1)" : "opacity(0)")};
  transition: all 250ms ease;
  transform-origin: top right;
  box-shadow: var(--bs);
  // background-color: transparent;
  // @supports (backdrop-filter: blur(4rem)) {
  //   background: hsla(0, 0%, 100%, 0.8);
  //   backdrop-filter: blur(4rem);
  // }
  @media (min-width: 800px) {
    position: static;
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    box-shadow: none;
    background-color: transparent;
    backdrop-filter: none;
  }
`;

export const NavList = styled.ul`
  visibility: ${(props) => (props.navOpen ? "visible" : "hidden")};
  list-style: none;
  display: flex;
  height: 100%;
  font-size: var(--fs-body);
  padding: 1em 1.25em;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0;
  // background-color: hsla(0, 0%, 100%, 0.8);
  border-bottom: 0.2rem solid rgba(22, 224, 189, 0);
  @media (min-width: 800px) {
    visibility: visible;
    backgroundcolor: transparent;
    display: unset;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    justify-content: center;
    gap: 2em;
  }
`;

export const NavItem = styled.li`
  margin-block: 1em;
  width: 100%;
  @media (min-width: 800px) {
    margin: 0;
    width: unset;
    background-color: transparent;
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  color: var(--clr-grey);
  font-weight: var(--fw-semi-reg);
  font-size: inherit;
  text-align: left;
  text-transform: capitalize;
  text-decoration: none;
  transition: 0.2s ease-in;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
    color: var(--clr-dark);

    transform: translateY(-1px);
  }
  @media (min-width: 650px) {
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;

export const NavButton = styled.button`
  color: var(--clr-white);
  background-color: var(--clr-accent);
  font-size: var(--fs-body);
  width: 100%;
  text-align: center;
  border-radius: 50px;
  border: none;
  padding: 0.5em 1em;
  font-weight: 600;
  margin-block: 1.25em;
  @media (min-width: 800px) {
    width: unset;
    margin-block: unset;
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const NavToggle = styled.button`
  padding: 0.5em;
  cursor: pointer;
  right: 1em;
  top: 2.5em;
  z-index: 1000;
  border: 1px solid var(--clr-light-grey);
  background-color: var(--clr-light-grey);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hamburger = styled.span`
  display: block;
  position: relative;
  background-color: var(--clr-dark);

  width: 2em;
  height: 3px;
  border-radius: 1em;
  transition: transform 250ms ease-in-out;
  transform: ${({ navOpen }) => (navOpen ? "rotate(.625turn)" : "none")};

  &::before,
  &::after {
    background-color: var(--clr-dark);
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
  }
  &::before {
    top: 6px;
    transform: ${({ navOpen }) =>
      navOpen ? "rotate(90deg) translateX(-6px)" : "none"};
  }
  &::after {
    bottom: 6px;
    opacity: ${({ navOpen }) => (navOpen ? "0" : "unset")};
  }
`;
export const SROnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
