import useResponsiveNav from '../hooks/useResponsiveNav';
import Nav from './Nav';
import Image from 'next/image';
import logo from '../public/vercel.svg';
import { StyledHeader, Hamburger, SROnly, NavToggle, StyledLogo } from '../styles/NavBarStyles'

export default function Header() {

    const [navToggled, windowWidth, toggleNav, closeNav] = useResponsiveNav();

    if (windowWidth) {
        if (windowWidth > 800) {
            return (
                <StyledHeader >
                    <StyledLogo>
                        <Image src={logo} alt='lobe logo' />
                    </StyledLogo>
                    <Nav closeNav={closeNav} navOpen={navToggled} />
                </StyledHeader>
            );
        } else {
            return (
                <StyledHeader navToggled={navToggled} >
                    <StyledLogo>
                        <Image src={logo} alt='lobe logo' />
                    </StyledLogo>
                    <NavToggle
                        aria-expanded={navToggled}
                        onClick={toggleNav}
                        navOpen={navToggled}
                        aria-controls="primary-navigation"
                    >
                        <Hamburger navOpen={navToggled} ></Hamburger>
                        <SROnly >Menu</SROnly>
                    </NavToggle>
                    <Nav navOpen={navToggled} closeNav={closeNav} />
                </StyledHeader>
            );
        }
    } else {
        return <StyledHeader >
            <StyledLogo>
                <Image src={logo} alt='lobe logo' />
            </StyledLogo>
        </StyledHeader>
    }

}
