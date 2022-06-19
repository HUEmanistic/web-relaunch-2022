import Styled from "styled-components";
import { Accordion } from "react-bootstrap";



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
position:absolute;
top:0px;
right:0px;
bottom:0px;
left:0px;
font-family: font-family: 'Montserrat', sans-serif;

@media (max-width: 481px) {
background-image: none;
padding:0;
}


//Firefox
scrollbar-width: thin;
scrollbar-color: blue orange;


// //Chrome, Edge, Safari

&::-webkit-scrollbar-track {
  background: green;
}
&::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }

&::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 20px;
  border: 1px solid red;
}


`;

//link
export const EventLink = Styled.a`
display:flex;
width:100%;
height:100%;
color: green;

&:hover{
color:black;
text-decoration: red wavy underline;
}

&:focus, &:hover, &:visited, &:link, &:active {

@media (max-width: 1024px) {
height:100%;
}
`;

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
position: absolute;
width:100%;
max-width:1000px;
margin-bottom:3%;
padding:3%;

@media(max-width: 1200px) {
margin-bottom: 0%;
}

@media (max-width: 1024px) {
margin-top: 8%;
}

@media (max-width: 768px) {
margin-top: 10%;
width: 85%;
}

@media (max-width: 600px) {
margin-top: 18%;
width: 90%;
}

@media (min-width:320px) and (max-width: 480px) {
margin-top: 28%;
}
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
    width: 90%;
}
@media (max-width: 768px) {
    text-align:center;
    padding-bottom:3%;
    line-height: 3rem;
    width: 90%;
}
@media (max-width: 480px) {
    font-size: 1.5rem;
}
@media (max-width: 320px) {
    margin-bottom:5%;
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
    width: 70%;
}
@media (max-width: 768px) {
    width: 90%;
}
@media (max-width: 600px) {
width:70%;
text-align: justify;
font-size: 1rem;
padding-bottom:3%;
}

@media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7rem;
}
@media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7rem;
    text-align:left;
}
`;


// *rows

export const ContentRow = Styled.div`
display:flex;
flex-direction:row;
justify-content: center;
width:100%;
flex-direction: row;

`;

// *columns


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
border-radius: 15px 50px;

@media (max-width: 1024px) {
    padding-bottom: 5%;
}
@media (max-width: 768px) {
background:#ffffff;
margin-bottom: 8%;
}

@media (max-width: 480px) {
margin-bottom: 12%;
border-radius: 15px;
}

`;


//ui components

export const Acc = Styled(Accordion)`
color:black;
width:100%;  
background:#ffffffBF;
margin-bottom: 5%;
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


