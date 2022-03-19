import React from "react";
import { members } from "../data/board_members";
import { default as MemberImg } from "./members_img";

function ProfileListDisplay() {
  return (
    <>
      {members.map((member) => (
        <MemberImg member={member} />
      ))}
    </>
  );
}

export default ProfileListDisplay;
