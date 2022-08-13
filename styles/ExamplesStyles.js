import styled from "styled-components";
import { PlanstTitle, DescriptionDetails, GreenSpan } from "./PlantsStyles";
export const ExamplesSection = styled.section`
  width: 100%;
  padding-block: 0.5rem 5rem;
  padding-inline: 0;
  background-color: var(--clr-background);
  position: relative;
  max-width: 100%;
`;

export const ExampleTitleContainer = styled.div`
  padding-inline: 2rem;
  margin-bottom: 2.5rem;
`;

export const ExampleTitle = styled(PlanstTitle)``;
export const ExampleDetails = styled(DescriptionDetails)``;
export const ExampleGreen = styled(GreenSpan)``;

export const SplideContainer = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
`;
export const SplidesContainer = styled.div``;

export const VideoContainer = styled.div`
  width: 280px;
  height: 190px;
  padding: 12px 24px;
  background: #bcc2c5;
  position: relative;
  transition: transform 0.3s ease;
  border-radius: 18px;
  background: #bcc2c5;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 32px;
    background-color: transparent;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent);
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }
`;

export const VideoClip = styled.video`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 18px;
`;

export const VideoTitle = styled.p`
  position: absolute;
  top: -12px;
  left: 12px;
  font-weight: 700;
  color: #fff;
  z-index: 3;
  font-size: var(--fs-body);
`;
