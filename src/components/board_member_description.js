import React from "react";
import { ImageDiv, BioCollapse, ImgRow, MemberTitle, MemberDescription,MemberCard, MemberBadge} from "../styles/about_us_style";

function BoardMemberDescription({ member, selectedMember }) {
  return (
    <>
      <BioCollapse isOpen={selectedMember === member}>
        <MemberCard >
   <ImgRow>
            <ImageDiv src={selectedMember.image} alt={selectedMember.first_name} />
         </ImgRow>
          <MemberTitle>
            {selectedMember.first_name} {selectedMember.last_name}   {" "}
            &nbsp; <MemberBadge>{selectedMember.role}</MemberBadge>
          </MemberTitle>
          <MemberDescription>{selectedMember.description}</MemberDescription>
        </MemberCard>
      </BioCollapse>
    </>
  );
}

export default BoardMemberDescription;
