import React from "react";
import { Link } from "react-router-dom";
import VideoID from "./ybf_videos/video_n-word";
// import VideoID from "./special_events/juneteenth";
import {
  CategoryButton,
  LogoBounce,
  LogoImg,
  ContentRow,
  ContentCol,
  ContentRow2,
  ContentCol2,
  MainTitle,
  MainText,
  ChipColor,
  ChipColor2,
  ChipColor3,
  ChipColor4,
  ContentCard,
  ContentBody,
  ContentCardText,
  YBFImg,
  CategoryTitle,
  MainDiv,
  Page,
  SliderDiv,
  DivText,
  PodcastCol,
  PodcastTitle,
  PodcastText,
  // PodcastSubHead,
  PodcastColProfiles,
  PodcastSeriesLink,
  // Banner,
  // BannerDiv,
  VideoContainerDiv,
  ContentDiv,
} from "../styles/main_style";

import Navibar from "./navbar";
import ReactTextRotator from "react-text-rotator";
import { quotes } from "../data/quotes";
import { quote_clicks as clicks } from "../data/quote_clicks";
import { CardImg } from "reactstrap";
import book from "../media/images/main/grid/Book_month/bom_bw.jpg";
import resources from "../media/images/main/grid/resources/resources_bw.jpg";
import experiences from "../media/images/main/grid/experiences/experiences_bw.jpg";

function Main(props) {
  
  return (
    <Page>
      <MainDiv>
        <Navibar />
        <ContentDiv>
          {/* <Link to="/mlk">
            <BannerDiv>
              <Banner></Banner>
            </BannerDiv>
          </Link> */}

          <ContentCol>
            <MainTitle>
              <ContentRow>
                Welcome To
                <LogoBounce>
                  <LogoImg />
                </LogoBounce>
              </ContentRow>
            </MainTitle>
            <MainText>
              HUEmanistic was created out of the turmoil and division of our
              society. We are working to dismantle the systems of racism through
              education, conversation, and finding a common ground. The
              resources you find here are meant to help lead you wherever you
              are on your journey to become anti-racist. If you are just
              beginning on your journey you can start here.
            </MainText>
          </ContentCol>

          <PodcastCol>
            <PodcastTitle>
              HUEmanistic Presents:
              <br />
              Color Commentary
            </PodcastTitle>
            <br />
            <PodcastText>
              Your podcast for thoughts and analysis on race, education, and the
              state of our society impacting popular culture and politics.
            </PodcastText>
            <br />
            <br />
            {/* <PodcastSubHead>Part I</PodcastSubHead> */}

            <iframe
              style={{
                height: "100%",
                width: "80%",
                margin: "0 auto",
              }}
              src="https://anchor.fm/huemanistic-organization/embed/episodes/The-origins-of-Black-History-Month-e1dvf7a"
              frameborder="0"
              scrolling="no"
              title="The Origins of Black History Month"
            ></iframe>
            <br />
            <br />
            <PodcastSeriesLink href="https://anchor.fm/huemanistic-organization">
              view the series
            </PodcastSeriesLink>
          </PodcastCol>

          <PodcastColProfiles>
            <PodcastTitle>HUEmanistic Profiles</PodcastTitle>
            <br />
            <PodcastText>
              Get to know the humans behind the HUEmanistic organization.
            </PodcastText>
            <br />
            <br />
            <iframe
              style={{
                height: "100%",
                width: "80%",
                margin: "0 auto",
              }}
              src="https://anchor.fm/huemanistic-organization9/embed/episodes/HUEmanistic-Profiles---Brandon-Fiquett-e1di003"
              frameborder="0"
              scrolling="no"
              title="Meet our Social Media Director Brandon Fiquett"
            ></iframe>
            <PodcastSeriesLink href="https://anchor.fm/huemanistic-organization9">
              view past profiles
            </PodcastSeriesLink>
          </PodcastColProfiles>

          <VideoContainerDiv>
            <VideoID />
          </VideoContainerDiv>

          <ContentCol2>
            <SliderDiv>
              <ReactTextRotator
                content={quotes}
                time={10000}
                startDelay={2000}
              />
              <DivText>
                <ReactTextRotator
                  content={clicks}
                  time={10000}
                  startDelay={2000}
                />
              </DivText>
            </SliderDiv>
          </ContentCol2>
          <ContentRow2>
            <ContentCard>
              <CardImg top width="100%" src={book} alt="Card image cap" />
              <ChipColor>HUEmanistic #75A</ChipColor>
              <ContentBody>
                <CategoryTitle tag="h5">Book of the Month</CategoryTitle>
                <ContentCardText>
                  Come read with us and check out our reviews
                </ContentCardText>
                <Link to="/BOM/">
                  <CategoryButton>Go</CategoryButton>
                </Link>
              </ContentBody>
            </ContentCard>

            <ContentCard>
              <YBFImg />
              <ChipColor2>HUEmanistic #18C</ChipColor2>
              <ContentBody>
                <CategoryTitle tag="h5">Your Black Friend</CategoryTitle>
                <ContentCardText>
                  A safe place where you can ask questions on racism.
                </ContentCardText>
                <Link to="/yourblackfriend">
                  <CategoryButton>Go</CategoryButton>
                </Link>
              </ContentBody>
            </ContentCard>

            <ContentCard>
              <CardImg
                top
                width="100%"
                src={experiences}
                alt="Card image cap"
              />
              <ChipColor3>HUEmanistic #21E</ChipColor3>
              <ContentBody>
                <CategoryTitle tag="h5">Personal Experiences</CategoryTitle>
                <ContentCardText>
                  Read the stories of others and share your own.
                </ContentCardText>
                <Link to="/experiences">
                  <CategoryButton>Go</CategoryButton>
                </Link>
              </ContentBody>
            </ContentCard>

            <ContentCard>
              <CardImg top width="100%" src={resources} alt="Card image cap" />
              <ChipColor4>HUEmanistic #3AA</ChipColor4>
              <ContentBody>
                <CategoryTitle tag="h5">Resources & Research</CategoryTitle>
                <ContentCardText></ContentCardText>
                <Link to="/resources_research">
                  <CategoryButton>Go</CategoryButton>
                </Link>
              </ContentBody>
            </ContentCard>
          </ContentRow2>
        </ContentDiv>
      </MainDiv>
    </Page>
  );
}

export default Main;
