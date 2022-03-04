import React from "react";
import { Link } from "react-router-dom";
import { Para, ImageDiv, ContentCol1 } from "../styles/main_style";

function MemberImage({ member }) {
  return (
    <>
      {/* <Link to="/members/${member.first_name}"> */}
      <Link to="#">
        <ContentCol1>
          <ImageDiv src={member.image} alt={member.first_name} />
        </ContentCol1>
        <ContentCol1>
          <Para>{member.first_name}</Para>
        </ContentCol1>
      </Link>
    </>
  );
}

export default MemberImage;
