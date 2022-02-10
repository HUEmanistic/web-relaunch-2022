import React from "react";
import { Para, ColorSwatch } from "../styles/about_us_style";

function MobileBoardMemberCard({ member, selectedMember, setSelectedMember }) {
  return (
    <ColorSwatch
      id="{member.first_name}"
      onClick={() =>
        setSelectedMember(
          member === selectedMember
            ? {
                background: "",
                first_name: "",
              last_name: "",
                image:"",
                role: "",
                description: "",
              }
            : member
        )
      }
      style={{
        background: member.background,
        cursor: "pointer",
      }}
    >
      <Para>
        {member.first_name} <br /> {member.last_name}
      </Para>
    </ColorSwatch>
  );
}

export default MobileBoardMemberCard;
