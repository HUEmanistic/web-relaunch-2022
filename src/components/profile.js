import React from "react";
import { useParams } from "react-router-dom";
import { members } from "../data/board_members";
import ProfileSection from "./profileSection";
import ProfileListDisplay from "./ProfileListDisplay";
import {
  Page,
  MainDiv,
  ImageDiv,
  ProfileRow,
  ProfileCol,
  ProfileHeaderCol,
  ProfileHeaderRow,
  ProfileCol2,
  ContentRow2,
  Section,
  Frame,
} from "../styles/main_style";

export default function Profile() {
  const { name } = useParams();
  const selectedMember = members.filter(
    (member) => member.first_name === name
  )[0];

  return (
    <Page
      style={{
        backgroundImage: `url(${selectedMember.profileBackgroundImage})`,
      }}
    >
      {selectedMember ? (
        <MainDiv>
          <ProfileRow>
            <Section>
              <ProfileHeaderCol>
                <ImageDiv
                  style={{ width: "25%" }}
                  src={selectedMember.image}
                  alt={selectedMember.first_name}
                />
              </ProfileHeaderCol>
              <ProfileHeaderCol>
                <ProfileHeaderRow>
                  <p>
                    {selectedMember.first_name} {selectedMember.last_name}
                  </p>
                </ProfileHeaderRow>
                <ProfileHeaderRow>
                  <div
                    style={{
                      borderTop: "2px solid #fff ",
                      marginLeft: 20,
                      marginRight: 20,
                      height: 5,
                    }}
                  ></div>
                </ProfileHeaderRow>
                <ProfileHeaderRow>
                  <p>{selectedMember.role}</p>
                </ProfileHeaderRow>
              </ProfileHeaderCol>
            </Section>
          </ProfileRow>

          <ProfileRow>
            <ProfileCol>
              <ProfileSection
                title="Book Recommendations"
                content={selectedMember.books}
              />
              <ProfileSection
                title="Movie Recommendations"
                content={selectedMember.movies}
              />
              <Section
              >
                <h1>Profile Episodes</h1>
                <Frame src={selectedMember.profile_episode}></Frame>
                
              </Section>
              <ProfileSection
                title="Contact"
                content={selectedMember.contact}
              />
            </ProfileCol>
            <ProfileCol2>
              <ProfileSection title="Bio" content={selectedMember.bio} />
              <ProfileSection
                title={`Experience : ${selectedMember.experienceTitle}`}
                content={selectedMember.experience}
              />
            </ProfileCol2>
          </ProfileRow>

          <ContentRow2>
            <ProfileListDisplay />
          </ContentRow2>
        </MainDiv>
      ) : (
        <p>Member not Found</p>
      )}
    </Page>
  );
}
