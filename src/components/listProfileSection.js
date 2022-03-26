import React from "react";
import {
  SectionTitle,
  Section,
} from "../styles/main_style";

export default function ListProfileSection(props) {

  return (
    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      <ul>{props.content.map(item => <li>{item}</li>)}</ul>
    </Section>
  );
}