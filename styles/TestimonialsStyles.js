import styled from "styled-components";
import { MediaScroller, ScrollCard } from "./InfoCardsStyles";
import { DescriptionDetails } from "./DescriptionStyles";

export const TestimonialsContainer = styled(MediaScroller)`
  --spacer: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80%;
  padding-inline: var(--spacer);
  padding-bottom: 60px;
  gap: var(--spacer);
  overflow-x: auto;
  scrollbar-width: none;
  overscroll-behavior-inline: contain;
  background-color: var(--clr-background);
`;

export const TestimonialCardIndividual = styled.div`
  display: grid;
  grid-template-rows: min-content;
  gap: var(--spacer);
  background-color: #ffffff;
  min-height: 224px;
  max-width: 332px;
  padding: var(--spacer);
  border-radius: 20px;
  margin-bottom: 32px;
  place-items: start;
`;

export const TestimonialPersonalContainer = styled.div``;

export const TestimonialCardDesc = styled(DescriptionDetails)``;
export const TestimonialCardName = styled(DescriptionDetails)`
  font-weight: 900;
`;
export const TestimonialCardJob = styled(DescriptionDetails)`
  color: var(--clr-grey);
`;
