import Styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import Logo from "../media/images/logo/logo.png";
import Email from "../media/images/contact/email.png";
import BG from "../media/images/background/bg1.jpg"

export const Page = Styled.body`
    display: flex;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
`;

export const PageTitle = Styled.h1`
display: flex;
color: black;
font-size: 2em;
font-weight:800;

        @media (max-width: 1280px) {
             margin-top: 25%;
            }

        @media (max-width: 767px) {
             margin-top: 15%;
            }
`;



export const ContactText = Styled.p`
display: flex;
color: black;
font-size: 1em;
font-weight:600;
margin-bottom: 3%;
line-height: 2;
text-align: center;
`;

export const HighlightText = Styled.span`
color: turquoise;
`;

export const TitleRow = Styled(Row)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
align-items: center;
justify-content: center;
width: 100%;
padding: 2%;
margin: 1% 0;


`;

export const RowOutline = Styled(Row)`
display:flex;
justify-content: center;
width: 100%;
border: 1px gray dotted;
padding: 5%;
background-color: #DBE0E460;
margin-bottom: 10%;

        @media (max-width: 480px) {
             margin: 0 auto;
            }
`;

export const RowNoOutline = Styled(Row)`
display:flex;
width: 100%;
padding: 2%;
        @media (max-width: 480px) {
             flex-direction: column-reverse;
            }
`;

export const ColOutline = Styled(Col)`
border: 1px lightgray dotted;
padding: 5%;
margin-bottom: 5%;
`;

export const TitleCol = Styled(Col)`
display: flex;
width:10%;
justify-content: flex-end;
`;

export const NoColOutline = Styled(Col)`
padding: 5%;
margin-bottom: 5%;
`;

export const ContentCol = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
padding: 5%;
display:flex;
width: 100%;
background-color: #DEE7E9;
`;

export const ContentCol2 = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -ms-flexbox;
background-color: #DEE7E9;
flex-direction: column;
width: 100%;


`;

export const Italics = Styled.p`
display:flex;
padding: 2% 0;
font-weight: 100;
font-size: 1.2rem;
font-style: italic;
`;

export const MainContainer = Styled(Container)`
display: flex;
width:100%;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`;

export const ContentContainer = Styled(Container)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 150%;
padding-top: 35%;


`;

export const HUELogo = Styled.img.attrs({
  src: `${Logo}`,
})`

    width: 50%;
    position: absolute;
    bottom: 5%;
    left: 25%;

            @media (max-width: 480px) {
             display:none;
             visibility: hidden;
            }


`;

export const EmailImg = Styled.img.attrs({
  src: `${Email}`,
})`

    width: 100%;
    position: relative;
    top: 0;
    left: 0;

        @media (max-width: 480px) {
             display:none;
             visibility: hidden;
            }
        
`;
