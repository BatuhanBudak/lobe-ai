import styled from "styled-components";
import { MediaScroller } from "./InfoCardsStyles";
import { DescriptionDetails } from "./DescriptionStyles";
import Image from "next/image";

export const TestimonialsContainer = styled(MediaScroller)`
  --spacer: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 65%;
  padding-inline: 1.5rem;
  padding-block: 1rem 4rem;
  gap: var(--spacer);
  overflow-x: auto;
  scrollbar-width: none;
  overscroll-behavior-inline: contain;
  background-color: var(--clr-background);

  @media (min-width: 650px) {
    grid-auto-columns: 50%;
  }
  @media (min-width: 1000px) {
    margin-top: 2rem;
    grid-auto-columns: auto;
  }
  @media (min-width: 1200px) {
    max-width: 1088px;
  }
`;

export const TestimonialCardIndividual = styled.div`
  display: grid;
  grid-template-rows: min-content;
  min-height: 450px;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 20px;
  align-items: center;
  transition: 0.3s ease;
  box-shadow: 0 5px 80px -40px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
  }
  @media (min-width: 1200px) {
    &:nth-child(2) {
      margin-top: 2rem;
    }
    &:nth-child(3) {
      margin-top: 4rem;
    }
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
  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;
export const TestimonialCardName = styled(DescriptionDetails)`
  font-weight: 500;
  margin: 0;
  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;
export const TestimonialCardJob = styled(DescriptionDetails)`
  color: var(--clr-grey);
  margin-bottom: 16px;
  margin-top: 0;
  font-weight: 500;
  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;
