import Styled from 'styled-components';
import definition from "../../media/images/about/definition.jpg";
import HUEBG from "../../media/images/background/bg4.jpg";
import { Row, Col, Container } from "reactstrap";


export const Page = Styled.html`
display: flex;
background-image: url(${HUEBG});
background-size: cover;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-attachment: fixed;
height: 100%;
width: 100%;
background-position:fixed;
background-repeat: no-repeat;
`;

// columns

export const NoColOutline2 = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
flex-direction: column;
flex-wrap: nowrap;
padding: 5%;

      @media (max-width: 481px) {
       display:none;
       visibility: hidden;
    }

`;

//rows


export const RowOutline = Styled(Row)`
display:flex;
width: 80%;
border: 1px white dotted;
padding: 5%;
margin-bottom: 5%;
background-color: #FFFFFFE6;
box-shadow: 2px 2px 8px #000000FF;

    @media (max-width: 481px) {
        width: 100%;
        border: 0;
        box-shadow: none;
    }

`;

export const RowNoOutline = Styled(Row)`
display:flex;
align-items: center;
width: 100%;
padding: 2%;
`;


export const Rule = Styled.hr`
width:100%;
height:3px;
padding: 2% 0;
color:black;
`;

//container

export const MainContainer = Styled(Container)`
display: flex;
width:100%;
line-height: 1.5rem;
`;


export const ContentContainer = Styled(Container)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 150%;
padding-top: 15%;
`;

//divs

export const CCSlide = Styled.div`
display:flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
height:400px;

background-repeat: no-repeat;
background-size: cover;
`;


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


//images

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

//text

export const SectionTitle = Styled.h3`
display: flex;
color: black;
font-size: 1.5rem;
font-weight:600;
margin-bottom: 3%;
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

export const Header = Styled.h1`
display:flex;
flex-wrap: nowrap;
justify-content: center;
width: 100%;
font-weight: 500;
font-size: 2em;
color: white;
`;

