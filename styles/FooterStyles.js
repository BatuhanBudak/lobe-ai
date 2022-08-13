import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 0 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  flex: 1 1;
  justify-content: space-between;
  max-width: 892px;
  padding: 62px 24px;

  @media (min-width: 650px) {
    flex-wrap: nowrap;
    gap: 1em;
  }
`;

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  padding-inline: 1rem;
  list-style: none;
  text-align: left;
  margin-bottom: 3rem;
  width: 35%;

  &:nth-child(2n + 1) {
    margin-right: 2rem;
  }
  @media (min-width: 650px) {
    &:nth-child(2n + 1) {
      margin-right: 0;
    }
    padding-inline: 0.5rem;
  }
`;
export const FooterListItem = styled.li`
  text-align: left;
  &:nth-child(1) {
    font-weight: var(--fw-bold);
  }
  margin: 0;
  margin-bottom: 1em;
`;

export const FooterListImageItem = styled.li`
  background-color: var(--clr-accent);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;

  transition: 0.1s ease-in;
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
`;

export const FooterRights = styled.div`
  font-size: 1rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > ul {
    text-align: center;
    width: 100%;
  }
  & > ul > li {
    &:nth-child(1) {
      font-weight: unset;
    }
    text-align: center;
    width: 100%;
    margin-bottom: 1em;
  }
  @media (min-width: 650px) {
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    order: -1;
    & > ul {
      padding: 0;
    }
    & > ul > li {
      text-align: left;
    }
  }
`;
export const LogoContainer = styled.div`
  width: 196px;
  height: 26px;
  margin-bottom: 2.5rem;
  @media (min-width: 650px) {
    min-width: 170px;
  }
`;
