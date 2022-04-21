import Styled from "styled-components";
import {Link } from "react-router-dom"
import { Row, Col, Container } from "reactstrap";
import { SlideInLeft } from "./keyframes";
import Header from "../media/images/experiences/header.jpg";
import BG from "../media/images/experiences/exp_bg.jpg";


export const Page = Styled.html`
        display: flex;
        background-image: url(${BG});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-attachment: fixed;
        position:scroll;
`;



export const PageTitle = Styled.h1`
display: flex;
color: gray;
font-size: 2rem;
font-weight:600;

            @media (max-width: 481px) {
margin-top: 10%;
            }

                        @media (max-width: 320px) {
margin-top: 30%;
font-size: 1.5rem;
            }
`;

export const StoryTitle = Styled.h3`
display: flex;
color: black;
font-size: 1.5rem;
font-weight:600;
margin-bottom: 3%;
`;

export const StoryText = Styled.p`
color: black;
font-size: 1em;
font-weight:600;
margin-bottom: 3%;
line-height: 2;
text-align: justify;
`;

export const TitleRow = Styled(Row)`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 2%;
margin: 1% 0;
`;

export const RowOutline = Styled(Row)`
width: 80%;
border: 1px gray dotted;
padding: 5%;

        @media (max-width: 768px) {
                width: 100%
        }
        @media (max-width: 481px) {
                width: 100%;
                border: none;
        }

            
`;

export const RowNoOutline = Styled(Row)`
width: 100%;
padding: 2%;
margin-bottom: 5%;
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
flex-direction: column;
width: 100%;
`;

export const ContentCol2 = Styled(Col)`
display:flex;
flex-direction: column;
width: 75%;

`;

export const LogoSlide = Styled.div`
display: flex;
width:30%;
animation: ${SlideInLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

`;

export const Italics = Styled.p`
padding: 2% 0;
font-weight: 100;
font-size: 1.2rem;
font-style: italic;
text-align: justify;

        @media (max-width: 1025px) {
                line-height: 1.5rem;
        }
`;

export const HeaderImg = Styled.img.attrs({
  src: `${Header}`,
})`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25%;
        z-index: -10;
`;

export const StoryImg = Styled.img.attrs(props => ({
  src: props.image,
}))`
padding-bottom: 3%;
        width: 100%;
        z-index: 1;
`;



export const MainContainer = Styled(Container)`
display: flex;
`;

export const ContentContainer = Styled(Container)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
padding-top: 30%;

        @media (max-width: 1920px) {
                padding-top: 20%;
        }
        @media (max-width: 1440px) {
                padding-top: 15%;
        }

`;

export const MenuLink = Styled(Link)`
    color: purple;
    font-weight: 600;
    text-decoration: underline;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: underline;
            color: purple;
        }
`;
