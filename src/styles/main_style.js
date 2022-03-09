import Styled from "styled-components";
import Logo from "../media/images/logo/logo_phrase_shadow.png";
import background from "../media/images/background/paint_bg.jpg";
import ColorLogo from "../media/images/color_commentary/CCLogo.png";
import ProfilesBackground from "../media/images/profiles/profiles_background.jpg";
import ProfilesLogo from "../media/images/profiles/profiles_logo.png";

import { Row, Col } from "reactstrap";
import { BounceIn } from "./keyframes";



///////////////////// Main Page Style ///////////////////////

// *body

export const Page = Styled.body`
background-image: url(${background});
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
    width: 200%;
            }
            @media (max-width: 768px) {
             width: 100%;
            }

`;

export const ProfileLogo = Styled.img.attrs({
  src: `${ProfilesLogo}`,
})`
    display:flex;
    height:50%;
    width:auto;
margin-bottom:3%;

            }
            @media (max-width: 768px) {
             width: 100%;
            }
`;



export const CCLogo = Styled.img.attrs({
  src: `${ColorLogo}`,
})`
    display:flex;
    margin: 2% 0;
    height:50%;
    width:auto%;
            }
            @media (max-width: 768px) {
             width: 100%;
            }
`;

export const CarouselContainer = Styled.div`
display:flex;
height:400px;
width:100%;
`;

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

export const Slide = Styled.div`
display:flex;
flex-wrap: nowrap;
justify-content: center;
align-content: center;
align-items: center;
height:400px;
background-repeat: no-repeat;
background-size: cover;
`;

export const ProfilesSlide = Styled.div`
display:flex;
flex-wrap: nowrap;
height:100%;
width:100%;
background-image: url(${ProfilesBackground});
background-repeat: no-repeat;
background-size: cover;
justify-content: space-evenly;
align-items: center;
display:flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;

`;

// *divs

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;

      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }

`;

export const SliderDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 60%;
font-size:1.3rem;
padding-top: 5%;
line-height: 2;
font-style: italic;
`;

export const WebBlockDiv = Styled.div`
display:flex;
flex-direction: column;
// background: ${(props) => props.background}
justify-content: center;
align-items: center;
width: 100%;
text-align:center;
margin:1%;
padding: 5%;
`;

export const ImageDiv = Styled.img`
width: 60%;
border-radius: 50%;
margin: 5%;
box-shadow: 5px 5px 8px #BCB8B8;
        @media (max-width: 768px) {

        }
`;

// *text

export const MainTitle = Styled.h1`
display: flex;
color: #000;
font-size: 6rem;
font-weight: 600;
width:100%;
text-shadow: 5px 5px rgba(0, 0, 255, .2);

            @media (max-width: 1440px) {
             font-size 3rem;
             padding-left: 10%;
             margin-bottom: 2%;
            }
            @media (max-width: 1280px) {
             font-size 3rem;
             width: 90%;
             margin-bottom: 2%;
            }
            @media (max-width: 1024px) {
             font-size 2rem;
             margin-bottom: 3%;
             text-align: center;
            }
            @media (max-width: 481px) {
             width: 100%;
             text-align: center;

            }

`;

export const WebBlockTitle = Styled.h1`
display:flex;
text-decoration: underline;
margin-bottom: 3%;
font-size:2rem;
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

export const DivText = Styled.div`
font-size:1rem;
font-size:600;
text-decoration:underline;
font-style:none;
`;

export const Para = Styled.p`
display:flex;
color:black;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
font-size: 1.2em;
        @media (max-width: 768px) {
            font-size: .9rem;
        }
`;

// *rows


export const ContentRow = Styled(Row)`
display:flex;
flex-direction: row;
width: 100%;
margin:2%;
background: rgba(255,255,255, 0.25);
border-radius: 0 25px;
            @media (max-width: 480px) {
              margin-top: 20%;
            }
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

// *columns

export const PodcastContainerColumn = Styled.div`
display:flex;
flex-direction: column;
width:60%;
margin-bottom:2%;
`;

export const ContentCol1 = Styled(Col)`
display:flex;
margin: 0;
color: #ffffff;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
margin:5%;




            // @media (max-width: 1920px) {
            //   margin: 6% 0 5% 0;
            // }
            // @media (max-width: 1440px) {
            //   margin: 8% 0 5% 0;
            // }
            // @media (max-width: 768px) {
            //   margin-top: 20%;
            // }
            // @media (max-width: 480px) {
            //   margin: 26%;
            // }

`;

export const ContentCol2 = Styled(Col)`
display:flex;
padding:3%;
color: #ffffff;
weight: 500;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border-radius: 15px 50px;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
margin:5%;

            // @media (max-width: 1920px) {
            //   margin: 6% 0 5% 0;
            // }
            // @media (max-width: 1440px) {
            //   margin: 8% 0 5% 0;
            // }
            // @media (max-width: 768px) {
            //   margin-top: 20%;
            // }
            // @media (max-width: 480px) {
            //   margin: 26%;
            // }

`;

export const ContentCol3 = Styled.div`
display:flex;
margin: 0;
color: #ffffff;
flex-direction: column;
width: 100%;
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

//////////////// Profile Style /////////////////////////////

//////////////// Volunteer Style /////////////////////////////

//////////////// Learning Annex Style /////////////////////////////

//////////////// What's HUEmanistic Style /////////////////////////////
