import React from "react";
import Navbar from "./navbar";

import {
  Page,
  PageTitle,
  ContentContainer,
  RowOutline,
  ContentCol,
  RowNoOutline,
  SectionTitle,
  SubSectionTitle,
  SectionTitle2,
  NoColOutline,
  NoColOutline2,
  PaypalLogo,
  VenmoLogo,
  YouTubeLogo,
  TwitterLogo,
  FBLogo,
  InstaLogo,
  Storefront,
  Rule,
  Italics,
  LinkBlack,
  SectionText,
  SectionText2,
  PaypalImg,
  TitleRow,
  TitleRow2,
  VenmoImg,
  MainContainer,
  ContactLink,
  ContactRow
} from "../styles/donate_style";

function Donate() {
  return (
    <Page>
      <MainContainer>
        <Navbar />
        <ContentContainer>
          <PageTitle>How Can I Help?</PageTitle>

          <RowOutline>
            <SectionTitle>Future Programs</SectionTitle>
            <Rule />
            <Italics>
              We have a lot of ideas. Check out what future programs your
              donations will help make possible!
            </Italics>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>HUEmanistic Kids</SubSectionTitle>
                <SectionText2>
                  {" "}
                  Resources for Parents to teach their kids how to be
                  anti-racist.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>The Spotlight</SubSectionTitle>
                <SectionText2>
                  {" "}
                  Current events, policies, and laws that effect the
                  disenfranchised.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>
                  The Psychological Effects of Racism
                </SubSectionTitle>
                <SectionText2>
                  {" "}
                  The mental and emotional effects that racism has.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>
                  Cultural Sensitivity &amp; Communication
                </SubSectionTitle>
                <SectionText2>
                  {" "}
                  Understanding who We are as a Culture.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>Know Your Rights</SubSectionTitle>
                <SectionText2>
                  {" "}
                  Knowing what to do may save your life.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>Uncovered Truths</SubSectionTitle>
                <SectionText2>
                  {" "}
                  History you weren't supposed to know.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>The Notorious</SubSectionTitle>
                <SectionText2>
                  {" "}
                  We dissect and debunk the misinformation from those who have
                  gained notoriety from spreading it.
                </SectionText2>
              </ContentCol>
            </TitleRow2>

            <TitleRow2>
              <ContentCol>
                <SubSectionTitle>Community Outreach & Coaching</SubSectionTitle>
                <SectionText2>
                  {" "}
                  Neighborhood conversations and events.
                </SectionText2>
              </ContentCol>
            </TitleRow2>
          </RowOutline>
          <RowOutline>
            <SectionTitle>Donate</SectionTitle>
            <Rule />
            <Italics>
              We’re in need of funding to help grow our programs and make a
              difference.
            </Italics>
            <br />
            <br />
            <RowNoOutline>
              <PaypalLogo />
              <SubSectionTitle> PayPal</SubSectionTitle>
            </RowNoOutline>
            <RowNoOutline>
              <NoColOutline2>
                <PaypalImg />
              </NoColOutline2>

              <NoColOutline>
                <form
                  style={{ marginLeft: "25%" }}
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="E7VMQYNL3U4HG"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </NoColOutline>
              <NoColOutline2>
                <LinkBlack href="paypal.me/HUEmanistic">
                  paypal.me/HUEmanistic
                </LinkBlack>
              </NoColOutline2>
            </RowNoOutline>
            <Rule />
            <RowNoOutline>
              <VenmoLogo />
              <SubSectionTitle>Venmo</SubSectionTitle>
            </RowNoOutline>
            <RowNoOutline>
              <NoColOutline>
                <VenmoImg />
              </NoColOutline>

              <NoColOutline>
                <RowNoOutline>
                  <SectionText>
                    @HUEmanistic-Organization <br />
                    last four digits 5391
                  </SectionText>
                </RowNoOutline>
              </NoColOutline>
            </RowNoOutline>
          </RowOutline>

          <RowOutline>
            <SectionTitle>Shop</SectionTitle>
            <Rule />
            <Italics>
              Buy our merchandise and spread the word of HUEmanaistic.
            </Italics>

            <TitleRow>
              <ContentCol>
                <SectionTitle2>
                  <Storefront />{" "}
                  <LinkBlack href="https://www.bonfire.com/store/the-huemanistic-store/">
                    HUEmanistic's Bonfire Storefront
                  </LinkBlack>
                </SectionTitle2>
              </ContentCol>
            </TitleRow>
          </RowOutline>

          <RowOutline>
            <SectionTitle>Follow Us</SectionTitle>
            <Rule />

            <TitleRow>
              <ContentCol>
                <SectionTitle2>
                  <TwitterLogo />{" "}
                  <LinkBlack href="https://twitter.com/huemanistic">
                    HUEmanistic's Twitter Feed
                  </LinkBlack>
                </SectionTitle2>
              </ContentCol>
            </TitleRow>

            <TitleRow>
              <ContentCol>
                <SectionTitle2>
                  <FBLogo />{" "}
                  <LinkBlack href="https://www.facebook.com/HUEmanistic/">
                    HUEmanistic's FaceBook Page
                  </LinkBlack>
                </SectionTitle2>
              </ContentCol>
            </TitleRow>

            <TitleRow>
              <ContentCol>
                <SectionTitle2>
                  <InstaLogo />{" "}
                  <LinkBlack href="https://www.instagram.com/huemanistic_commonground/">
                    HUEmanistic's Instagram
                  </LinkBlack>
                </SectionTitle2>
              </ContentCol>
            </TitleRow>

            <TitleRow>
              <ContentCol>
                <SectionTitle2>
                  <YouTubeLogo />{" "}
                  <LinkBlack href="https://www.youtube.com/channel/UCO0h8qhbSa9MbQBJjvkgIiA">
                    HUEmanistic's YouTube Channel
                  </LinkBlack>
                </SectionTitle2>
              </ContentCol>
            </TitleRow>
          </RowOutline>

          <RowOutline>
            <SectionTitle>Volunteer Positions</SectionTitle>
            <Rule />
            <Italics>
              We’re a small nonprofit, with a big cause. We need volunteers and
              talented individuals to help promote positive change in our
              communities.
            </Italics>

            <TitleRow>
              <ContentCol>
                <SectionText>
                  Current needs:
                  <br />
                  <br />
                  ⚉ Graphic Design
                  <br />⚉ Book Reviews
                </SectionText>
              </ContentCol>
            </TitleRow>
            <ContactRow>
            <Italics>
              <ContactLink to="contact" >
                {" "}
                Contact Us 
              </ContactLink>
              to inquire for more information.
            </Italics>
            </ContactRow>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}

export default Donate;
