import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import { SlideInLeft } from "../keyframes";
import VenmoQR from "../../media/images/donate/qrcode_venmo.png";
import PPQR from "../../media/images/donate/qrcode.png";
import { LogoVenmo } from "@styled-icons/ionicons-solid/LogoVenmo";
import { Paypal } from "@styled-icons/entypo-social/Paypal";
import { Store } from "@styled-icons/boxicons-solid/Store";
import { Youtube } from "@styled-icons/bootstrap/Youtube";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import BG from "../../media/images/background/bg2.jpg";

export const PageTitle = Styled.h1`
display: flex;
color: #ad5389;
font-size: 2em;
font-weight:600;
margin-bottom:5%;

    @media (max-width: 481px) {
        margin-top: 20%
    }
`;

export const SectionTitle = Styled.h3`
display: flex;
color: black;
font-size: 1.5rem;
font-weight:600;
margin-bottom: 3%;
`;

export const SectionTitle2 = Styled.h3`
display: flex;
color: white;
font-size: 1.5rem;
font-weight:600;
width: 70%;

`;

export const SubSectionTitle = Styled.h3`
display: flex;
color: black;
font-size: 1.2rem;
font-weight:600;
margin: 3% 0;
`;

export const SectionText = Styled.p`
display: flex;
color:black;
font-size: 1.3rem;
font-weight:600;
margin-bottom: 3%;
line-height: 120%;
margin: 0 5%;


    @media (max-width: 481px) {
        font-size: 1rem;
    }
`;

export const SectionText2 = Styled.p`
display: flex;
color: black;
font-size: 1rem;
font-weight:100;
`;

export const ContactLink = Styled(Link)`
display:flex;
padding-right: 1%;
font-size: 1.2rem;
`;

export const TitleRow = Styled(Row)`
display:flex;
align-items: center;
justify-content: center;
align-content: center;
width: 100%;
padding: 2%;
margin: 1% 0;
`;

export const TitleRow2 = Styled(Row)`
display:flex;
align-items: center;
justify-content: center;
align-content: center;
width: 100%;
padding: 3% 0;
margin: 1% 0;
border-bottom: 2px black dotted;
`;

export const RowOutline = Styled(Row)`
display:flex;
width: 80%;
border: 1px white dotted;
padding: 5%;
margin-bottom: 5%;
background-color: #FFFFFFE6;
box-shadow: 2px 2px 8px #000000FF;

    @media (max-width: 481px) {
        width: 100%;
        border: 0;
        box-shadow: none;
    }

`;

export const RowNoOutline = Styled(Row)`
display:flex;
align-items: center;
width: 100%;
padding: 2%;
`;

export const ColOutline = Styled(Col)`
border: 1px white dotted;
padding: 5%;
margin-bottom: 5%;
`;

export const TitleCol = Styled(Col)`
display: flex;
width:10%;
justify-content: flex-end;

`;

export const NoColOutline = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
flex-direction: column;
flex-wrap: nowrap;
padding: 5%;



`;

export const NoColOutline2 = Styled(Col)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
flex-direction: column;
flex-wrap: nowrap;
padding: 5%;

      @media (max-width: 481px) {
       display:none;
       visibility: hidden;
    }

`;

export const ContentCol = Styled(Col)`
display:flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-content: center;
align-items: center;
margin: 0 auto;

`;

export const LogoSlide = Styled.div`
display: flex;
width:30%;
animation: ${SlideInLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

`;

export const Italics = Styled.p`
display:flex;

color:black;
padding: 2% 0;
margin-bottom: 5%;
font-weight: 600;
font-size: 1.2rem;
font-style: italic;
width: 100%;
`;

export const Rule = Styled.hr`
width:100%;
height:3px;
padding: 2% 0;
color:black;
`;

export const VenmoImg = Styled.img.attrs({
  src: `${VenmoQR}`,
})`

        width: 90%;
      

`;

export const PaypalImg = Styled.img.attrs({
  src: `${PPQR}`,
})`
padding-bottom: 3%;
        width: 100%;

`;

export const MainContainer = Styled(Container)`
display: flex;
width:100%;
line-height: 1.5rem;
`;

export const Page = Styled.html`
display: flex;

background-image: url(${BG});
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

export const ContentContainer = Styled(Container)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 150%;
padding-top: 15%;
`;

export const LinkBlack = Styled.a`
display: flex;
align-content: center;
align-items: center;
color: black;
font-size: 1.2rem;
font-weight:600;
margin: 3% 5%;
text-decoration:none;
 &:hover {
   color:brown;
   text-decoration:none;
 }
      @media (max-width: 481px) {
        font-size: .8rem;
    }

`;

export const PaypalLogo = Styled(Paypal)`
display: flex;
width:5%;
color:black;

    @media (max-width: 481px) {
        width: 10%;
    }

`;

export const VenmoLogo = Styled(LogoVenmo)`
display: flex;
width: 5%;
margin-right:1%;
color:black;

    @media (max-width: 481px) {
        width: 10%;
    }
`;

export const Storefront = Styled(Store)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 20%;
    }
`;

export const YouTubeLogo = Styled(Youtube)`
display: flex;
width:10%;
color:black;
    @media (max-width: 900px) {
        width: 20%;
    }
`;

export const TwitterLogo = Styled(Twitter)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 20%;
    }
`;

export const FBLogo = Styled(Facebook)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 30%;
    }
`;

export const InstaLogo = Styled(InstagramAlt)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 20%;
    }
`;

export const ContactRow = Styled(Col)`
display:flex;

`;
