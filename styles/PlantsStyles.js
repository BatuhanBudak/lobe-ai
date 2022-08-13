import styled from "styled-components";
import { DescDetailsSubTitle, DescTitle } from "./DescriptionStyles";
import { IntroVideoContainer } from "./IntroductionStyles";

export const PlantsSection = styled.section`
  overflow: hidden;
  max-width: 100%;
  padding: 5em 0 4em;
  & > h2,
  & > p {
    padding-inline: 2rem;
  }
  @media (min-width: 650px) {
    & > h2,
    & > p {
      padding-inline: 3rem;
    }
    & > p {
      max-width: 700px;
    }
  }
  @media (min-width: 1000px) {
    padding: 5em 6.25rem 4em;
    & > p:nth-child(2) {
      margin: auto;
      margin-top: 1em;
    }
  }
`;

export const ContentContainer = styled.div`
  max-height: 700px;
  @media (min-width: 1000px) {
    &:nth-of-type(2) > div + div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;
export const PlanstTitle = styled(DescTitle)`
  @media (min-width: 650px) {
    font-size: 56px;
  }
  @media (min-width: 1000px) {
    font-size: 64px;
  }
  @media (min-width: 1100px) {
    font-size: 66px;
    margin: auto;
  }
`;

export const DescSubTitle = styled(DescDetailsSubTitle)`
  text-align: left;
  max-width: 18ch;
  position: relative;
  z-index: 3;
  @media (min-width: 650px) {
    font-size: 2.25rem;
  }
  @media (min-width: 1000px) {
    font-size: 2.5rem;
    padding-inline: unset;
  }
`;

export const DescriptionDetails = styled.p`
  text-align: left;
  position: relative;
  font-weight: var(--fw-reg);
  font-size: var(--fs-body);
  line-height: 1.3;
  margin-block: 0.3em;
  @media (min-width: 650px) {
    font-size: 20px;
    max-width: 500px;
  }
  @media (min-width: 1000px) {
    font-size: 24px;
    max-width: 700px;
  }
  @media (min-width: 1100px) {
    font-size: 26px;
    max-width: 720px;
  }
`;
export const GreenSpan = styled.span`
  color: var(--clr-accent);
`;

export const PlantsVideoContainer = styled(IntroVideoContainer)`
  margin-bottom: -3rem;
  height: 562px;
  max-width: 598px;
  @media (min-width: 650px) {
    height: 600px;
  }
`;
export const Video = styled.video`
  height: 562px;
  max-width: 598px;
  background: var(--clr-white);
  text-align: center;
  @media (min-width: 650px) {
    width: 1500px;
    max-width: 1500px;
  }
`;

export const TextContainer = styled.div`
  margin-top: -6rem;
  padding-inline: 2rem;

  @media (min-width: 1200px) {
    max-width: 1088px;
    padding-inline: 6rem;
  }
`;
