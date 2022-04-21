import React from "react";
import { Link } from "react-router-dom";
import {
  SectionTitle,
  Rule,
  MainContainer,
  Page,
  Para,
  Para2,
  ContentContainer,
  RowOutline,
  LinkPurple,
  SubHeader,

} from "./style";

function Volunteer() {


  return (
    <Page>
      <MainContainer>
        <ContentContainer>
          <RowOutline>
            <SectionTitle>Volunteer</SectionTitle>
            <Rule />

            <Para>
              Intern, volunteer, donate your time. HUEmanistic is powered by
              volunteers that keep the organization running. If you have a
              talent and would like to donate your time please feel free to{" "}
              <LinkPurple to="/contact">Contact us</LinkPurple>. Even if you do
              not see a job description for how you would like to help let us
              know!
            </Para>
          </RowOutline>

          <RowOutline>
            <SubHeader>Social Media Volunteers</SubHeader>
            <Rule />
            <Para>
              We use Facebook, Twitter, Tik Tok, and Insta to spread our
              message. We have a pipeline for content to push through but could
              use more eyes on day to day, retweet, like and network for each
              platform. If this interests you{" "}
              <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell us
              a bit about why you would be a good fit! about yourself.
            </Para>
          </RowOutline>

          <RowOutline>
            <SubHeader>Social Media Volunteers</SubHeader>
            <Rule />
            <Para>
              We use Facebook, Twitter, Tik Tok, and Insta to spread our
              message. We have a pipeline for content to push through but could
              use more eyes on day to day, retweet, like and network for each
              platform. If this interests you{" "}
              <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell us
              a bit about why you would be a good fit! about yourself.
            </Para>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}
export default Volunteer;
