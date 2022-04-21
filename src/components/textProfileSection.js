import React from "react";
import {
  SectionTitle,
  SectionText,
  Section,
} from "./style";

export default function TextProfileSection(props) {

  return (
    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.content}</SectionText>
    </Section>
  );
}