import styled from "styled-components";
import { ExampleTitle } from "./ExamplesStyles";
import { IntroDownloadButton } from "./IntroductionStyles";

export const DownloadSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3.5rem 0;
  max-width: 100%;
  @media (min-width: 1200px) {
    gap: 4em;
  }
`;

export const DownloadleTitle = styled(ExampleTitle)`
  text-align: center;
  @media (min-width: 1200px) {
    max-width: 500px;
  }
`;
export const DownloadButton = styled(IntroDownloadButton)`
  &:hover {
    color: #fff;
    transform: scale3d(1.05, 1.05, 1.05);
    text-decoration: none;
    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.15);
  }
  @media (min-width: 650px) {
    padding: 1rem 2.5rem;
  }
`;
