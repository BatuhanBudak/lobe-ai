import styled from "styled-components";
import { IntroDownloadButton } from "./IntroductionStyles";
import { DescriptionItemTitle, DescriptionItem } from "./DescriptionStyles";

export const InfoCardsSection = styled.section`
  padding: 2rem 1rem 0;
  background-color: #f2f3f5;
  @media (min-width: 1100px) {
    padding: 2rem 6.25rem 0;
  }
`;

export const MediaScroller = styled.div`
  --spacer: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 60%;
  padding-inline: var(--spacer);
  padding-bottom: 60px;
  gap: 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  overscroll-behavior-inline: contain;
  @media (min-width: 650px) {
    grid-auto-columns: 45%;
  }
  @media (min-width: 1000px) {
    grid-auto-columns: auto;
  }
  @media (min-width: 1100px) {
    max-width: 1088px;
  }
`;

export const ScrollCard = styled.div`
  display: grid;
  grid-template-rows: min-content;
  place-items: center;
  gap: var(--spacer);
  background-color: var(--clr-white);
  min-height: 224px;
  max-width: 300px;
  padding: var(--spacer);
  border-radius: 20px;
  margin-bottom: 32px;
  & > div {
    margin: 0 auto;
    min-height: 73px;
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

export const CardButton = styled(IntroDownloadButton)`
  padding: 1em;
  font-size: 14px;
  padding: 6px 12px;
  text-transform: uppercase;
  font-weight: 900;
  margin-block: 0.8em;
`;

export const SoonButton = styled(CardButton)`
  background-color: var(--clr-light-grey);
  color: var(--clr-dark);
`;

export const CardTitle = styled(DescriptionItemTitle)`
  text-align: center;
  font-size: 16px;
`;
export const CardDetail = styled(DescriptionItem)`
  text-align: center;
  font-size: 16px;
`;
