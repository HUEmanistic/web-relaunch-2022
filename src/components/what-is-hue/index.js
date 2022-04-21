import React from "react";

import {
  SectionTitle,
  NoColOutline,
  Rule,
  MainContainer,
  Page,
  DefinitionImg,
  Para,
  ContentContainer,
  RowOutline,
  RowNoOutline,
} from "./style";

function Mission() {
  return (
    <Page>
      <MainContainer>
        <ContentContainer>
          <RowOutline>
            <SectionTitle>What is HUEmanistic?</SectionTitle>
            <Rule />

            <NoColOutline>
              <DefinitionImg />
            </NoColOutline>
            <Rule />

            <RowNoOutline>
              <Para>
                To be HUEmanistic (Hu•man•ist•ic) is to adopt diversity and
                equality as the norm; advocating against racism and believing
                that every human, despite color, has and deserves the potential
                to be great. By peeling away the societal layers that define and divide us,
                we can re-educate and build an understanding and supportive
                society that embraces our differences. Creating a movement
                around building community and branching from there to build
                bridges of true unification and solidarity for us, as humans,
                despite our color.
              </Para>
            </RowNoOutline>
          </RowOutline>

          <RowOutline>
            <SectionTitle>What's Our Mission?</SectionTitle>
            <Rule />
            <Para>
              Our mission is to enlist, develop, and educate our world's
              communities to evolve by becoming allies who harness diversity,
              inclusion and equity, despite the many hues of our skin. We strive
              to harness the power of being better together, one neighbor at a
              time.
            </Para>
          </RowOutline>

          <RowOutline>
            <SectionTitle>What is HUEmanistic's Vision?</SectionTitle>
            <Rule />
            <Para>
              A unified nation where ALL people experience the same privileges
              and basic human rights.
            </Para>
          </RowOutline>

          <RowOutline>
            <SectionTitle>Why Do We Exist?</SectionTitle>
            <Rule />
            <Para>
              We are one race, the human race, yet the everyday inequities Black
              and Brown people face must be addressed. A longtime racial divide
              needs to be dismantled--one which includes avoiding hasty
              decisions to accept misinformation, breaking down harmful
              stereotypes and misunderstandings, and boosting educational and
              diversified perspectives to teach the next generation to do
              better. By bridging the gap of understanding through education,
              community empowerment and advocacy, we can rebuild our communities
              to include the voices of Black and Brown lives; bringing forth
              positive connections and solidarity with diversity, inclusion and
              equity for all.{" "}
            </Para>
          </RowOutline>

          <RowOutline>
            <SectionTitle>What are HUEmanistic's Values?</SectionTitle>
            <Rule />
            <Para>
              Grounded in humanity. We are a humanitarian-focused 501(c)3
              organization with no political or religious affiliation.{" "}
            </Para>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}
export default Mission;
