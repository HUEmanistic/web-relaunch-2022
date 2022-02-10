import React, { useState, useEffect } from "react"
import { useHistory, useLocation  } from "react-router-dom";
import {
  Navigation,
  NavStyle,
  NavBrandStyle,
  NavCollapse,
  NavToggler,
  LogoFade,
  LinkBlack,
  DonateLink,
  MenuLink,
  MenuList,
  TwitterLogo,
  FBLogo,
  LogoImg,
  InstaLogo,
  SocialMediaDiv,
  TshirtLogo,
  DonateButton,
  PulsateButton,
  InMenuLink,
  MobileLink,
} from "../styles/navbar_style";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarSolid, setNavbarSolid] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();
  const route1 = () => {
    history.push("/about_our_mission");
  };
  const route2 = () => {
    history.push("/main");
  };
  const route3 = () => {
    history.push("/about_us");
  };


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavbarSolid(true);
    } else {
      setNavbarSolid(false);
    }
  }

  
  
  window.addEventListener("scroll", changeBackground)

  return (
    <Navigation light expand="md" style={{ backgroundColor: navbarSolid ? "white" : null, transition: "background-color 1s ease", 
      
    }}>
      
      <NavBrandStyle>
        <LogoFade >
          <LogoImg navbarSolid={navbarSolid} onClick={route2} />
        </LogoFade>
      </NavBrandStyle>
      <NavToggler onClick={toggle} />
      <NavCollapse isOpen={isOpen} navbar>
        <NavStyle navbar>
          <MenuList>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack onClick={route2}>Home</LinkBlack>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack>Anti-Racism Programs</LinkBlack>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <InMenuLink href="https://www.aclu.org/issues/criminal-law-reform/reforming-police/aclu-apps-record-police-conduct">
                    ACLU's Mobile Justice
                  </InMenuLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack> Who We Are</LinkBlack>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem onClick={route1}>
                  Vision &amp; Mission Statement
                </DropdownItem>
                <DropdownItem onClick={route3}>
                  The Humans Behind HUEmanistic
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <MenuLink to="/contact">Contact </MenuLink>
              </DropdownToggle>
            </UncontrolledDropdown>
          </MenuList>
        </NavStyle>

        <SocialMediaDiv>
          {" "}
          <a href="https://twitter.com/huemanistic">
            <TwitterLogo />
          </a>
          <a href="https://www.facebook.com/HUEmanistic/">
            <FBLogo />
          </a>
          <a href="https://www.instagram.com/huemanistic_commonground/">
            <InstaLogo />
          </a>
          <a href="https://www.bonfire.com/store/the-huemanistic-store/">
            <TshirtLogo />
          </a>
        </SocialMediaDiv>
        <PulsateButton>
          <DonateLink to="/donate">
            <DonateButton>Donate / Volunteer</DonateButton>
          </DonateLink>
        </PulsateButton>
<PulsateButton>
        <DonateLink to="/donate">
          <MobileLink>Donate</MobileLink>
        </DonateLink>
        </PulsateButton>
      </NavCollapse>
    </Navigation>
  );
};

export default Navibar;
