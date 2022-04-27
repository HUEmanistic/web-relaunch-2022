import React from "react";
import { useParams } from "react-router-dom";
import { members } from "../../data/board_members";
import Carousel from "nuka-carousel";
import TextProfileSection from "../textProfileSection";
import PodcastProfileSection from "../podcastProfileSection";
import ListProfileSection from "../listProfileSection";
import ProfileListDisplay from "../profileListDisplay";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
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
  ContentRow,
  SectionHeader,
  HeaderRoleText,
  ProfileName,
} from "./style";

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
          <SectionHeader>
            <ProfileHeaderCol1>
              <ImageDiv
                style={{ width: "45%" }}
                src={selectedMember.image}
                alt={selectedMember.first_name}
              />
            </ProfileHeaderCol1>
            <ProfileHeaderCol2>
              <ProfileHeaderRow>
                <ProfileName>
                  {selectedMember.first_name} {selectedMember.last_name}
                </ProfileName>{" "}
              </ProfileHeaderRow>

              <ProfileHeaderRow>
                <HeaderRoleText>{selectedMember.role}</HeaderRoleText>{" "}
              </ProfileHeaderRow>
            </ProfileHeaderCol2>
          </SectionHeader>

          <ProfileRow>
            <TextProfileSection
              title={"Bio"}
              content={selectedMember.bio}
            />

            <TextProfileSection
              title={`Experience : ${selectedMember.experienceTitle}`}
              content={selectedMember.experience}
            />

            <ProfileCol>
              {selectedMember.books.length > 0 ? (
                <ListProfileSection
                  title="Book Recommendations"
                  content={selectedMember.books}
                />
              ) : null}

              {selectedMember.movies.length > 0 ? (
                <ListProfileSection
                  title="Movie Recommendations"
                  content={selectedMember.movies}
                />
              ) : null}
            </ProfileCol>

            <ProfileCol2>
              <Carousel
                renderCenterLeftControls={({ previousSlide }) => {
                  if (selectedMember.profile_episode.length > 1) {
                    return (
                      <button onClick={previousSlide}>
                        <AiFillCaretLeft />
                      </button>
                    );
                  }
                }}
                renderCenterRightControls={({ nextSlide }) => {
                  if (selectedMember.profile_episode.length > 1) {
                    return (
                      <button onClick={nextSlide}>
                        <AiFillCaretRight />
                      </button>
                    );
                  }
                }}
              >
                {selectedMember.profile_episode.map((episode) => (
                  <PodcastProfileSection
                    title="Profile Episodes"
                    content={episode}
                  />
                ))}
              </Carousel>
              <TextProfileSection
                title="Contact"
                content={selectedMember.contact}
              />
            </ProfileCol2>
          </ProfileRow>

          <ContentRow>
            <ProfileListDisplay />
          </ContentRow>
        </MainDiv>
      ) : (
        <p>Member not Found</p>
      )}
    </Page>
  );
}
