import React from "react";
import { SectionTitle, Section, Frame } from "../styles/main_style";

export default function PodcastProfileSection(props) {
  return (
    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      <Frame src={props.content} title="Podcast" />
    </Section>
  );
}
