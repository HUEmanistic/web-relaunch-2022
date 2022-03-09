import React from "react";
import Carousel from "nuka-carousel";

import { members } from "../data/board_members";
import { webBlocks, slideData } from "../data/web_info";
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
  Frame,
  Slide,
  PodcastLogo,
  PodcastContainerColumn,
  MainTitle,
  MainText,
  MainDiv,
  Page,
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
          <Carousel
            style={{
              boxShadow: "10px 10px 5px #4B57CF",
            }}
          >
            {slideData.map((bg) => (
              <Slide style={{ backgroundImage: bg.backgroundImage }}>
                <PodcastContainerColumn>
                  <bg.logo style={{ width: bg.logoWidth, margin: bg.margin}} />
                  <Frame
                    style={{ width: bg.width }}
                    src={bg.src}
                    title={bg.title}
                  />
                </PodcastContainerColumn>
              </Slide>
            ))}

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2GcyYvruOYY"
              title="Your Black Friend - The N Word"
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
            <WebBlockDiv style={{ background: wb.background }}>
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
