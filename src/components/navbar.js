import React from "react"
import { useHistory } from "react-router-dom";
import {Tooltip} from "reactstrap"
import {
  Navigation,
  NavStyle,
  NavBrandStyle,
  NavCollapse,
  NavToggler,
  LogoFade,
  LinkBlack,
  DonateLink,
  // MenuLink,
  MenuList,
  TwitterLogo,
  FBLogo,
  LogoImg,
  InstaLogo,
  SocialMediaDiv,
  TshirtLogo,
  DonateButton,
  PulsateButton,
  // InMenuLink,
  MobileLink,
} from "../styles/navbar_style";

import {
  UncontrolledDropdown,
  DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";

const Navibar = () => {


  const history = useHistory();
  // const route1 = () => {
  //   history.push("#");
  // };
  const route2 = () => {
    history.push("/");
  };
  const route3 = () => {
    history.push("/contact");
  };




  
  


  return (
    <Navigation light expand="md">
      <NavBrandStyle>
        <LogoFade>
          <LogoImg onClick={route2} />
        </LogoFade>
      </NavBrandStyle>
      <NavToggler />
      <NavCollapse navbar>
        <NavStyle navbar>
          <MenuList>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack onClick={route2}>
                  <h1 style={{ color: "black" }}>Home</h1>
                </LinkBlack>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              {/* <DropdownToggle nav> */}
              {/* <LinkBlack> */}

              <h1 style={{ color: "black" }}>What is HUEmanistic?</h1>
              {/* </LinkBlack> */}
              {/* </DropdownToggle> */}
              {/* <DropdownMenu left>
                <DropdownItem onClick={route1}>
                  Vision &amp; Mission Statement
                </DropdownItem>
                <DropdownItem onClick={route3}>
                  The Humans Behind HUEmanistic
                </DropdownItem>
              </DropdownMenu> */}
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack id="ComingSoon" onClick={route2}>
                  <h1 style={{ color: "black" }}>Learning Annex</h1>
                </LinkBlack>
                <Tooltip
                  flip
                  target="ComingSoon"
                  toggle={function noRefCheck() {}}
                >
                  Coming Soon
                </Tooltip>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <h1 style={{ color: "black" }}>Volunteer</h1>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack onClick={route3}>Contact </LinkBlack>
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
          {/* <DonateLink to="/donate"> */}
          <DonateButton>Donate</DonateButton>
          {/* </DonateLink> */}
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
