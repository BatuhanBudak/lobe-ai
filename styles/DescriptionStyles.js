import styled from "styled-components";
import { IntroSecondTitle } from "./IntroductionStyles";
import Image from "next/image";

export const DescriptionSection = styled.section`
  padding: 2rem 2rem 1rem;
  background-color: #f2f3f5;
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
`;

export const DescScreenShootCont = styled.div`
  margin-top: 1.5em;
`;

export const DescScreenShoot = styled(Image)`
  max-width: 90%;
  margin: 0 auto;
`;

export const DescDetailsContainer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: space-around;
`;

export const DescDetailContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2em;
`;
export const DescriptionItemTitle = styled(DescriptionDetails)`
  font-weight: var(--fw-bold);
  text-align: left;
  margin-block: 0 0.2em;
`;
export const DescriptionItem = styled.p`
  text-align: left;
  font-weight: var(--fw-reg);
  font-size: var(--fs-body);
  margin: 0;
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
`;
