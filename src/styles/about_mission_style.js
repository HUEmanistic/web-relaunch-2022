import Styled from 'styled-components';
import definition from "../media/images/about/definition.jpg";
import Collage from "../media/images/main/collage.jpg";
import Collage2 from "../media/images/about/collage2.jpg";
import background from "../media/images/background/brick.jpg";

export const WideContainer = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
position: absolute;
align-items: center;
align-content: center;
`;

export const ContentDiv = Styled.div`
width: 50%;
height: auto;
      @media (max-width: 2560px) {
        width:60%;
      }
      @media (max-width: 1920px) {
        width:75%;
      }
      @media (max-width: 767px) {
        width:100%;
      }
`;

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
padding: 10%;
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;

      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }
      @media (max-width: 481px) {
        background-image: none;
        padding:0;
      }
`;

export const WideContainerAbout = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
background-color: hsla(0, 0%, 100%, 0.8);
align-items: center;
`;

export const Collage2Img = Styled.img.attrs({
  src: `${Collage2}`,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -10;
`;

export const CollageImg = Styled.img.attrs({
    src: `${Collage}`,
    alt: "Protest Collage"
})`
   
    width: 100%;
    height: 10%;
    z-index: -10;
`;

export const DefinitionImg = Styled.img.attrs({
  src: `${definition}`,
})`
    margin: 12% 0 9% 0;
    width: 60%;
    box-shadow: 5px 10px #888888;

            @media (max-width: 767px) {
               visibility: hidden;
            }
`;

export const WideContainerAboutMission = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
align-items: center;
background-color: hsla(0, 0%, 0%, 0.85);
padding: 3%;
`;

export const Para = Styled.p`
display:flex;
flex-direction: row;
text-align: center;
color:black;
font-weight: 900;
font-size: 1.4rem;
line-height: 3rem;
padding: 5%;
`;

export const Para2 = Styled.p`
display:flex;
text-align: center;
color:white;
font-weight: 900;
font-size: 1.4rem;
line-height: 3rem;
padding: 5%;
`;

export const Header = Styled.h1`
display:flex;
flex-wrap: nowrap;
justify-content: center;
width: 100%;
font-weight: 500;
font-size: 2em;
color: white;
`;


export const Soslink = Styled.a`
display:flex;
padding: 0 2%;
`;