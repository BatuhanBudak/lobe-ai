import styled from "styled-components";
import { NavButton } from "./NavBarStyles";

export const IntroSection = styled.section`
  overflow: hidden;
  max-width: 100%;
  padding: 5em 0 4em;
`;
export const IntroVideoContainer = styled.div`
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin: 0 auto;
  margin-bottom: -5rem;
`;
export const FirstVideo = styled.video`
  max-width: 100%;
  width: 100%;
  background: var(--clr-white);
  text-align: center;
`;

export const IntroSecond = styled.div`
  padding-inline: 1rem;
`;

export const IntroSecondTitle = styled.h2`
  font-size: var(--fs-h2);
  font-weight: 900;
  color: var(--clr-dark);
  text-align: center;
  line-height: 1.2;
  margin-block: 0.3em;
`;
export const IntroSecondGreen = styled.span`
  display: block;
  color: var(--clr-accent);
  transition: opacity ease-in;
  opacity: ${({ fadeState }) => (fadeState ? 0 : 1)};
`;
export const IntroSecondDesc = styled.p`
  text-align: center;
  font-weight: var(--fw-semi-reg);
  font-size: var(--fs-body);
  max-width: 30ch;
  margin: 0 auto;
`;

export const IntroSecondButtonGrup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroDownloadButton = styled(NavButton)`
  width: unset;
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  padding: 0.7em 1.75em;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0 10px 20px -8px transparent;
  &:hover {
    transform: scale(1.1);
  }
`;

export const IntroWatchButton = styled(IntroDownloadButton)`
  color: var(--clr-accent);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.3em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
