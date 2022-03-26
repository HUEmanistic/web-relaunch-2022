import React from "react";
import { useParams } from "react-router-dom";
import { members } from "../data/board_members";
import TextProfileSection from "./textProfileSection";
import PodcastProfileSection from "./podcastProfileSection";
import ListProfileSection from "./listProfileSection";
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
              <ListProfileSection
                title="Book Recommendations"
                content={selectedMember.books}
              />
              <ListProfileSection
                title="Movie Recommendations"
                content={selectedMember.movies}
              />
              <PodcastProfileSection
                title="Profile Episodes"
                content={selectedMember.profile_episode}
              />

              <TextProfileSection
                title="Contact"
                content={selectedMember.contact}
              />
            </ProfileCol>
            <ProfileCol2>
              <TextProfileSection title="Bio" content={selectedMember.bio} />
              <TextProfileSection
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
