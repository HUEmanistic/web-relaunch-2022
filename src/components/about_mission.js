import React from "react";
import {
  WideContainer,
  WideContainerAbout,
  WideContainerAboutMission,
  Header,
  Para,
  Para2,
  Collage2Img,
  DefinitionImg,
  CollageImg,
  ContentDiv,
} from "../styles/about_mission_style";
import Navibar from "./navbar";




function Main() {
  return (
    <>
      <Navibar />
      <ContentDiv>
      <WideContainer>
       
        
        <Collage2Img />
      </WideContainer>
      <WideContainerAbout>
        <DefinitionImg />
        <Para>
          To be HUEmanistic (Hu•man•ist•ic) is to adopt diversity and equality
          as the norm; advocating against racism and believing that every human,
          despite color, has and deserves the potential to be great.
          <br />
          <br />
          By peeling away the societal layers that define and divide us, we can
          re-educate and build an understanding and supportive society that
          embraces our differences. Creating a movement around building
          community and branching from there to build bridges of true
          unification and solidarity for us, as humans, despite our color.
        </Para>
        <WideContainerAboutMission>
          <Header>Our Mission</Header>
          <Para2>
            Our mission is to enlist, develop, and educate our world's
            communities to evolve by becoming allies who harness diversity,
            inclusion and equity, despite the many hues of our skin. We strive
            to harness the power of being better together, one neighbor at a
            time.
          </Para2>
        </WideContainerAboutMission>

        <CollageImg />
        <WideContainerAboutMission
          style={{
            background: "None",
            marginTop: "-30%",
          }}
        >
          <Header
            style={{
              color: "black",
            }}
          >
            Our Vision
          </Header>
          <Para
            style={{
              fontSize: "1em",
              color: "black",
            }}
          >
            A unified nation where all people of color experience the same
            privileges and basic human rights as white people.
          </Para>
        </WideContainerAboutMission>
        <WideContainerAboutMission
          style={{ backgroundColor: "hsla(0, 0%, 0%, 0.85)" }}
        >
          <Para
            style={{
              fontSize: "1.2em",
              color: "white",
              fontWeight: "500",
            }}
          >
            We are one race, the human race, yet the everyday inequities Black
            and Brown people face must be addressed. A longtime racial divide
            needs to be dismantled--one which includes avoiding hasty decisions
            to accept misinformation, breaking down harmful stereotypes and
            misunderstandings, and boosting educational and diversified
            perspectives to teach the next generation to do better. By bridging
            the gap of understanding through education, community empowerment
            and advocacy, we can rebuild our communities to include the voices
            of Black and Brown lives; bringing forth positive connections and
            solidarity with diversity, inclusion and equity for all.
          </Para>
        </WideContainerAboutMission>
        <WideContainerAboutMission
          style={{
            background: "hsla(0, 0%, 100%, 0.8)",
          }}
        >
          <Header
            style={{
              color: "black",
              fontWeight: "900",
            }}
          >
            Take The HUEmanist Pledge
          </Header>
          <Para
            style={{
              fontSize: "1.5em",
              fontWeight: "900",
              color: "black",
            }}
          >
            I am anti-racist.
            <br />
            I believe in putting value in Black and Brown lives as human beings,
            as a basic human right.
            <br />
            I will analyze my prejudices, biases and thoughts of bigotry against
            Black lives, so that I can be more HUEmanistic in thought and action
            to be a HUEmanist.
            <br />
            When I encounter a moment of racial prejudice, I vow to speak up and
            advocate for rational solutions that plague Black and Brown lives.
          </Para>
        </WideContainerAboutMission>
        <WideContainerAboutMission
          style={{ backgroundColor: "hsla(0, 0%, 0%, 0.85)" }}
        >
          <Header
            style={{
              color: "white",
            }}
          >
            Our Core Values
          </Header>
          <Para
            style={{
              fontSize: "1em",
              color: "white",
            }}
          >
            Grounded in humanity. We are a humanitarian-focused &nbsp;
            <a href="https://ccfs.sos.wa.gov/#/Home">
              {" "}
              501(c)3 organization{" "}
            </a>{" "}
            &nbsp; with no political or religious affiliation.
          </Para>
          </WideContainerAboutMission>
        
      </WideContainerAbout></ContentDiv>
    </>
  );
}

export default Main;
