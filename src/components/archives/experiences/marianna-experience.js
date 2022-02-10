import React from "react";
import {Link} from "react-router-dom"
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
  TitleRow,

  MainContainer,
} from "../../../styles/experiences_style";

import {StoryImg} from "../../../styles/archive_style"

import Navibar from "../../navbar";


function Experiences() {
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
              <StoryTitle>This is Marianna's Story...</StoryTitle>
              <StoryImg />
              <StoryText>
                From the time I was a child, into adulthood, I’ve battled with a
                voice in my head. A voice that has been passed down through
                generations. A voice that has asked, “Why do they get their own
                awards shows? Why do they get a whole month, dedicated to their
                history? Why do they get Black versions of White movies? Why do
                they… Why do they… Why do they…”
              </StoryText>
              <br />
              <StoryText>
                The older I have gotten, the more ashamed I have gotten. I’m
                ashamed of this voice, and it’s negative and naive nature. I’m
                ashamed that it has taken me so long to dispute the voice on
                educated grounds. I’m ashamed that, on occasion, I listened to
                it, and I spoke the words.
              </StoryText>
              <br />
              <StoryText>
                I grew up in a small farm town in central California, where it
                was rare to interact with a Black person, let alone befriend
                one. Everything I knew about Black people was fed to me through
                media, entertainment, friends, family, or history books. Of
                course not all of it was negative, but if someone had a negative
                experience with a Black person, it was amplified, and wasn’t
                compared to a negative experience with a White person. Which is
                when I began to notice that some people let one unpleasant
                experience color their perspective on the collective. But in the
                same regard, they don’t hold White people, or their preferred
                ethnicity to that same standard.
              </StoryText>
              <br />
              <StoryText>
                For high school, I ventured out of our little farm town and met
                Black friends and other ethnicities through school and work, who
                didn’t appear to be any different than I was. Which led to
                arguments with others about their predispositions, even though I
                still had my own, that nagging voice that would erupt in an
                internal battle. Since I now had Black friends, I didn’t see any
                differences, so I didn’t understand why they were given special
                treatment.
              </StoryText>

              <StoryText>
                Once in college, I ventured even further - all the way to Long
                Beach, California. And there, I met just about every ethnicity.
                I even interned for the Long Beach Branch of the NAACP, but I
                squandered an amazing opportunity to learn a wealth of
                knowledge. Because I had a flaw in my thinking. Their hardships
                were theirs and theirs alone. For that reason, I didn’t connect
                and retain or pursue the knowledge to change my understanding.
              </StoryText>
              <br />
              <StoryText>
                As a full-grown adult, with kids of my own, I didn’t fully
                realize the extent of modern racism and its footing until after
                George Floyd’s murder. Everyday, I learn something new, a new
                angle on White privilege, buried Black history, sun down towns,
                redlining, police violence that has gone unnoticed, and so much
                more. The voice has now gone, packed its bags and left a void
                for a new voice to take up residence. “Why do we treat them like
                a threat? Why do we have such anger and hatred for them? Why do
                we make their children have to grow up so fast?” Our ancestors
                planted a way of thinking in our heads - an us versus them
                mentality. Don’t let your inner voice have the last word,
                challenge it to do better.
              </StoryText>
              <br />
            </ContentCol2>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}

export default Experiences;
