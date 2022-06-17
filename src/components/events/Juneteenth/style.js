import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import freeish from "../../../media/images/events/Juneteenth/backgrounds/freeish.jpg";
import { Accordion } from "react-bootstrap";



export const Page = Styled.body`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
justify-content: center;
background-attachment: fixed;
background-position: top;
height: 100vh;
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


// *images

export const BgImg = Styled.img.attrs({
  src: `${freeish}`,
})`
display:flex;
    width: 100%;
    border: red 1px solid;
            }
`;


export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width:100%;
max-width:1000px;
margin-bottom:3%;
padding:3%;

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


export const MainCol = Styled.div`
display:flex;
margin: 0;
background:#ffffffBF;
color: #ffffff;
padding: 2% 0;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
margin-bottom: 5%;


`;

// *text

export const MainTitle = Styled.h1`
display:flex;
color:darkgreen;
width:90%;
padding: 2%;
justify-content: center;
line-height:2.5rem;
font-family: 'Montserrat', sans-serif;
weight: 800;
font-size: 2rem;


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

export const MainText = Styled.p`
display:flex;
width:90%;
color:darkred;
line-height:2rem;
font-family: 'Montserrat', sans-serif;
weight: 300;
font-size: 1.2rem;


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


//ui components

export const Acc = Styled(Accordion)`
color:black;
width:100%;  
background:#ffffffBF;
`;
 
export const ABody = Styled(Accordion.Body)`
background:#ffffffBF;
`;

export const AHeader = Styled(Accordion.Header)`
background:#ffffffBF;
width:100%;
`;

export const AItem = Styled(Accordion.Item)`
background:#ffffffBF;
`;


