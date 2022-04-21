import React from "react";
import { NavButton, NavLinks } from "../styles/navbar_style";

export function Button() {
  return (
    <NavLinks to="donate">
      <NavButton>Donate</NavButton>
    </NavLinks>
  );
}
