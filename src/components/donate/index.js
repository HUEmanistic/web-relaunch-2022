import React from "react";

import {
  Page,
  ContentContainer,
  RowOutline,
  ContentCol,
  RowNoOutline,
  RowNoOutline2,
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
  TikTokLogo,
  Storefront,
  Rule,
  Italics,
  LinkBlack,
  SectionText,
  PaypalImg,
  TitleRow,
  VenmoImg,
  MainContainer,
  PaypalForm,
} from "./style";

function Donate() {
  return (
    <Page>
      <MainContainer>
        <ContentContainer>
          <RowOutline>
            <SectionTitle>Donate</SectionTitle>
            <Rule />
            <Italics>
              We’re in need of funding to help grow our programs and make a
              difference.
            </Italics>
            <br />
            <br />
            <RowNoOutline2>
              <PaypalLogo />
              <SubSectionTitle> PayPal</SubSectionTitle>
            </RowNoOutline2>
            <RowNoOutline>
              <NoColOutline2>
                <PaypalImg />
              </NoColOutline2>

              <PaypalForm
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
              </PaypalForm>

              <NoColOutline2>
                <LinkBlack href="paypal.me/HUEmanistic">
                  paypal.me/HUEmanistic
                </LinkBlack>
              </NoColOutline2>
            </RowNoOutline>
            <Rule />
            <RowNoOutline2>
              <VenmoLogo />
              <SubSectionTitle>Venmo</SubSectionTitle>
            </RowNoOutline2>
            <RowNoOutline2>
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
            </RowNoOutline2>
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

            <TitleRow>
              <ContentCol>
                <SectionTitle2>
                  <TikTokLogo />{" "}
                  <LinkBlack href="https://www.tiktok.com/@huemanistic">
                    HUEmanistic's TikTok Channel
                  </LinkBlack>
                </SectionTitle2>
              </ContentCol>
            </TitleRow>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}

export default Donate;
