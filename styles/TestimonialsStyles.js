import styled from "styled-components";
import { MediaScroller } from "./InfoCardsStyles";
import { DescriptionDetails } from "./DescriptionStyles";
import Image from "next/image";

export const TestimonialsContainer = styled(MediaScroller)`
  --spacer: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80%;
  padding-inline: 1.5rem;
  padding-block: 5rem 11.25rem;
  gap: var(--spacer);
  overflow-x: auto;
  scrollbar-width: none;
  overscroll-behavior-inline: contain;
  background-color: var(--clr-background);
`;

export const TestimonialCardIndividual = styled.div`
  display: grid;
  grid-template-rows: min-content;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 80px 120px -40px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
  }
`;
export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 40px;
`;
export const Avatar = styled(Image)`
  border-radius: 32px;
`;

export const TestimonialPersonalContainer = styled.div`
  align-self: end;
`;

export const TestimonialCardDesc = styled(DescriptionDetails)`
  padding-bottom: 32px;
  margin: 0;
`;
export const TestimonialCardName = styled(DescriptionDetails)`
  font-weight: 500;
  margin: 0;
`;
export const TestimonialCardJob = styled(DescriptionDetails)`
  color: var(--clr-grey);
  margin-bottom: 16px;
  margin-top: 0;
  font-weight: 500;
`;
