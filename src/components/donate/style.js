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
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";
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

    @media (max-width: 320px) {
        font-size: 1.3rem;
        margin-top: 5%;
    }
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
    @media (max-width: 481px) {
        justify-content: flex-start;
    }
`;

export const SectionText = Styled.p`
display: flex;
color:black;
font-size: 1.3rem;
font-weight:600;
margin-bottom: 3%;
line-height: 120%;
margin: 0 5%;

                @media (max-width: 320px) {
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

      @media (max-width: 900px) {
        margin-top: 10%;
        width:100%;
      }

    @media (max-width: 481px) {
        width: 100%;
        border: 0;
        box-shadow: none;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

`;

export const RowNoOutline = Styled(Row)`
display:flex;
align-items: center;
width: 100%;
padding: 2%;

            @media (max-width: 480px) {
flex-direction: column-reverse;
padding: 2% 0;
    }   

`;

export const RowNoOutline2 = Styled(Row)`
display:flex;
width: 100%;
padding: 2%;

    @media (max-width: 320px) {
flex-wrap: wrap;
width: 100%;
    }
`;

export const PaypalForm = Styled.form`
display:flex;


    @media (max-width: 1024px) {
margin: 0 5%;
    }
        @media (max-width: 900px) {
margin: 0 auto;
    }
            @media (max-width: 480px) {
width:40%;
    }
                @media (max-width: 320px) {
width:70%;
    }

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

    @media (max-width: 480px) {

justify-content: center;
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
color:black;
margin-bottom: 4%;
`;

export const VenmoImg = Styled.img.attrs({
  src: `${VenmoQR}`,
})`

        width: 90%;
                      @media (max-width: 320px) {
width: 100%;
    }

`;

export const PaypalImg = Styled.img.attrs({
  src: `${PPQR}`,
})`
    display: flex;
    padding-bottom: 3%;
    width: 50%;
    border:black 1px solid;
    @media (max-width: 1200px) {
        width:50%;
    }
    @media (max-width: 1024px) {
        width:50%;
    }
    @media (max-width: 900px) {
        width:50%;
    }
    @media (max-width: 768px) {
        width: 40%;
    }
    @media (max-width: 600px) {
        display:none;
    }

`;

export const MainContainer = Styled(Container)`
display: flex;
width:100%;
line-height: 1.5rem;
    @media (max-width: 600px) {
padding-top: 7%;
    }
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
   color:purple;
   text-decoration:none;
 }
       @media (max-width: 1024px) {
        font-size: 1rem;
        margin: 0;
    }
      @media (max-width: 481px) {
    margin: 2% 0;
    }
            @media (max-width: 320px) {
font-size: .8rem;
text-align:left;
margin-left: 7%;
    }

`;

export const PaypalLogo = Styled(Paypal)`
display: flex;
width:10%;
color:black;

    @media (max-width: 481px) {
        width: 10%;
    }

`;

export const VenmoLogo = Styled(LogoVenmo)`
display: flex;
width: 10%;
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
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 20%;
    }
        @media (max-width: 320px) {
width: 50%;
    }
`;

export const YouTubeLogo = Styled(Youtube)`
display: flex;
width:10%;
color:black;
    @media (max-width: 900px) {
        width: 10%;
    }
    @media (max-width: 600px) {
        width: 15%;
    }
        @media (max-width: 320px) {
width: 50%;
    }
`;

export const TwitterLogo = Styled(Twitter)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 15%;
        margin-right: 2%;
    }
        @media (max-width: 320px) {
width: 50%;
    }
`;

export const FBLogo = Styled(Facebook)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 15%;
    }
        @media (max-width: 320px) {
width: 50%;
    }
`;

export const InstaLogo = Styled(InstagramAlt)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 15%;
        margin-right: 2%;
    }
        @media (max-width: 320px) {
width: 50%;
margin:0;
    }
`;

export const TikTokLogo = Styled(Tiktok)`
display: flex;
width:10%;
color:black;

    @media (max-width: 900px) {
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 15%;
        margin-right: 2%;
    }
        @media (max-width: 320px) {
width: 50%;
margin:0;
    }
`;

export const ContactRow = Styled(Col)`
display:flex;

`;
