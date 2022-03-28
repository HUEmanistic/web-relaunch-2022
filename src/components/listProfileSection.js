import React from "react";
import {
  SectionTitle,
  Section,
  UList,
  LItem,
} from "../styles/main_style";

export default function ListProfileSection(props) {

  return (
    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      <UList>{props.content.map(item => <LItem>{item}</LItem>)}</UList>
    </Section>
  );
}