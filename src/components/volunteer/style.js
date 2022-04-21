import Styled from "styled-components";
import { Link } from "react-router-dom";
import HUEBG from "../../media/images/background/bg5.jpg";
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

export const NoColOutline = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
flex-wrap: nowrap;
padding: 5%;


      @media (max-width: 481px) {
       display:none;
       visibility: hidden;
    }

`;

//rows

export const MainRowOutline = Styled(Row)`
display:flex;
justify-content: center;
width: 100%;
padding: 5%;
margin-bottom: 5%;
background-color: #FFFFFFE6;
box-shadow: 2px 2px 8px #000000FF;

`;

export const RowOutline = Styled(Row)`
display:flex;
justify-content: center;
width: 80%;
padding: 5%;
margin-bottom: 5%;
background-color: #FFFFFFE6;
box-shadow: 2px 2px 8px #000000FF;

`;

export const RowNoOutline = Styled(Row)`
display:flex;
width: 100%;
padding: 2%;
`;

export const Rule = Styled.hr`
width:100%;
height:3px;
color:black;
margin-bottom: 4%;
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

export const JobDiv = Styled.div`
display:flex;
justify-content: center;
width: 75%;
`;

//link

export const LinkPurple = Styled(Link)`
color:purple;
font-weight:500;
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
color:black;
font-weight: 300;
font-size: 1rem;
line-height: 2rem;

`;

export const Para2 = Styled.p`
display:flex;
flex-direction: row;
text-align: center;
color:black;
font-weight: 300;
font-size: 1rem;
line-height: 2rem;

`;

export const Header = Styled.h1`
display:flex;
flex-wrap: nowrap;
justify-content: center;
width: 100%;
font-weight: 500;
font-size: 2em;
`;


export const SubHeader = Styled.h2`
display:flex;
flex-wrap: nowrap;
justify-content: center;
width: 100%;
font-weight: 300;
font-size: 1.5em;
`;
