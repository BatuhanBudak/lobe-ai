import styled from "styled-components";
import Image from "next/image";
import { DescTitle, DescriptionDetails, GreenSpan } from "./DescriptionStyles";

export const ShipSection = styled.section`
  overflow: hidden;
  max-width: 100%;
  padding: 3em 0 3em;
  position: relative;
  background-color: var(--clr-background);
`;
export const ContentContainer = styled.div`
  & > h2,
  & > p {
    padding-inline: 2rem;
  }
  position: relative;
  z-index: 2;
`;

export const ShipTitle = styled(DescTitle)``;
export const ShipDetails = styled(DescriptionDetails)`
  line-height: 1.3;
  margin-bottom: 2em;
`;

export const ChangingTitle = styled.span`
  transition: opacity ease-in;
  opacity: ${({ fadeState }) => (fadeState ? 0 : 1)};
`;

export const ShipGreen = styled(GreenSpan)``;

export const ShipLink = styled.a`
  text-decoration: none;
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  color: var(--clr-accent);
  transition: 0.4s ease;
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  &::after {
    position: absolute;
    content: url("/icons/right-arrow-green.svg");
    top: 50%;
    transform: translateY(-50%);
    right: -30%;
    width: 24px;
    height: 24px;
  }
`;

export const ShipBubblesContainer = styled.div`
  position: relative;
  margin-top: -240px;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ShipBubbles = styled.div`
  position: relative;
  width: 1600px;
  min-width: 1600px;
  max-width: 1600px;
  height: 600px;
  transform: translate(210px, -60px) scale(0.64);
`;

export const BubbleContainer = styled.div`
  position: absolute;

  &:nth-child(1) {
    left: 580px;
    top: 320px;
    transition-delay: 120ms;
  }
  &:nth-child(2) {
    left: 230px;
    top: 380px;
    transition-delay: 80ms;
  }
  &:nth-child(3) {
    left: 416.667px;
    top: 485px;
    transition-delay: 200ms;
  }
  &:nth-child(4) {
    left: 733.333px;
    top: 480px;
    transition-delay: 0ms;
  }
  &:nth-child(5) {
    left: 126.667px;
    top: 620px;
    transition-delay: 280ms;
  }
  &:nth-child(6) {
    left: 576.667px;
    top: 660px;
    transition-delay: 280ms;
  }
  &:nth-child(7) {
    left: 320px;
    top: 730px;
    transition-delay: 320ms;
  }
`;

export const Bubble = styled.figure`
  width: 90px;
  height: 90px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  background-color: ${({ logo }) => {
    switch (logo) {
      case "azure":
        return "#0089d6";
      case "arduino":
        return "#04ddb2";
      case "framer":
        return "#0e38b1";
      case "onnxai":
        return "#864bff";
      case "python":
        return "#17c37b";
      case "tensorflow":
        return "#fc3c2d";
      case "unity":
        return "#333333";
      default:
        return "#fff";
    }
  }};
  padding: 0;
  margin: 0;
`;

export const Icon = styled(Image)`
  width: 65px;
  height: 65px;
`;
