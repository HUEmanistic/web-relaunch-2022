import React from "react";

import MediaBias from "../voting/Media-Bias-Chart/MBC-6.0-Standard-License-rccvmx.pdf";

import GovernmentChart from "../voting/government-chart.pdf"
import Navibar from "../../navbar";

import {
  Page,
  MainDiv,
  Container,
  Para,
  Header,
  SubHead,
  SubHead2,
  VotingList,
  
} from "../../../styles/voting_style";

function Voting() {
  return (
    <Page>
      <MainDiv>
        <Navibar />
        <Header>
          Critical Thinking: <br />
          <br />
          How to Conduct Proper Research <br />
          <br /> Before You Vote
        </Header>
        <Container>
          <Para>
            Another election season is upon us. Like most residents in your
            community, you want the best person leading. You want the most
            effective social initiatives protecting your friends and family. You
            want the best possible policies in place to ensure that you, and the
            people you love, have a compelling and prosperous future.{" "}
          </Para>

          <Para>
            We, the humans at HUEmanistic, want this too. We encourage you to
            use the power that you have at your fingertips - and make no
            mistake, you DO have power - to cast your vote and help shape this
            society into one in which we ALL can thrive. But we also want to
            encourage you to be informed about the choices you make. It is
            really easy to cast a vote along your party line, to absently pick
            someone on a whim, or worse, not vote at all.
          </Para>

          <SubHead>We feel that you are better than that. </SubHead>
          <br />
          <br />
          <Para>
            It’s Election Day, and you’re sitting in the voting booth, or
            looking at a mail-in ballot, reviewing all of the overly worded,
            complex choices before you. Feeling uncertain as to who any of these
            people or measures are, you choose your party members or pick a name
            that sounds familiar. You then cast your ballot, walk away, and hope
            that you chose the right candidates before getting on with the rest
            of your life.  
            <br />
            <br />
            If this sounds familiar, you’re not alone.  Many voters tend to vote
            without really knowing much about the candidates. This isn’t
            necessarily their fault. After all, we all have lives to lead, and
            we can’t spend all day listening to CNN or reading the Los Angeles
            Times. However, in the days leading up to Election Day, it’s
            essential to understand who is going to be on your ballot and their
            positions.   
          </Para>

          <SubHead>
            Here are (4) four tips that will help you become a better-informed
            constituent and will help you make the right choice for you and your
            community.
          </SubHead>
          <br />
          <br />
          <br />
          <br />
          <SubHead2> 1.) Decide which issues matter the most to you. </SubHead2>
          <br />
          <Para>
            Before you can decide for who or what to vote, you must decide for
            what you stand. Are you pro educational reform in our schools? Is
            climate change a primary concern for you? Does neighbor safety, care
            for the homeless, or restoring your local parks stand near and dear
            to your heart? Ask yourself which issues are the most important to
            you, and then find the measures that support your convictions and
            candidates who agree with you on those issues.  
          </Para>

          <SubHead2> 2.) Research. Be an investigator.  </SubHead2>
          <br />
          <Para>
            This is a critical and most important part of the process. Once you
            decide for what you stand and who best represents your position, use
            whatever informational tools at your disposal (the library, the
            internet, broadcast programming) and find whatever available
            information you can find. In this day and age, finding basic
            information about people and issues is easier than ever before. The
            World Wide Web is likely the easiest and most accessible tool to do
            so. Type the candidate’s name into a search. Review social media
            posts, comments on news sites, and articles.  Does this person align
            with your core values? Is it an unbiased source?  And by “unbiased”
            we mean does this source have anything to gain if the candidate or
            measure wins or loses?
          </Para>

          <SubHead2> 3.) Study their voting record.</SubHead2>
          <br />
          <Para>
            A candidate’s voting history is a good way to determine how they
            will vote in the future. Even if a candidate has never been elected
            to a public office, you can find their positions through past
            interviews, social media posts, and more. <Para />
            <SubHead>
              Know that you don’t have to do all of this yourself. There are
              several resources available that can provide you with the
              information you need, quickly:  
            </SubHead>
            <br />
            <VotingList>
              <li>
                &bull; If a candidate is currently serving in Congress, then
                check out their voting records at 
                <a href="https://www.congress.gov/">Congress.gov </a>
              </li>
              <br />
              <li>
                &bull; <a href="https://www.vote411.org/">Vote411.org</a> will
                provide you with a list of every person who is on your ballot,
                as well as their positions on the central issues concerning your
                district.  
              </li>{" "}
              <br />
              <li>
                &bull; Separate fact from fiction by using
                <a href="https://www.factcheck.org/">FactCheck.org</a> to check
                candidates’ records and answers on important issues. 
              </li>
            </VotingList>
          </Para>

          <SubHead2> 4.) Follow the money.  </SubHead2>
          <br />
          <Para>
            When in doubt, follow the money. A campaign’s finance history is
            also a good way to figure out who supports the candidate. Look up
            the companies paying for the ads.  Do they align with your core
            values? Do these financial contributors have a hidden agenda?  What
            do they gain by that candidate’s win? See who has donated to a
            candidate’s campaign and ask yourself if those donating align with
            your opinions and interests.  There are several sites you can visit
            to obtain this information. Here is a site with information on
            financial records:
            <a href="https://www.fec.gov/introduction-campaign-finance/how-to-research-public-records/">
              Federal Election Commission - How to research public records
            </a>
          </Para>
          <Para>
            HUEmanistic wants you to have the tools, resources, and information
            to be a better-informed human. The more you understand, the better
            you can exercise your power and create a society that benefits
            everyone.
          </Para>

          <br />
          <br />

          <SubHead> Other Resources  </SubHead>
          <br />
          <br />
          <Para>
            <a href={GovernmentChart}>
              &bull; Check out our chart of how federal and local government are
              structured.
            </a>
            <a href={MediaBias}>
              &bull; Where does your trusted news source fall on this chart? Are
              they unbiased?
            </a>

            <a href="https://www.rockthevote.org/how-to-vote/election-dates-and-deadlines/">
              &bull; Rock the Vote - Where and when to vote
            </a>

            <a href="https://libguides.rutgers.edu/fake_news">
              &bull; How to Evaluate News Resources - Tips &amp; tools
            </a>

            <a href="https://osintframework.com/">
              &bull; OSINT - A Comprehensive Search Framework
            </a>

            <a href="https://youtu.be/BXF1mE8jD0M">
              &bull; An introduction to the OSINT framework
            </a>
          </Para>
        </Container>
      </MainDiv>
    </Page>
  );
}

export default Voting;
