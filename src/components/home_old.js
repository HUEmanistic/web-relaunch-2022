import React from "react";
import Logo from "../media/images/logo/logo.png";
import { Link } from "react-router-dom";
import {
  CTA,
  CTAHeading,
  CTAButton,
  GridButton,
  GridButtonSoon,
  GridLink,
  GridCard,
  WideContainer,
  WideContainerMain,
  Para,
  GridContainer,
  LogoBounce,
  CTAHeaderContainer,
} from "../styles/main_style";
import Collage from "../media/images/main/collage.jpg";
import Navibar from "./navbar";

import {
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import blkfrnd from "../media/images/main/grid/ur_blk_friend/ur_blk_frnd.jpg";
import spotlight from "../media/images/main/grid/spotlight/spotlight.jpg";
import vision from "../media/images/main/grid/vision_mission/vision.jpg";
import book from "../media/images/main/grid/Book_month/bom.jpg";
import truths from "../media/images/main/grid/uncovered_truths/uncovered.jpg";
import communication from "../media/images/main/grid/communication/communication.jpg";
import resources from "../media/images/main/grid/resources/resources.jpg";
import kids from "../media/images/main/grid/kids/hue-kids.jpg";
import experiences from "../media/images/main/grid/experiences/experiences.jpg";
import effects from "../media/images/main/grid/psychological_effects/effects.jpg";
import rights from "../media/images/main/grid/rights/rights.jpg";
import mobile from "../media/images/main/grid/mobile_justice/justice.jpg";
import community from "../media/images/main/grid/community/community.jpg";

// const items = [
//   {
//     src: blkfrnd,
//     altText: "Know Your Rights",
//     // caption: "Slide 1",
//     // header: "Slide 1 Header",
//     link: "https://huemanistic.com",
//     // link:{route1}
//   },
//   {
//     src: vision,
//     altText: "Let's talk about race",
//     // caption: "Slide 2",
//     // header: "Slide 2 Header",
//     key: "2",
//   },
//   {
//     src: bios,
//     altText: "Your Black Friend",
//     // caption: "Slide 3",
//     // header: "Slide 3 Header",
//     key: "3",
//   },
//   {
//     src: book,
//     altText: "Building A Better Business",
//     // caption: "Slide 1",
//     // header: "Slide 1 Header",
//     key: "4",
//   },
// ];

function Main(props) {
  return (
    <>
      <WideContainer>
        <Navibar />
        {/* <NavigationBar /> */}
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
          src={Collage}
          alt="Us Collage"
        />
      </WideContainer>
      <WideContainerMain>
        <CTA>
          <CTAHeaderContainer>
            <CTAHeading>Welcome to</CTAHeading>
            <LogoBounce>
              <img src={Logo} alt="logo" style={{ width: "100%" }} />
            </LogoBounce>
          </CTAHeaderContainer>
          <hr />
          <Para>
            <strong>HUEmanistic was created out of the turmoil and division of our
            society. We are working to dismantle the systems of racism through
            education, conversation, and finding a common ground. The resources
            you find here are meant to help lead you wherever you are on your
            journey to become anti-racist. If you are just beginning on your
            journey click the button.</strong>
          </Para>
          {/* <Para>“Be the change. Educate yourself. Join the Dialogue”</Para> */}
          <Link to="/resources_research">
            <CTAButton>Start Here</CTAButton>
          </Link>
        </CTA>

        <GridContainer>
          <Container>
            <Row>
              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={book}
                    alt="Card image cap"
                  />
                  
                  <CardBody>
                    <CardTitle tag="h5">Book of the Month</CardTitle>
                    <CardText>
                      Come read with us and check out our reviews
                    </CardText>
                    <Link to="/BOM">
                      {" "}
                      <GridButton>Go</GridButton>
                    </Link>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={blkfrnd}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Your Black Friend</CardTitle>
                    <CardText>
                      A safe place where you can ask questions on racism.
                    </CardText>
                    <GridButton>Go</GridButton>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={experiences}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Personal Experiences</CardTitle>
                    <CardText>
                      Hear the stories of others and share your own.
                    </CardText>
                    <Link to="/experiences">
                      <GridButton>Go</GridButton>
                    </Link>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={resources}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Resources & Research</CardTitle>
                    <br />
                    <br />
                    <Link to="/resources_research">
                      <GridButton>Go</GridButton>
                    </Link>
                  </CardBody>
                </GridCard>
              </Col>
            </Row>

            <br />
            <br />

            <Row>
              <Col>
                <GridCard>
                  <CardImg top width="100%" src={kids} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">HUEmanistic Kids</CardTitle>
                    <CardText>Anti-racist education for kids!</CardText>
                    <br />
                    <br />
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={spotlight}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">The Spotlight</CardTitle>
                    <CardText>Current events.</CardText>
                    <br />
                    <br />
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={effects}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      The Psychological Effects of Racism
                    </CardTitle>
                    <CardText>
                      The effects of stereotypes and racially charged incidents
                    </CardText>
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={communication}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Cultural Sensitivity &amp; Communication
                    </CardTitle>
                    <CardText>Understanding who we are as a culture</CardText>
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>
            </Row>

            <br></br>
            <br></br>

            <Row>
              <Col>
                <GridCard>
                  <CardImg top width="100%" src={rights} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">Know Your Rights</CardTitle>
                    <br />
                    <br />
                    <br />
                    <br />
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg top width="100%" src={truths} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">Uncovered Truths</CardTitle>
                    <CardText>Exposing the Truth</CardText>
                    <br />
                    <br />
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg top width="100%" src={mobile} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">The Notorious</CardTitle>
                    <CardText>
                      We dissect and debunk the misinformation from those who
                      have gained notoriety from spreading it.
                    </CardText>
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

              <Col>
                <GridCard>
                  <CardImg
                    top
                    width="100%"
                    src={community}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Community Outreach & Coaching
                    </CardTitle>
                    <CardText>Neighborhood conversations and events.</CardText>
                    <br />
                    <GridButtonSoon>Coming Soon</GridButtonSoon>
                  </CardBody>
                </GridCard>
              </Col>

            </Row>

            <br></br>
            <br></br>
          </Container>
        </GridContainer>
      </WideContainerMain>
    </>
  );
}

export default Main;
