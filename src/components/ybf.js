import React from "react";
import { Link } from "react-router-dom";
import {
  YBFBody,
  MainCol,
  Header,
  PageTitle,
  PageText,
  ContentCol,
  StyledRow3,
  BannerImg4,
  BannerImg5,
  BannerImg6,
  YoutubeVidDiv,
} from "../styles/ybf_styles";

import VideoID from "./ybf_videos/video_n-word"
import Navibar from "./navbar";

function YBF() {
  return (
    <YBFBody>
      <MainCol>
        <Navibar />
        <YoutubeVidDiv>
          <VideoID />
        </YoutubeVidDiv>
        <ContentCol>
          <Header>
            <PageTitle>Your Black Friend</PageTitle>
            <PageText>
              Do you have a question for your Black friend, but are too afraid
              to ask? Our friends are here to help! Your Black Friend is a
              judgement-free zone, offering advice and knowledge to our allies.
              If you have any questions please{" "}
              <Link to="contact"> Contact Us</Link> and leave us your question.
            </PageText>
          </Header>
        </ContentCol>
        <StyledRow3>
          <BannerImg4 />
          <BannerImg5 />
          <BannerImg6 />
        </StyledRow3>
      </MainCol>
    </YBFBody>
  );
}

export default YBF;
