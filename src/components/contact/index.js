import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import {
  Page,
  EmailImg,
  HUELogo,
  PageTitle,
  RowOutline,
  ContentCol,
  ContentCol2,
  RowNoOutline,
  ContactText,
  TitleRow,
  MainContainer,
  FormLabel,
  FormInput,
  OptionGroup,
} from "./style";
function Contact() {
  return (
    <Page>
      <MainContainer>
        <RowOutline>
          <TitleRow>
            <PageTitle>Contact Us</PageTitle>
          </TitleRow>
          <RowNoOutline>
            <TitleRow>
              <ContactText style={{ backgroundColor: "white", padding: "3%" }}>
                Please contact us to share your Personal Experiences, submit
                questions to Your Black Friend, Company Sponsorship information,
                Volunteer Inquiries or whatever is on your mind. We value your
                opinions and feedback.
              </ContactText>
            </TitleRow>
            <ContentCol>
              <Form action="https://formspree.io/f/maylgyqo" method="post">
                <Row form>
                  <Col md={8}>
                    <FormGroup>
                      <FormLabel for="Name">Name</FormLabel>
                      <FormInput
                        type="Name"
                        name="name"
                        id="Name"
                        placeholder="Nice To Meet You"
                        style={{ border: "none" }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={8}>
                    <FormGroup>
                      <FormLabel for="Email">Email</FormLabel>
                      <FormInput
                        type="Email"
                        name="Email"
                        id="Email"
                        placeholder="Where Can We Reach You?"
                        style={{ border: "none" }}
                      />
                    </FormGroup>
                    <OptionGroup>
                      <FormLabel
                        form="ATTN: "
                        style={{ border: "none", marginBottom: "1%" }}
                      >
                        Who do you want to Contact?
                      </FormLabel>
                      <select id="attn" name="attn" style={{ border: "none" }}>
                        <option value="Org">HUEmanistic Organization</option>
                        <option value="S.Moore">Sean Moore - President</option>
                        <option value="H.Underwood">
                          Hazzauna Underwood - Vice President
                        </option>
                        <option value="B.Fiquett">
                          Brandon Fiquett - Social Media Director
                        </option>
                        <option value="C.Harris">
                          Christina Harris - Tech Director
                        </option>
                        <option value="M.J.">
                          Marianna Jankowski - Secretary
                        </option>
                      </select>
                    </OptionGroup>
                  </Col>
                </Row>
                <OptionGroup>
                  <FormLabel for="Message">Message</FormLabel>
                  <Col lg={16}>
                    <Input
                      type="textarea"
                      name="text"
                      id="message"
                      placeholder="What did you want to say?"
                    />
                  </Col>
                </OptionGroup>
                <Button>Submit</Button>
              </Form>
            </ContentCol>
            <ContentCol2>
              <EmailImg />
              <HUELogo />
            </ContentCol2>
          </RowNoOutline>
        </RowOutline>
      </MainContainer>
    </Page>
  );
}

export default Contact;
