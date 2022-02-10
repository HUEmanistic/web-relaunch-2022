import React from "react";
import Navibar from "../../navbar";

import {
  Page,
  MainDiv,
  Container,
  Para,
  Header,
  SubHead2,
  LinkList,
} from "../../../styles/mlk_style";

function Voting() {
  return (
    <Page>
      <MainDiv>
        <Navibar />
        <Header>
          What does it mean to recognize and celebrate <br />
          Martin Luther King Jr. Day?
        </Header>
        <Container>
          <Para>
            As we continue working towards dismantling the systems of racism
            through education, conversation, and finding a common ground, the
            Humans at HUEmanstic would like to take a few moments to recognize
            MLK day and its cultural and political significance.{" "}
          </Para>

          <Para>
            Legally established as a federal holiday in 1983 and celebrated
            nationally every 3rd Monday in January since 1986, Martin Luther
            King Jr. Day has become a day of reflection, celebration, and the
            opportunity to revisit the work and achievements of one man who gave
            his life to end racial segregation, ultimately making a difference.
          </Para>

          <Para>
            More importantly, MLK Jr. Day is an opportunity for all of us to see
            how far we come as a society in regards to race relations, civil
            rights and the overwhelming work that still needs to be done for
            racial equality. While time and effort has contributed to the
            changing attitudes regarding issues of race, we at HUEmanistic find
            that the road ahead is still paved with challenges that need to be
            addressed. Martin Luther King Jr. Day is not just a holiday - it is
            a yearly reminder for everyone to do their part when it comes to a
            free and fair society.
          </Para>

          <Para>
            Take a look at the following links regarding the history of MLK Jr.
            Day, along with ideas for you, the viewer can use to do your part in
            creating a better world for us all.
          </Para>
          <SubHead2>
            Sincerely,
            <br />
            The Humans at HUEmanstic{" "}
          </SubHead2>
          <br />
          <br />
          <br />
          <br />

          <br />

          <LinkList>
            <li>
              &bull; &nbsp; National Today
              <a href="https://nationaltoday.com/martin-luther-king-jr-day/">
                <br />
                <br />
                https://nationaltoday.com/martin-luther-king-jr-day/
              </a>
            </li>
            <br />
            <li>
              &bull; &nbsp; AmeriCorps
              <br />
              <br />
              <a href="https://americorps.gov/newsroom/events/mlk-day">
                https://americorps.gov/newsroom/events/mlk-day
              </a>
            </li>
            <br />
            <li>
              &bull; &nbsp; Better Homes and Gardens
              <br />
              <br />
              <a href="https://www.bhg.com/holidays/traditions/what-is-martin-luther-king-jr-day/">
                https://www.bhg.com/holidays/traditions/what-is-martin-luther-king-jr-day/
              </a>
            </li>
            <br />
            <li>
              &bull; &nbsp; Camp.com
              <br />
              <br />
              <a href="https://camp.com/articles/ways-to-celebrate-martin-luther-king-jr-day-at-home">
                https://camp.com/articles/ways-to-celebrate-martin-luther-king-jr-day-at-home
              </a>
            </li>
            <br />
            <li>
              &bull; &nbsp; NBC News
              <br />
              <br />
              <a
                href="https://www.nbcnews.com/better/lifestyle/meaningful-ways-celebrate-martin-luther-king-day-
ncna960351"
              >
                https://www.nbcnews.com/better/lifestyle/meaningful-ways-celebrate-martin-luther-king-day-
                ncna960351
              </a>
            </li>
            <br />

            <li>
              &bull; &nbsp;Learning for Justice
              <br />
              <br />
              <a
                href="https://www.learningforjustice.org/professional-development/dos-and-donts-of-celebrating-
mlk-day "
              >
                https://www.learningforjustice.org/professional-development/dos-and-donts-of-celebrating-
                mlk-day
              </a>
            </li>
            <br />
          </LinkList>
        </Container>
      </MainDiv>
    </Page>
  );
}

export default Voting;
