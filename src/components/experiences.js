import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Page,
  PageTitle,
  ContentContainer,
  RowOutline,
  ContentCol,
  RowNoOutline,
  StoryTitle,
  ContentCol2,
  Italics,
  StoryText,
  StoryImg,
  TitleRow,
  MainContainer,
} from "../styles/experiences_style";
import Navibar from "./navbar";
import data from "../data/Experiences/experiences.json";
import DOMPurify from "dompurify";

function Experiences() {
  let { id } = useParams();
  if (!id) {
    id = data.length.toString();
  }
  const exp = data.filter((b) => b.id === id)[0];
  return (
    <Page>
      <MainContainer>
        <Navibar />

        <ContentContainer>
          <TitleRow>
            <PageTitle>Personal Experiences</PageTitle>
          </TitleRow>

          <RowNoOutline>
            <ContentCol>
              <Italics>
                We’d love for you to share your personal experiences of racism
                to help shed more light on this very real issue. No matter the
                color of your skin, we all have a story to share. Please{" "}
                <Link to="contact"> Contact Us</Link> if you have a story you
                would like to share or would like to leave your thoughts,
                questions and comments on this experience.
              </Italics>
            </ContentCol>
          </RowNoOutline>

          <RowOutline>
            <ContentCol2>
              <StoryTitle>{exp.title}</StoryTitle>
              <StoryImg image={exp.image} />
              <StoryText
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(exp.experience),
                }}
              />
              <br />

              <UncontrolledDropdown>
                <DropdownToggle caret>View Past Stories</DropdownToggle>
                <DropdownMenu>
                  {data.map((b) => {
                    if (b.id !== id) {
                      return (
                        <DropdownItem>
                          <Link to={"/experiences/" + b.id} >{b.title}</Link>
                        </DropdownItem>
                      );
                    }
                       return null;
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </ContentCol2>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}

export default Experiences;
