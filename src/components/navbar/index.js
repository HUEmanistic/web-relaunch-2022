import React, { useState } from "react";
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
  NaviItem,
  SpecialLink,
  PopupText,
} from "./style";

import { Collapse, Nav, NavbarToggler, Navbar } from "reactstrap";

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
  // const specialRoute = () => {
  //   history.push("/juneteenth");
  // };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const today = new Date();
  const Juneteenth = new Date(2022, 5, 19);
  console.log(today)
  console.log(Juneteenth)

  return (
    <Navbar color="light" expand="xl" light fixed="top">
      <NavBrandStyle>
        <LogoFade>
          <LogoImg style={{ cursor: "pointer" }} onClick={route1} />
        </LogoFade>
      </NavBrandStyle>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <MenuList>
          <Nav navbar style={{ width: "100%" }}>
            {/* {today >= Juneteenth ? (
              <PopupText>
                <NaviItem>
                  <SpecialLink onClick={specialRoute}>Juneteenth</SpecialLink>
                </NaviItem>
              </PopupText>
            ) : null} */}
            <NaviItem>
              <LinkBlack onClick={route1}>Home</LinkBlack>
            </NaviItem>
            <NaviItem style={{ display: "flex" }}>
              <LinkBlack onClick={route4}>What is HUEmanistic? </LinkBlack>
            </NaviItem>
            <NaviItem>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Coming Soon</Tooltip>}
              >
                <LinkBlack style={{ cursor: "not-allowed" }} onClick={route4}>
                  Learning Annex<HideMe>Coming Soon!</HideMe>
                </LinkBlack>
              </OverlayTrigger>
            </NaviItem>
            <NaviItem>
              <LinkBlack onClick={route2}>Volunteer </LinkBlack>
            </NaviItem>
            <NaviItem>
              <LinkBlack onClick={route3}>Contact </LinkBlack>
            </NaviItem>
            <SocialMediaDiv>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Twitter</Tooltip>}
              >
                <a href="https://twitter.com/huemanistic">
                  <TwitterLogo />
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>FaceBook</Tooltip>}
              >
                <a href="https://www.facebook.com/HUEmanistic/">
                  <FBLogo />
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Insta</Tooltip>}
              >
                <a href="https://www.instagram.com/huemanistic_commonground/">
                  <InstaLogo />
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Shop</Tooltip>}
              >
                <a href="https://www.bonfire.com/store/the-huemanistic-store/">
                  <TshirtLogo />
                </a>
              </OverlayTrigger>
            </SocialMediaDiv>
            <PulsateButton>
              <DonateLink to="/donate">
                <DonateButton>Donate</DonateButton>
              </DonateLink>
            </PulsateButton>{" "}
          </Nav>
        </MenuList>
      </Collapse>
    </Navbar>
  );
};

export default Navibar;
