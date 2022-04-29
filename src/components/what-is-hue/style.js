import Styled from "styled-components";
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

export const NoColOutline = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
flex-wrap: nowrap;
padding: 5%;


      @media (max-width: 600px) {
       display:none;
       visibility: hidden;
    }


`;

//rows

export const RowOutline = Styled(Row)`
display:flex;
justify-content: center;
width: 100%;
padding: 5%;
margin-bottom: 5%;
background-color: #FFFFFFA6;
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
padding: 2% 0;
color:black;

        @media (max-width: 600px) {
        display: none;
        }

`;

//container

export const MainContainer = Styled(Container)`
display: flex;
width:100%;
line-height: 1.5rem;
        @media (max-width: 600px) {
        margin-top:15%;
        }

`;

export const ContentContainer = Styled(Container)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 150%;
padding-top: 15%;
`;



//images

export const DefinitionImg = Styled.img.attrs({
  src: `${definition}`,
})`

  width: 100%;
  box-shadow: 5px 10px #888888;
  border: gray 1px solid;
        @media (max-width: 600px) {
        display:none;
        }

`;

//text

export const SectionTitle = Styled.h3`
display: flex;
color: black;
font-size: 1.5rem;
font-weight:600;
margin-bottom: 3%;
        @media (max-width: 600px) {
        justify-content: center;
        width:100%;
        }
        @media (max-width: 480px) {
        margin-top:5%;
        }
        @media (max-width: 320px) {
        font-size: 1.3rem;
        }

`;

export const Para = Styled.p`
display:flex;
flex-direction: row;
text-align: center;
color:black;
font-weight: 500;
font-size: 1.2rem;
line-height: 3rem;
padding: 5%;

        @media (max-width: 320px) {
        font-size: 1rem;
        }
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
