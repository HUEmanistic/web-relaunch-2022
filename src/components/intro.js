import React from "react";
import { useHistory } from "react-router-dom";
import {
  AwesomeButton,
  BackgroundContainer,
  ContainerRow,
  ScaleDownImg,
  FadeInText5,
  FadeInText8,
  FadeInText15,
  FadeInText20,
  HalfContainer,
  HalfContainerText,
  ButtonContainer,
  Para,
} from "../styles/intro_style";

function Intro({setSkip}) {
  const history = useHistory();
  const route1 = () => {
    history.push("/intro2");
  };

  const route2 = () => {
    setSkip(true)
    history.push("/main");
  };
  return (
    <>
      <BackgroundContainer>
        <ContainerRow>
         
            <ScaleDownImg>
 <HalfContainer />
            </ScaleDownImg>
          
          <HalfContainerText>
            <ButtonContainer>
              <AwesomeButton
                onClick={route2}>Skip Intro</AwesomeButton>
            </ButtonContainer>

            
              <FadeInText5>
                <Para>Stop.</Para>
              </FadeInText5>
              <FadeInText8>
                <Para>Think For a Moment...</Para>
              </FadeInText8>
              <FadeInText15>
                <Para>Why are you Here?</Para>
              </FadeInText15>
           
<ButtonContainer>
            <FadeInText20>
              <AwesomeButton onClick={route1}>Continue...</AwesomeButton>
            </FadeInText20>
</ButtonContainer>
            
          </HalfContainerText>
        </ContainerRow>
      </BackgroundContainer>
    </>
  );
}

export default Intro;
