import React, { useState } from "react";
import {
  ColorRow,
  ColorRow2,
  ColorContainer,
  MainContainer,
  Page,
} from "../styles/about_us_style";
import Navibar from "./navbar";
import { members } from "../data/board_members";
import BoardMemberCard from "./board_member_card";
import BoardMemberDescription from "./board_member_description";
// import Sean from "../media/images/bio/sean.jpg";
// import Darci from "../media/images/bio/darci.jpg";
// import Christina from "../media/images/bio/christina.jpg";
// import Hazzauna from "../media/images/bio/hazzauna.jpg";
// import Marianna from "../media/images/bio/marianna.jpg";
// import Mary from "../media/images/bio/mary.jpg";

function Main() {
  const [selectedMember, setSelectedMember] = useState({
    background: "",
    first_name: "",
    last_name: "",
    role: "",
    description: "",
  });

  return (
    <Page>
      <MainContainer>
        <Navibar />

        <ColorContainer>
          <ColorRow>
            {members.map((member) => (
              <BoardMemberCard
                member={member}
                selectedMember={selectedMember}
                setSelectedMember={setSelectedMember}
              />
            ))}
          </ColorRow>
          <ColorRow2>
            {members.map((member) => (
              <BoardMemberDescription
                member={member}
                selectedMember={selectedMember}
              />
            ))}
          </ColorRow2>
        </ColorContainer>

      </MainContainer>
    </Page>
  );
}

export default Main;
