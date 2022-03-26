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
  ProfileHeaderCol1,
  ProfileHeaderCol2,
  ProfileHeaderRow,
  ProfileCol2,
  ContentRow2,
  Section,

  ProfileName,
  Line,
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
              <ProfileHeaderCol1 >
                <ImageDiv
                 
                  src={selectedMember.image}
                  alt={selectedMember.first_name}
                />
              </ProfileHeaderCol1>
              <ProfileHeaderCol2 >
                <ProfileHeaderRow>
                  <ProfileName>
                    {selectedMember.first_name} {selectedMember.last_name}
                  </ProfileName> <p>{selectedMember.role}</p>
                </ProfileHeaderRow>
               
                  <Line />
                    
               
                <ProfileHeaderRow>
                 
                </ProfileHeaderRow>
              </ProfileHeaderCol2>
            </Section>
          </ProfileRow>

          <ProfileRow>
            <TextProfileSection title="Bio" content={selectedMember.bio} />

            <TextProfileSection
              title={`Experience : ${selectedMember.experienceTitle}`}
              content={selectedMember.experience}
            />

            <ProfileCol>
              <ListProfileSection
                title="Book Recommendations"
                content={selectedMember.books}
              />
              <ListProfileSection
                title="Movie Recommendations"
                content={selectedMember.movies}
              />
            </ProfileCol>
            <ProfileCol2>
              <PodcastProfileSection
                title="Profile Episodes"
                content={selectedMember.profile_episode}
              />

              <TextProfileSection
                title="Contact"
                content={selectedMember.contact}
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
