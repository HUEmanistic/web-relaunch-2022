import React from "react";
import { useHistory } from "react-router-dom";
import {
  AwesomeButton,
  BackgroundContainer,
  ButtonContainer,
  ContainerRow,
  ScaleDownImg,
  FadeInText3,
  FadeInText5,
  FadeInText8,
  FadeInText15,
  HalfContainer2,
  HalfContainerText,
  Para,
} from "../styles/intro_style";

function Intro2({setSkip}) {
  const history = useHistory();

  const route1 = () => {
    history.push("/intro3");
  };

  const route2 = () => {
    setSkip(true);
    history.push("/main");
  };
  return (
    <>
      <BackgroundContainer>
        <ContainerRow>
          
            <ScaleDownImg>
           <HalfContainer2 />
            </ScaleDownImg>
      
          <HalfContainerText>
            <ButtonContainer>
              <AwesomeButton onClick={route2}>Skip Intro</AwesomeButton>
            </ButtonContainer>

            <FadeInText3>
              <Para>Are you ready for change?</Para>
            </FadeInText3>
            <FadeInText5>
              <Para>We are</Para>
            </FadeInText5>
            <FadeInText8>
              <Para>If not now...</Para>
            </FadeInText8>
            <ButtonContainer>
            <FadeInText15>
              <AwesomeButton onClick={route1}>When? </AwesomeButton>
            </FadeInText15>
            </ButtonContainer>
          </HalfContainerText>
        </ContainerRow>
      </BackgroundContainer>
    </>
  );
}

export default Intro2;
