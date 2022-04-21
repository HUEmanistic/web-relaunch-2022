import React, { useState } from "react";
import { RacismNearMeItems } from "../data/menu_items";
import { NavLinks } from "../styles/navbar_style"





function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {RacismNearMeItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLinks
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </NavLinks>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
