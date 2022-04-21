import React from "react";
import {
  SectionTitle,
  Rule,
  MainContainer,
  Page,
  Para,
  ContentContainer,
  RowOutline,
  MainRowOutline,
  LinkPurple,
  SubHeader,
  JobDiv,
} from "./style";

function Volunteer() {


  return (
    <Page>
      <MainContainer>
        <ContentContainer>
          <MainRowOutline>
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
          </MainRowOutline>

          <RowOutline>
            <SubHeader>Social Media</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                We use Facebook, Twitter, Tik Tok, and Insta to spread our
                message. We have a pipeline for content to push through but
                could use more eyes on day to day, retweet, like and network for
                each platform.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Financial</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Are you magical with numbers? We could use your help. Seeking
                those who are interested in fundraising and accounting.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Legal</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Are you a lawyer or studying to become one? We are looking for
                somebody who can help us keep up with our legal filings and
                making sure we are up to code.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Web</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Looking for Web Developers of all levels. Huemanistic.org is
                built in React. We collaborate using GitHub. This is a great
                opportunity for those learning or wanting to do some unique and
                creative projects to help.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Design</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Are you a Web Designer, Visual Artist, Visual Designer, or
                Artist who would like to share your talents? We could use your
                help for UX design, merch design, and more!
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Video/Audio</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Are you interested in video and audio? We are looking for talent
                that would be into editing video and audio with room for new and
                creative ideas.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Podcasts</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Do you like HUEmanistic podcasts? Would you like to help plan
                future topics or participate in a podcast. We are looking for
                panelists who would love to share their points of view.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Writers / Editors</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                We could use some help with writing copy for our social media, website, scripts, as well as some grammatical editing.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>

          <RowOutline>
            <SubHeader>Organizational</SubHeader>
            <Rule />
            <JobDiv>
              <Para>
                Do you want to help but don't quite know how? Are you organized?
                We could use some help with setting up meetings, organizing
                documents, calendars, and other operational tasks.
                <br />
                <br />
                If this interests you{" "}
                <LinkPurple to="/contact">Drop us a line</LinkPurple> and tell
                us a bit about why you would be a good fit!
              </Para>
            </JobDiv>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}
export default Volunteer;
