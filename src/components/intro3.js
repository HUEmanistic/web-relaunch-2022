import React from "react";
import { useHistory } from "react-router-dom";
import {
  AwesomeButton,
  BackgroundContainer,
  ContainerRow,
  ScaleDownImg,
  FadeInText5,
  FadeInText8,
  FadeInText20,
  HalfContainer3,
  HalfContainerText,
  TextContainer,
  TitleContainer,
  ButtonContainer,
  Para3,
  Para2
} from "../styles/intro_style";

function Intro3({setSkip}) {
  const history = useHistory();

  const route1 = () => {
    setSkip(true)
    history.push("/main");
  }
    


  return (
    <>
      <BackgroundContainer>
        <ContainerRow>
         
            <ScaleDownImg>
              <HalfContainer3 />
            </ScaleDownImg>
        
          <HalfContainerText>
            <TextContainer>
              <TitleContainer>
              <FadeInText5>
              <Para2>We Are HUEmanistic</Para2>
            </FadeInText5>
            </TitleContainer>
            <FadeInText8>
              <Para3>
                Our mission is to enlist, develop, and educate our world's
                communities to evolve by becoming allies who harness diversity,
                inclusion and equity, despite the many hues of our skin. We
                strive to harness the power of being better together, one
                neighbor at a time.
              </Para3>
              </FadeInText8>
            </TextContainer>
            <br></br>
            <br></br>
            <ButtonContainer>
              <FadeInText20>
                <AwesomeButton
                  
                  onClick={route1}
                >
                  Enter Site
                </AwesomeButton>
              </FadeInText20>

            
            </ButtonContainer>
          </HalfContainerText>
        </ContainerRow>

      </BackgroundContainer>
    </>
  );
}
export default Intro3;
