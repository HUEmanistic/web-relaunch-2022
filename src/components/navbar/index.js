import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  NavBrandStyle,
  LogoFade,
  LinkBlack,
  DonateLink,
  MenuList,
  TwitterLogo,
  FBLogo,
  LogoImg,
  InstaLogo,
  SocialMediaDiv,
  TshirtLogo,
  DonateButton,
  PulsateButton,
  HideMe,
} from "./style";

import {
  Collapse,
  Nav,
  NavbarToggler,
  NavItem,
  Navbar,
} from "reactstrap";

const Navibar = () => {
  const history = useHistory();
  const route1 = () => {
    history.push("/");
  };
  const route2 = () => {
    history.push("/volunteer");
  };
  const route3 = () => {
    history.push("/contact");
  };
  const route4 = () => {
    history.push("/what-is-huemanistic");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [expand, setExpand] = useState(false);

  return (
    <Navbar color="light" expand="xl" light fixed="top">
      <NavBrandStyle>
        <LogoFade>
          <LogoImg onClick={route1} />
        </LogoFade>
      </NavBrandStyle>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <MenuList>
          <Nav navbar >
            <NavItem>
              <LinkBlack onClick={route1}>Home</LinkBlack>
            </NavItem>

            <NavItem>
              <LinkBlack onClick={route4}>What is HUEmanistic? </LinkBlack>
            </NavItem>

            <NavItem>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Coming Soon</Tooltip>}
              >
                <LinkBlack onClick={route4}>Learning Annex<HideMe>Coming Soon!</HideMe></LinkBlack>
              </OverlayTrigger>
            </NavItem>
            <NavItem>
              <LinkBlack onClick={route2}>Volunteer </LinkBlack>
            </NavItem>
            <NavItem>
              <LinkBlack onClick={route3}>Contact </LinkBlack>
            </NavItem>
          </Nav>

          <SocialMediaDiv>
            {" "}
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Twitter</Tooltip>}
            >
              <a href="https://twitter.com/huemanistic">
                <TwitterLogo />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>FaceBook</Tooltip>}
            >
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
        </MenuList>
      </Collapse>
    </Navbar>
  );
};

export default Navibar;




