import React from "react";
import {
  SectionTitle,
  SectionText,
  SectionCol,
} from "../styles/main_style";

export default function ProfileSection(props) {

  return (
    <SectionCol>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.content}</SectionText>
    </SectionCol>
  );
}