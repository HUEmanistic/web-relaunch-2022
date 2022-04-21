import React from "react";
import { Para, ImageDiv, ContentCol1 } from "./style";

function MemberImage({ member }) {
  return (
    <>
        <ContentCol1>
          <ImageDiv src={member.image} alt={member.first_name} />
        </ContentCol1>
        <ContentCol1>
          <Para>{member.first_name}</Para>
        </ContentCol1>
    </>
  );
}

export default MemberImage;
