import Styled from "styled-components";
import { Row, Col } from "reactstrap";
import Logo from "../../media/images/logo/logo_phrase_shadow.png";
import { BounceIn } from "../keyframes";


export const Page = Styled.body`
background-attachment: fixed;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
padding-top: 6%;
font-family: font-family: 'Montserrat', sans-serif;
      @media (max-width: 481px) {
        background-image: none;
        padding:0;
      }

`;


// *iframe

export const Frame = Styled.iframe.attrs({
  height: "100%",
  width: "100%",
  frameBorder: "0",
  scrolling: "no",
})`
display: flex;,
margin: 0 auto;

`;

// *images

export const LogoImg = Styled.img.attrs({
  src: `${Logo}`,
})`
display:flex;
    width: 100%;
            }
            @media (max-width: 768px) {
             width: 100%;
            }

`;

// divs


export const CarouselContainer = Styled.div`
display:flex;
height:400px;
width:100%;
`;


export const Slide = Styled.div`
display:flex;
flex-wrap: nowrap;
justify-content: center;
align-content: center;
align-items: center;
height:400px;
width:100%;
background-repeat: no-repeat;
background-size: cover;
`;


export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
align-items: center;
// border: blue 1px solid;

      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }

`;


export const WebBlockDiv = Styled.div`
display:flex;
flex-direction: column;
border-radius: 25% 10%;
justify-content: center;
align-items: center;
width: 100%;
text-align:center;
margin:1%;
border-radius: 10% / 50%;
padding: 2%;
box-shadow: 10px 5px 5px gray;
`;

export const ContentRow2 = Styled.div`
background: #FFFFFF;
width: 100%;
display:flex;
flex-direction: row;
flex-wrap: nowrap;
padding: 3% 0;
            @media (max-width: 1280px) {
              width: 100%;
            }

            @media (max-width: 768px) {
              flex-direction: column;
              align-content: center;
              align-items: center;
            }

`;

export const PodcastContainerColumn = Styled.div`
display:flex;
flex-direction: column;
width:60%;
margin-bottom:2%;
`;

export const ContentCol3 = Styled.div`
display:flex;
margin: 0;
color: #ffffff;
flex-direction: column;
width: 100%;
`;



// *text

export const WebBlockTitle = Styled.h1`
display:flex;
text-decoration: underline;
margin-bottom: 3%;
font-size:1.5rem;
font-size:600;
color: black;
text-shadow: 0px -1px 0px rgba(255,255,255,.5); /* 50% white from top */
`;

export const MainText = Styled.p`
display:flex;
width:80%;
line-height:2rem;
font-family: 'Montserrat', sans-serif;
weight: 300;
font-size: 1.5rem;


            @media (max-width: 1024px) {
             width: 80%;
            }
            @media (max-width: 768px) {
             width: 90%;
            }
            @media (max-width: 480px) {
              font-size: 1rem;
            }
`;

// *rows


export const ContentRow = Styled(Row)`
display:flex;
flex-direction: row;
width: 100%;
margin:2%;
border-radius: 0 25px;
            @media (max-width: 480px) {
              margin-top: 20%;
            }
`;



// *columns


export const IntroCol = Styled(Col)`
display:flex;
margin: 0;
color: black;
background: #ffffffCC;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 30px;
width: 100%;
padding:2%;
margin:5%;

`;


// animations

export const LogoBounce = Styled.div`
display:flex;
display: -webkit-box;
display:-webkit-flex
display: -moz-box;
display: -ms-flexbox;
animation: ${BounceIn} 1.1s both;
width:20%;
margin:2% 0 2% 2%;

            @media (max-width: 1440px) {
             width: 40%;
             margin-left: 2%;
            }

            @media (max-width: 768px) {
              width: 45%;
             margin-left: 5%;
            }
            @media (max-width: 480px) {
              margin: 8% 0;
              width: 60%;
            }


`;