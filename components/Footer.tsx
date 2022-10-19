import {
  StyledFooter,
  FooterList,
  FooterListItem,
  FooterListImageItem,
  FooterRights,
  FooterContent,
  LogoContainer,
} from "../styles/FooterStyles";
import Image from "next/image";

import facebookLogo from "../public/icons/facebook.svg";
import twitterLogo from "../public/icons/twitter.svg";
import youtubeLogo from "../public/icons/youtube.svg";
import { LobeLogo } from "./Icon";
export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterList>
          <FooterListItem>About</FooterListItem>
          <FooterListItem>Download</FooterListItem>
          <FooterListItem>Overview</FooterListItem>
          <FooterListItem>Examples</FooterListItem>
          <FooterListItem>Blog</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>General</FooterListItem>
          <FooterListItem>Notice</FooterListItem>
          <FooterListItem>License</FooterListItem>
          <FooterListItem>Press Inquiry</FooterListItem>
          <FooterListItem>Press Images</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Resources</FooterListItem>
          <FooterListItem>Help</FooterListItem>
          <FooterListItem>Tour</FooterListItem>
          <FooterListItem>Contact</FooterListItem>
          <FooterListItem>Privacy</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListImageItem>
            <Image src={facebookLogo} alt="reddit logo" />
          </FooterListImageItem>
          <FooterListImageItem>
            <Image src={twitterLogo} alt="twitter logo" />
          </FooterListImageItem>
          <FooterListImageItem>
            <Image src={youtubeLogo} alt="youtube logo" />
          </FooterListImageItem>
        </FooterList>
        <FooterRights>
          <LogoContainer>
            <LobeLogo />
          </LogoContainer>
          <FooterList>
            <FooterListItem>A product by Microsoft.</FooterListItem>
            <FooterListItem>All rights reserved.</FooterListItem>
            <FooterListItem>© Microsoft 2021</FooterListItem>
          </FooterList>
        </FooterRights>
      </FooterContent>
    </StyledFooter>
  );
}
