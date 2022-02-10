import React from "react";
import {
  BackgroundContainer,
  Container,
  WideContainer,
  ContainerRow
} from "../styles/index";
import Collage from "../media/images/collage.jpg";
import Navibar from "./navbar";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import Book from "../media/images/book-7-2020.jpg";
import ReactPlayer from "react-player";


function Main() {
  return (
    <>
      <BackgroundContainer>
        <Container>
          <Navibar />
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              objectFit: "cover",
            }}
            src={Collage}
            alt="Us Collage"
          />
          {/* <WideContainer>
            <ContainerRow>
              <img
                style={{
                  width: "20%",
                  margin: " 0 auto",
                  padding: " 3%",
                }}
                src={Book}
                alt="Book of the month"
              ></img>

              <Card>
                <CardHeader
                  tag="h3"
                  style={{ color: "slateGray", fontSize: "1.5em" }}
                >
                  Book Of The Month
                </CardHeader>
                <CardBody>
                  <CardTitle
                    style={{
                      color: "black",
                      fontSize: "1.3em",
                      fontWeight: "500",
                    }}
                  >
                    So You Want To Talk About Race?
                  </CardTitle>
                  <CardText style={{ color: "black", lineHeight: "2.5em" }}>
                    So You Want to Talk About Race is a 2018 non-fiction book by
                    Ijeoma Oluo. Each chapter title is a question about race in
                    contemporary America. Oluo outlines her opinions on the
                    topics as well as advice about how to talk about the issues
                    *zoom discussion at the end of the month
                  </CardText>
                  <Button
                    href="https://smile.amazon.com/dp/1580058825?tag=amz-mkt-chr-us-20&ascsubtag=1ba00-01000-a0049-mac00-other-smile-us000-pcomp-feature-scomp-wm-5&ref=aa_scomp_sosp1"
                    style={{ marginTop: "3%" }}
                  >
                    Buy on Amazon
                  </Button>
                </CardBody>
                <CardFooter className="text-muted">Book of July</CardFooter>
              </Card>
            </ContainerRow>

            <ContainerRow style={{ marginTop: "5%" }}>
              <ReactPlayer url="https://youtu.be/OlZoUGiTJxA" />

              <Card>
                <CardHeader
                  tag="h3"
                  style={{ color: "slateGray", fontSize: "1.5em" }}
                >
                  Lets Discuss:
                </CardHeader>
                <CardBody>
                  <CardTitle
                    style={{
                      color: "black",
                      fontSize: "1.3em",
                      fontWeight: "500",
                    }}
                  >
                    ‘I’m not going home dead’: Black cop makes video after
                    getting pulled over by white cop
                  </CardTitle>
                  <CardText style={{ color: "black", lineHeight: "2.5em" }}>
                    A viral video from last month shows a Black police officer
                    getting pulled over by a white police officer and giving
                    advice to anybody who finds themselves in the same
                    situation.
                  </CardText>
                  <Button
                    href="https://www.dailydot.com/irl/black-cop-pulled-over-white-cop-advice/"
                    style={{ marginTop: "3%" }}
                  >
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </ContainerRow>
          </WideContainer> */}
        </Container>
      </BackgroundContainer>
    </>
  );
}

export default Main;
