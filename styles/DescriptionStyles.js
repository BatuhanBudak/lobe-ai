import styled from "styled-components";
import { IntroSecondTitle } from "./IntroductionStyles";
import Image from "next/image";

export const DescriptionSection = styled.section`
  padding: 2rem 2rem 1rem;
  background-color: #f2f3f5;
  @media (min-width: 1000px) {
    padding: 2rem 4rem 1rem;
  }
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 6.25rem 1rem;

    & > p:last-child {
      padding-left: 6.25rem;
      max-width: 700px;
    }
  }
`;

export const DescTitle = styled(IntroSecondTitle)`
  text-align: left;
  max-width: 18ch;
`;
export const GreenSpan = styled.span`
  color: var(--clr-accent);
`;

export const DescriptionDetails = styled.p`
  text-align: left;
  font-weight: var(--fw-reg);
  font-size: var(--fs-body);

  @media (min-width: 1000px) {
    max-width: 650px;
  }
`;

export const DescScreenShootCont = styled.div`
  margin-top: 1.5em;
  @media (min-width: 1100px) {
    margin-left: -4rem;
  }
`;

export const DescScreenShoot = styled(Image)`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: 1100px) {
    max-width: 100%;
    margin: unset;
    margin-left: -4rem;
  }
`;

export const DescDetailsContainer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: space-around;

  @media (min-width: 1000px) {
    grid-auto-flow: column;
    gap: 1em;
  }
`;

export const DescDetailContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2em;

  @media (min-width: 1000px) {
    flex-direction: column;
  }
`;
export const DescriptionItemTitle = styled(DescriptionDetails)`
  font-weight: var(--fw-bold);
  text-align: left;
  margin-block: 0 0.2em;
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;
export const DescriptionItem = styled.p`
  text-align: left;
  font-weight: var(--fw-reg);
  font-size: var(--fs-body);
  margin: 0;
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const DescDetailsSVGContainer = styled.div`
  max-width: 48px;
`;

export const DescDetailsSVG = styled(Image)`
  width: 100%;
  border-radius: 14px;
`;

export const DescDetailsSubTitle = styled.h3`
  font-size: var(--fs-h3);
  margin-block: 1em 0.2em;
  @media (min-width: 650px) {
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    font-size: 2.5rem;
    padding-inline: 6.25rem;
  }
`;
