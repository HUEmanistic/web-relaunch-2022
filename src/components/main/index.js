import React from "react";
// import { useHistory } from "react-router-dom";
import Carousel from "nuka-carousel";
import ProfileListDisplay from "../profileListDisplay";
// import event from "../../media/images/events/Juneteenth/backgrounds/juneteenth.jpg";

import background from "../../media/images/background/main.jpg";
import { webBlocks, slideData } from "../../data/web_info";

import {
  LogoBounce,
  LogoImg,
  ContentRow,
  ContentRow2,
  IntroCol,
  ContentCol3,
  CarouselContainer,
  Frame,
  Slide,
  PodcastContainerColumn,
  MainText,
  MainDiv,
  Page,
  WebBlockTitle,
  WebBlockDiv,
  WebBlockLink,
  WebBlockTextDiv,
  BlockText,
  // EventImg
} from "./style";

function Main(props) {
  // const history = useHistory();
  // const specialRoute = () => {
  //   history.push("/juneteenth");
  // };

  return (
    <Page style={{ backgroundImage: `url(${background})` }}>
      <MainDiv>
        <CarouselContainer>
          <Carousel>
            {/* <Slide onClick={specialRoute}>
              <EventImg />
            </Slide> */}
            {slideData.map((bg) => (
              <Slide style={{ background: bg.backgroundImage }}>
                <PodcastContainerColumn>
                  <bg.logo style={{ width: bg.logoWidth, margin: bg.margin }} />
                  <Frame
                    style={{ width: bg.width }}
                    src={bg.src}
                    title={bg.title}
                  />
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    <a href={ bg.pastPodcasts }>View HUEmanistic's past podcast</a>
                      
                  </p>
                </PodcastContainerColumn>
              </Slide>
            ))}

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2GcyYvruOYY"
              title="Your Black Friend - The N Word"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Carousel>
        </CarouselContainer>

        <ContentRow>
          <IntroCol>
            <LogoBounce>
              <LogoImg />
            </LogoBounce>
            <MainText>
              HUEmanistic was created out of the turmoil and division of our
              society. We are working to dismantle the systems of racism through
              education, conversation, and finding a common ground. The
              resources you find here are meant to help lead you wherever you
              are on your journey to become anti-racist.
            </MainText>
          </IntroCol>
        </ContentRow>

        <ContentCol3
          style={{ background: "white", textAlign: "center", padding: "3%" }}
        >
          <MainText style={{ color: "black", fontWeight: 600 }}>
            The HUEmanistic Crew
          </MainText>
          <ContentRow2>
            <ProfileListDisplay />
          </ContentRow2>
          <ContentRow2>
            {webBlocks.map((wb) => (
              <WebBlockLink to={wb.link}>
                <WebBlockDiv style={{ background: wb.backgroundImage }}>
                  <WebBlockTitle>{wb.title}</WebBlockTitle>
                  <WebBlockTextDiv>
                    <BlockText>{wb.info}</BlockText>
                  </WebBlockTextDiv>
                </WebBlockDiv>
              </WebBlockLink>
            ))}
          </ContentRow2>
        </ContentCol3>
      </MainDiv>
    </Page>
  );
}

export default Main;
