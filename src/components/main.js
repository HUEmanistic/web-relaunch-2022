import React from "react";
import Carousel from "nuka-carousel";

import { members } from "../data/board_members";
import {webBlocks} from "../data/webBlocks"
import { default as MemberImg } from "./members_img";

import {
  LogoBounce,
  LogoImg,
  ContentRow,
  ContentRow2,
  ContentCol1,
  ContentCol2,
  ContentCol3,
  CarouselContainer,
  CCSlide,
  ProfilesSlide,
  PodcastContainerRow,
  PodcastContainerColumn,
  MainTitle,
  MainText,
  MainDiv,
  Page,
  ProfileLogo,
  WebBlockTitle,
  WebBlockDiv,
} from "../styles/main_style";

import Navibar from "./navbar";

function Main(props) {

  return (
    <Page>
      <MainDiv>
        <Navibar />

        <CarouselContainer>
          <Carousel>
            <CCSlide>
              <PodcastContainerColumn>
                <iframe
                  src="https://anchor.fm/huemanistic-organization/embed"
                  height="100%"
                  width="65%"
                  frameborder="0"
                  scrolling="no"
                  title="podcast"
                ></iframe>{" "}
              </PodcastContainerColumn>
            </CCSlide>

            <PodcastContainerRow>
              <ProfilesSlide>
                <ProfileLogo />
                <iframe
                  style={{ display: "flex" }}
                  src="https://anchor.fm/huemanistic-organization9/embed/episodes/HUEmanistic-Profiles---Brandon-Fiquett-e1di003"
                  width="60%"
                  frameborder="0"
                  scrolling="no"
                  title="podcast"
                ></iframe>{" "}
              </ProfilesSlide>
            </PodcastContainerRow>

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2GcyYvruOYY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Carousel>
        </CarouselContainer>

        <ContentRow>
          <ContentCol1>
            <MainTitle>Welcome To</MainTitle>
            <LogoBounce>
              <LogoImg />
            </LogoBounce>
          </ContentCol1>

          <ContentCol2>
            <MainText>
              HUEmanistic was created out of the turmoil and division of our
              society. We are working to dismantle the systems of racism through
              education, conversation, and finding a common ground. The
              resources you find here are meant to help lead you wherever you
              are on your journey to become anti-racist.
            </MainText>
          </ContentCol2>
        </ContentRow>

        <ContentCol3
          style={{ background: "white", textAlign: "center", padding: "3%" }}
        >
          <MainText style={{ color: "black" }}>The HUEmanistic Crew</MainText>
          <ContentRow2>
            {members.map((member) => (
              <MemberImg member={member} />
            ))}
          </ContentRow2>
        </ContentCol3>

        <ContentRow2>
          {webBlocks.map((wb) => (
            <WebBlockDiv style={{background: wb.background}}>
              <WebBlockTitle>{wb.title}</WebBlockTitle>
              <MainText>{wb.info}</MainText>
            </WebBlockDiv>
          ))}
        </ContentRow2>
      </MainDiv>
    </Page>
  );
}

export default Main;
