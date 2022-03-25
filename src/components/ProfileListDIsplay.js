import React from "react";
import {Link} from "react-router-dom"
import { members } from "../data/board_members";
import { default as MemberImg } from "./members_img";


function ProfileListDisplay() {
  return (
    <>
      {members.map((member) => (
        <Link to={`/profile/${member.first_name}`}>
        <MemberImg member={member} />
        </Link>
      ))}
    </>
  );
}

export default ProfileListDisplay;
