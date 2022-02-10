import React, { useState } from "react";
import { Button } from "./button";
import Dropdown from "./dropdown";

import {
  Navibar,
  NavMenu,
  MenuIcon,
  NavMenuActive,
  NavItem,
  NavLinks,
  LogoImg,
  LogoFade,
  LogoLink,
  Down,
  MobileBars,
  MobileClose,
} from "../styles/navbar_style";

function NavigationBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Navibar>
        <LogoLink to="/main">
          <LogoFade>
            <LogoImg />
          </LogoFade>
        </LogoLink>
        <MenuIcon onClick={handleClick}>
          {click ? <MobileClose /> : <MobileBars />}
          {/* <i className={click ? "fa fa-times " : "fa fa-bars"} /> */}
        </MenuIcon>
        {click ? <NavMenuActive /> : <NavMenu />}
        <NavItem>
          <NavLinks to="/main" onClick={closeMobileMenu}>
            Home
          </NavLinks>
        </NavItem>

        <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <NavLinks to="/main" onClick={closeMobileMenu}>
            Racism Near Me
            <Down />
            {/* {click ? <Up /> : <Down />} */}
          </NavLinks>
          {dropdown && <Dropdown />}
        </NavItem>

        <NavItem>
          <NavLinks to="/main" onClick={closeMobileMenu}>
            Understanding Racism <Down />
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/main" onClick={closeMobileMenu}>
            Anti-Racism Programs <Down />
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/main" onClick={closeMobileMenu}>
            Who We Are <Down />
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/main" onClick={closeMobileMenu}>
            Contact
          </NavLinks>
        </NavItem>

        <Button />
      </Navibar>
    </>
  );
}

export default NavigationBar;
