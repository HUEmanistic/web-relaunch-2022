import React from "react";
import event from "../../../media/images/events/Juneteenth/backgrounds/juneteenth.jpg";
import { ReactTinyLink } from "react-tiny-link";



import {
  eventAccordion,
  historyAccordion,
  flagAccordion,
  foodAccordion,
  booksAccordion,
} from "../../../data/events/juneteenth";

import {
  MainDiv,
  Page,
  MainTitle,
  MainText,
  MainCol,
  ABody,
  Acc,
  AItem,
  AHeader,
  EventLink,
  Frame,
  ContentRow,
  FlagImg
} from "./style";

function Juneteenth() {

const Blog =
  "https://www.mopop.org/about-mopop/the-mopop-blog/posts/2022/june/my-love-and-hate-relationship-with-juneteenth/";

  return (
    <Page style={{ backgroundImage: `url(${event})` }}>
      <MainDiv>
        <MainCol>
          <MainTitle>Celebrate Juneteenth with HUEmanistic!!!</MainTitle>
          <MainText>
            {" "}
            Want to learn more about Juneteeth's traditions, origin, and
            history? You've come to the right place! Our HUEmanistic team wishes
            you a Happy Juneteenth!
          </MainText>
        </MainCol>

<Frame
          src="https://anchor.fm/huemanistic-organization/embed/episodes/The-Origins-of-Juneteenth-e1k4f9p"
          height="102px"
          width="400px"
          frameborder="0"
          scrolling="no"
        ></Frame>
        <ContentRow>
      <FlagImg/>
        <ReactTinyLink
          cardSize="medium"
          header="My Love and Hate Relationship with Juneteenth - by Martin L. Boston"
          width="100%"
          description="Martin L. Boston is an assistant professor of Pan African Studies and Ethnic Studies at California State University, Sacramento (Sacramento State). He holds a doctorate in Ethnic Studies from the University of California, San Diego (UC San Diego), and has also taught at DePaul University, UC San Diego, and Washington State University before joining the Ethnic Studies Department at Sacramento State."
          showGraphic={false}
          maxLine={2}
          minLine={1}
          url={Blog}
        />
</ContentRow>

        <Acc defaultActiveKey="0" flush>
          <AItem eventKey="1">
            <AHeader>Juneteenth Events</AHeader>
            <ABody>
              {eventAccordion.map((event) => {
                return (
                  <>
                    <br />
                    <EventLink href={event.linkaddress}>
                      {event.linkTitle}
                    </EventLink>{" "}
                    ({event.location}) <br /> <br /> <br />
                  </>
                );
              })}
            </ABody>
          </AItem>

          <AItem eventKey="2">
            <AHeader>Juneteenth History</AHeader>
            <ABody>
              {historyAccordion.map((h) => {
                return (
                  <>
                    <EventLink href={h.linkaddress}>{h.linkTitle}</EventLink>
                    <br /> <br /> <br />
                  </>
                );
              })}
            </ABody>
          </AItem>

          <AItem eventKey="3">
            <AHeader>Juneteenth Flag</AHeader>
            <ABody>
              {flagAccordion.map((f) => {
                return (
                  <>
                    <EventLink href={f.linkaddress}>{f.linkTitle}</EventLink>
                    <br /> <br /> <br />
                  </>
                );
              })}
            </ABody>
          </AItem>
          <AItem eventKey="4">
            <AHeader>Juneteenth Books</AHeader>
            <ABody>
              {booksAccordion.map((b) => {
                return (
                  <>
                    <EventLink href={b.linkaddress}>{b.linkTitle}</EventLink>
                    <br /> <br /> <br />
                  </>
                );
              })}
            </ABody>
          </AItem>
          <AItem eventKey="5">
            <AHeader>Juneteenth Food & Drink</AHeader>
            <ABody>
              {foodAccordion.map((f) => {
                return (
                  <>
                    <EventLink href={f.linkaddress}>{f.linkTitle}</EventLink>
                    <br /> <br /> <br />
                  </>
                );
              })}
            </ABody>
          </AItem>
        </Acc>
      </MainDiv>
    </Page>
  );
}

export default Juneteenth;
