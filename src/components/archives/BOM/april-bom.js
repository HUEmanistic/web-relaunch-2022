import React from "react";
import Navibar from "../../navbar";
import {  Media, Alert, Badge} from "reactstrap";
import { RowNoOutline, RowOutline, NoColOutline, ColOutline, Page, MainContainer, BookMedia} from "../../../styles/bom_styles";
import book from "../../../media/images/BOM/talk_about_race.jpg";



function BOM() {
  return (
    <Page>
      <Navibar />

      <MainContainer

      >
        <RowOutline>
          <BookMedia>
            <BookMedia left>
              <BookMedia
                object
                src={book}
                alt="So You Want to Talk About Race"
                style={{
                  boxShadow: "10px 10px 8px 10px #888888",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                }}
              />
            </BookMedia>
            <BookMedia
              body
              style={{
                width: "85%",
                paddingLeft: "13%",
                lineHeight: "1.5rem",
              }}
            >
              <BookMedia
                heading
                style={{
                  width: "80%",
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                }}
              >
                So You Want to Talk About Race
              </BookMedia>
              <Media
                heading
                style={{
                  width: "100%",
                  fontSize: "1rem",
                  lineHeight: "3rem",
                  marginBottom: "3%",
                  
                }}
              >
                by Ijeoma Oluo
              </Media>
              Widespread reporting on aspects of white supremacy — from police
              brutality to the mass incarceration of Black Americans — has put a
              media spotlight on racism in our society. Still, it is a difficult
              subject to talk about. How do you tell your roommate her jokes are
              racist? Why did your sister-in-law take umbrage when you asked to
              touch her hair — and how do you make it right? How do you explain
              white privilege to your white, privileged friend? In So You Want
              to Talk About Race, Ijeoma Oluo guides readers of all races
              through subjects ranging from intersectionality and affirmative
              action to “model minorities” in an attempt to make the seemingly
              impossible possible: honest conversations about race and racism,
              and how they infect almost every aspect of American life.
            </BookMedia>
          </BookMedia>
        </RowOutline>
        <RowNoOutline>
          <ColOutline>
            {" "}
            <h2> Staff Reviews</h2>
            <hr />
            <h3>
              by Hazzauna Underwood <Badge>Vice President</Badge>
            </h3>
            <hr />
            <p style={{ lineHeight: "2rem" }}>
              I felt an instant connection to Ijeoma Oluo, as I too am from
              Seattle. She identifies the challenges faced by Black Americans
              and gives suggestions on how to constructively advocate in your
              home, schools, and workplace. For me personally, I have dealt with
              challenges in the school system with my son. She breaks down the
              school-to-prison pipeline and how my son could have fallen victim.
              It’s a sad reality that I never could have imagined having to deal
              with. We cannot change what we do not know or understand, this
              book is a very straightforward and easy read that provides that
              clarity.
            </p>
          </ColOutline>
          <NoColOutline>
            <div>
              <Alert color="light">
                <h2>Reviews & Reactions</h2>
                <hr />
              </Alert>
              <Alert color="primary">
                “Oluo gives us — both white people and people of color — that
                language to engage in clear, constructive, and confident
                dialogue with each other about how to deal with racial
                prejudices and biases.”
                <br /> <br />— National Book Review
              </Alert>
              <Alert color="success">
                “Generous and empathetic, yet usefully blunt . . . it’s for
                anyone who wants to be smarter and more empathetic about matters
                of race and engage in more productive anti-racist action.”
                <br /> <br />— Salon
              </Alert>

              {/* <Col>
                    <Alert color="light">Visit Archived Books</Alert>
                  </Col> */}
            </div>
          </NoColOutline>
        </RowNoOutline>
      </MainContainer>
    </Page>
  );
}

export default BOM;
