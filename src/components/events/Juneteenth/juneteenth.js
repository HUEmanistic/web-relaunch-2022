import React from "react";
import event from "../../../media/images/events/Juneteenth/backgrounds/juneteenth.jpg";
import freeish from "../../../media/images/events/Juneteenth/backgrounds/freeish.png";

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
} from "./style";

function Juneteenth() {
  return (
    <Page style={{ backgroundImage: `url(${event})` }}>
      <MainDiv
        style={{
          backgroundImage: `url(${freeish})`,
          backgroundSize: "cover",
          height: "100vh",
          position: "fixed",
        }}
      >
        <MainCol>
          <MainTitle>Celebrate Juneteenth with HUEmanistic!!!</MainTitle>
          <MainText>
            {" "}
            Want to learn more about Juneteeth's traditions, origin, and
            history? You've come to the right place! Our HUEmanistic team wishes
            you a Happy Juneteenth!
          </MainText>
        </MainCol>
        <MainCol>
          <Acc defaultActiveKey="0" flush>
            <AItem eventKey="0">
              <AHeader>Juneteenth Events</AHeader>
              <ABody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ABody>
            </AItem>

            <AItem eventKey="1">
              <AHeader>Juneteenth History</AHeader>
              <ABody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ABody>
            </AItem>

            <AItem eventKey="2">
              <AHeader>Juneteenth Flag</AHeader>
              <ABody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ABody>
            </AItem>
            <AItem eventKey="3">
              <AHeader>Juneteenth Books</AHeader>
              <ABody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ABody>
            </AItem>
            <AItem eventKey="4">
              <AHeader>Juneteenth Food & Drink</AHeader>
              <ABody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ABody>
            </AItem>
          </Acc>
        </MainCol>
      </MainDiv>
    </Page>
  );
}

export default Juneteenth;
