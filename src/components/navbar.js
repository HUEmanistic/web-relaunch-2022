import React from "react";
import { useHistory } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
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
  const route4 = () => {
    history.push("#");
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
                <LinkBlack onClick={route2}>Home</LinkBlack>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack onClick={route4}>What is HUEmanistic? </LinkBlack>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Coming Soon</Tooltip>}
                >
                  <LinkBlack onClick={route4}>Learning Annex</LinkBlack>
                </OverlayTrigger>
              </DropdownToggle>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <LinkBlack onClick={route4}>Volunteer </LinkBlack>
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
          <OverlayTrigger placement="top" overlay={<Tooltip>Twitter</Tooltip>}>
            <a href="https://twitter.com/huemanistic">
              <TwitterLogo />
            </a>
          </OverlayTrigger>
           <OverlayTrigger placement="top" overlay={<Tooltip>FaceBook</Tooltip>}>
          <a href="https://www.facebook.com/HUEmanistic/">
            <FBLogo />
            </a>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Insta</Tooltip>}>
          <a href="https://www.instagram.com/huemanistic_commonground/">
            <InstaLogo />
            </a>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Shop</Tooltip>}>
          <a href="https://www.bonfire.com/store/the-huemanistic-store/">
            <TshirtLogo />
            </a>
          </OverlayTrigger>
        </SocialMediaDiv>
        <PulsateButton>
          <DonateLink to="/donate">
            <DonateButton>Donate</DonateButton>
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
