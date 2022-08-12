import styled from "styled-components";
import { DescDetailsSubTitle, DescTitle } from "./DescriptionStyles";
import { IntroVideoContainer } from './IntroductionStyles';

export const PlantsSection = styled.section`
  overflow: hidden;
  max-width: 100%;
  padding: 5em 0 4em;
  & > h2,
  & > p {
    padding-inline: 2rem;
  }
`

export const ContentContainer = styled.div`

`
export const PlanstTitle = styled(DescTitle)`

`

export const DescSubTitle = styled(DescDetailsSubTitle)`
  text-align: left;
  max-width: 18ch;
`;

export const DescriptionDetails = styled.p`
  text-align: left;
  font-weight: var(--fw-reg);
  font-size: var(--fs-body);
  line-height:1.3;
  margin-block: .3em;
`;
export const GreenSpan = styled.span`
  color: var(--clr-accent);
`;

export const PlantsVideoContainer = styled(IntroVideoContainer)`
 
  margin-bottom: -3rem;
`;
export const Video = styled.video`
  max-width: 140%;
  width: 140%;
  background: var(--clr-white);
  text-align: center;
`;

export const TextContainer = styled.div`
margin-block: 4rem 3rem;
padding-inline: 2rem;
`