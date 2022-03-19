import React from "react";
import { useParams } from "react-router-dom";
import {
  Body,
  Pic,
  Name,
  Section,
  SectionTitle,
  SectionCol,
  TextSection,
  Header,
} from "../../styles/main_style";

export default function Profile({ children, ...restProps }) {
  const { name } = useParams();
  return (
    <>
          <h1>{name}</h1>
      <p {...restProps}>{children}</p>
    </>
  );
}

Profile.Body = function ProfilePageContainer({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Profile.ProfilePic = function ProfilePicture({ children, ...restProps }) {
  return <Pic {...restProps}>{children}</Pic>;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Profile.Section = function ProfileSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Profile.SectionTitle = function ProfileSectionTitle({
  children,
  ...restProps
}) {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

Profile.SectionCol = function ProfileSectionCol({ children, ...restProps }) {
  return <SectionCol {...restProps}>{children}</SectionCol>;
};

Profile.TextSection = function ProfileTextSection({ children, ...restProps }) {
  return <TextSection {...restProps}>{children}</TextSection>;
};

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
