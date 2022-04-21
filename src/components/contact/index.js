import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
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
} from "./style";
function Contact() {
  return (
    <Page>
      <MainContainer>
        <TitleRow>
          <PageTitle>Contact Us</PageTitle>
        </TitleRow>
        <RowOutline>
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
                      <Input
                        type="Name"
                        name="name"
                        id="Name"
                        placeholder="Nice To Meet You"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={8}>
                    <FormGroup>
                      <FormLabel for="Email">Email</FormLabel>
                      <Input
                        type="Email"
                        name="Email"
                        id="Email"
                        placeholder="Where Can We Contact You?"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="ATTN: ">Who do you want to Contact?</FormLabel>
                      <select id="cars" name="cars">
                        <option value="volvo">HUEmanistic Organization</option>
                        <option value="saab">Sean Moore - President</option>
                        <option value="fiat">Hazzauna Underwood - Vice President</option>
                        <option value="audi">Brandon Fiquett - Social Media Director</option>
                        <option value="audi">Christina Harris - Tech Director</option>
                        <option value="audi">Marianna Jankowski - Secretary</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <FormLabel for="Message">
                  Message
                  </FormLabel>
                  <Col lg={12}>
                    <Input
                      type="textarea"
                      name="text"
                      id="message"
                      placeholder="What did you want to say?"
                    />
                  </Col>
                </FormGroup>
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
