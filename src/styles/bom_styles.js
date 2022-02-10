import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Container, Media } from "reactstrap";
import BG from "../media/images/BOM/bom_bg.jpg";

export const Page = Styled.body`
    display:-webkit-flex
    display: -moz-box;
    display: -ms-flexbox;
    background-image: url(${BG});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    max-height: 100vh;

`;

export const PageTitle = Styled.h1`
display: flex;
color: gray;
font-size: 2rem;
font-weight:600;
margin-bottom: 5%;

        @media (max-width: 1025px) {
            font-size: 1.5rem;
        }

        @media (max-width: 481px) {
            margin-top: 10%;
        }

        @media (max-width: 320px) {
            margin-top: 30%;
            font-size: 1.5rem;
        }

`;

export const TitleRow = Styled(Row)`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 2%;
margin: 1% 0;

`;

export const BookMedia = Styled(Media)`

    text-align:justify;

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 10%;
        flex-direction: column;
    }
    @media (max-width: 320px) {
        text-align:left;
    }

`;

export const MainContainer = Styled(Container)`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
margin-top: 10%;
align-items: center;


        @media (max-width: 600px) {
        margin-top: 30%;
        }

        @media (max-width: 320px) {
        margin-top: 20%;
        text-align:center;
        }



`;

export const RowOutline = Styled(Row)`
display:flex;
width: 100%;
background-color: #FFFFFF80;
border: 1px gray dotted;
padding: 5%;
margin-bottom: 5%;
flex-wrap: nowrap;

    @media (max-width: 767px) {
        margin-top: 10%;
        flex-direction: column;
        flex-wrap: wrap;
            }
    @media (max-width: 320px) {
        border: none;
    }
`;

export const ColOutline = Styled(Col)`
display:flex;
border: 1px lightgray dotted;
padding: 5%;
margin-bottom: 5%;
background-color: #FFFFFF80;
flex-direction: column;


@media (max-width: 320px) {
        border: none;
    }
`;

export const NoColOutline = Styled(Col)`
padding: 5%;
margin-bottom: 5%;
`;

export const RowNoOutline = Styled(Row)`

    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
            }
`;

export const MenuLink = Styled(Link)`
display:flex;
justify-content: center;
padding-top: 10%;
color: gray;
font-weight: 600;
text-decoration: underline;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: underline;
        color: gray;
    }
`;

export const Reviews = Styled.p`
line-height: 150%;
`;
