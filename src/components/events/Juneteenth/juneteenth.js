import React from "react";
import event from "../../../media/images/events/Juneteenth/backgrounds/juneteenth.jpg";
import freeish from "../../../media/images/events/Juneteenth/backgrounds/freeish.png";
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
} from "./style";

function Juneteenth() {
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
      
          <Acc defaultActiveKey="0" flush>
            <AItem eventKey="0">
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

            <AItem eventKey="1">
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

            <AItem eventKey="2">
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
            <AItem eventKey="3">
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
            <AItem eventKey="4">
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
