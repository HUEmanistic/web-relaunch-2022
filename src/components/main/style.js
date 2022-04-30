import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import Logo from "../../media/images/logo/logo_phrase_shadow.png";
import { BounceIn } from "../keyframes";


export const Page = Styled.body`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
justify-content: center;
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

//link
export const WebBlockLink = Styled(Link)`
display:flex;
width:100%;
height:100%;
text-decoration:none;
color: black;


 &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
              @media (max-width: 1024px) {
                        @media (max-width: 1024px) {
        height:100%;
      
      }
`;

// *iframe

export const Frame = Styled.iframe.attrs({
  height: "100%",
  width: "100%",
  frameborder: "0",
  scrolling: "no",
})`
display: flex;,
margin: 0 auto;
border:none;

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
align-content: center;
width:100%;
max-width:1000px;
margin-bottom:3%;
background-color: #FFFFFFCC;
border-left: violet 5px solid;
border-right: purple 5px solid;

            @media(max-width: 1200px) {
                margin-bottom: 0%;
            }

      @media (max-width: 767px) {
        margin-top: 20%;
      }
              @media (max-width: 600px) {
         margin-top: 5%;
        }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 10%;
      }

`;


export const WebBlockDiv = Styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 100%;
text-align:center;
padding: 5%;
box-shadow: 10px 5px 5px gray; 
                @media (max-width: 320px) {
        padding:10%;
        }

`;

export const WebBlockTextDiv = Styled.div`
display:inline-block;
text-align:center;
            @media(max-width: 1024px) {
display:flex;
justify-content: center;
            }
            

`;

export const ContentRow2 = Styled.div`
background: #FFFFFF;
width: 100%;
display:flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;
flex-wrap: nowrap;
padding: 3%;

            @media (max-width: 1280px) {
              width: 100%;
            }


            @media (max-width: 768px) {
              flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
            }

`;

export const PodcastContainerColumn = Styled.div`
display:flex;
flex-direction: column;
width:60%;
margin-bottom:2%;
        @media (max-width: 768px) {
          width 80%;
        }
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
margin-bottom: 3%;
font-size:1.5rem;
font-size:600;
color: black;
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

export const BlockText = Styled.p`
display:flex;
width:100%;
line-height:2rem;
font-family: 'Montserrat', sans-serif;
weight: 300;
text-decoration: none;
font-size: 1rem;


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


export const ContentRow = Styled.div`
display:flex;
flex-direction:row;
justify-content: center;
width:100%;

flex-direction: row;


            @media (max-width: 480px) {
              margin-top: 20%;
            }
`;



// *columns


export const IntroCol = Styled(Col)`
display:flex;
justify-content: center;
color: black;
background: #ffffffCC;
flex-direction: column;
padding-bottom: 3%; 
align-items: center;
text-align: center;
margin:5% 0;

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
