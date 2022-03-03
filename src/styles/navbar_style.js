import Styled from "styled-components";
import { LogoFocusIn, Pulsate } from "./keyframes";
import {
  Navbar,
  Button,
  Nav,
  NavbarBrand,
  Collapse,
    NavbarToggler,
} from "reactstrap";
import Logo from "../media/images/logo/logo.png";
import LogoBlack from "../media/images/logo/black_logo.png";
import { Link } from "react-router-dom";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import {TShirt2} from "@styled-icons/remix-fill/TShirt2"




// divs------------------------------
export const SocialMediaDiv = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
width:30%;



    @media (max-width: 767px) {
        align-content: flex-start;
        width: 80%;
        margin: 5% 0;
        padding: 5% 0;
        border-top: 3px gray solid;
        border-bottom: 3px gray solid;
            }

    @media (max-width: 480px) {
        width: 100%;
        margin: 8% 0;
            }
`;

export const MenuList = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width:  100%;


    

            @media(min-width: 768px) and (max-width: 1024px) {
                width: 100%;
            }
            @media (max-width: 767px) {
                 flex-direction: column;
                 width: 100%;
                 margin: 0;
            }


`;
// icons-----------------------------

export const TshirtLogo = Styled(TShirt2)`
display: flex;
width: 50%;
color: black;
margin: 0 3%;
     &:hover {
                color: #8A2BE2	;
                transition: all 0.2s ease-out;
            }
            @media(max-width: 1280px) {
                width: 60%;
            }
            @media (max-width: 767px) {
                width: 35%;
            }

            @media (max-width: 480px) {
                width: 70%;
            }
`;

export const TwitterLogo = Styled(Twitter)`
display: flex;
width: 40%;
color:black;
margin: 0 3%;
     &:hover {
                color: #8A2BE2	;
                transition: all 0.2s ease-out;
            }
            @media (max-width: 1280px) {
                width: 60%;
            }
            @media (max-width: 767px) {
                width: 35%;
            }
            @media (max-width: 480px) {
                width: 70%;
            }
`;

export const FBLogo = Styled(Facebook)`
display: flex;
width: 50%;
color:black;
margin: 1%;
     &:hover {
                color: #8A2BE2	;
                transition: all 0.2s ease-out;
            }
            @media(max-width: 1280px) {
                width: 60%;
            }
            @media (max-width: 767px) {
                width: 35%;
            }
            @media (max-width: 480px) {
                width: 70%;
            }
`;

export const InstaLogo = Styled(InstagramAlt)`
display: flex;
width: 50%;
color:black;
margin: 1%;
     &:hover {
                color: #8A2BE2	;
                transition: all 0.2s ease-out;
            }
            @media(max-width: 1280px) {
                width: 60%;
            }
                @media (max-width: 767px) {
                width: 35%;
            }
            @media (max-width: 480px) {
                width: 70%;
            }
`;

//text -------------------------------

export const Italics = Styled.p`
display:flex;
display: -webkit-box;
padding: 2% 0;
font-weight: 100;
font-size: 80%;
font-style: italic;
`;


// links---------------------------------
export const LinkBlack = Styled.a`
display: flex;
text-align: center;
font-size: 1.3rem;
color: black;
width: 100%;
font-weight: 300;


     &:hover {
                color: #8A2BE2;
                transition: all 0.2s ease-out;
                text-decoration: none;
            }
            @media(max-width: 1440px) {
                font-size: 1.2rem;
            }
            @media(min-width: 1025px) and (max-width: 1200px) {
                font-size: 1rem;
            }
            @media(min-width: 768px) and (max-width: 1024px) {
                font-size: .90rem;
            }
            @media(max-width: 767px) {
                margin-top: 3%;
            }
            @media (max-width: 480px) {
               font-size: 1rem;
               text-align: left;
            }

`;



export const DonateLink = Styled(Link)`
    display: flex;
    color: black;
    text-decoration: none;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
            @media(max-width: 767px) {
               color: gray;
               margin-top: 3%;
            }

`;

export const InMenuLink = Styled.a`
display: flex;
text-align: center;
color: 	#696969;	
width: 100%;
        
            &:hover {
                text-decoration:none;
                color: #8A2BE2	;
                transition: all 0.2s ease-out;
            }
`;


export const MenuLink = Styled(Link)`
display: flex;
text-align: center;
font-size: 1.3rem;
color: black;
width: 100%;
font-weight: 300;
        
            &:hover {
                text-decoration:none;
                color: 	#8A2BE2;
                transition: all 0.2s ease-out;
            }

        @media (max-width: 1440px) {
            font-size: 1.2rem;
            }
        @media(min-width: 1025px) and (max-width: 1200px) {
                font-size: 1rem;
            }
        @media(min-width: 768px) and (max-width: 1024px) {
                        font-size: .9rem;
                    }
        @media(max-width: 767px) {
               margin-top: 3%;
            }
        @media (max-width: 480px) {
               font-size: 1rem;
            }
        `;

export const NavLinks = Styled(Link)`
    text-decoration: none;
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;

        &:hover {
            background-color: #1888ff;
            border-radius: 4px;
            transition: all 0.2s ease-out;
         }

            @media (max-width: 960px) {
                    text-align: center;
                    padding: 2rem;
                    width: 100%;
                    display: table;
            }
`;


export const MobileLink = Styled.a`

display: none;

    @media (max-width: 767px) {
        display:flex;
        display: -webkit-box;
        text-align: center;
        font-size: 1.5rem;
        color:gray;
        width: 100%;
        font-weight: 600;
        pointer: cursor;
        margin: 1% 0 0 1%;

            }

`;

// ----- NavBar ------------------------
export const Navigation = Styled(Navbar)`
display: flex;
position: fixed;
padding-right:5%;
width: 100%;
top:0;
left:0;
background-color: hsla(0, 0%, 100%, 0.3);
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
text-align: center;
z-Index: 10;
margin-bottom: 5%;
font-family: 'Montserrat', sans-serif;
weight:300;
border-top: 5px #0c00ca solid;
box-shadow: 5px 10px 10px #00000080;


    @media (max-width: 1440px) {
        padding: .5% 4%;
            }

    @media (max-width: 767px) {
        padding: 5%;
            }

`;

export const NavStyle = Styled(Nav)`
display: flex;
width: 100%;
margin: 0 5%;
text-align: center;
align-content: center;


            @media(max-width: 767px) {
                align-content: space-between;
                flex-wrap: nowrap;
            }

`;

export const NavBrandStyle = Styled(NavbarBrand)`
display: flex;
width: 100%;
padding:0;
margin: 0;


        @media (max-width: 5120px) {
      width: 10%;
            }
        @media(max-width: 1920px) {
                width: 15%;
            }

        @media (max-width: 1440px) {
             width: 20%;
            }

        @media(min-width: 1025px) and (max-width: 1200px) {
                width: 20%;
            }

`;



export const NavCollapse = Styled(Collapse)`

    @media (max-width: 767px) {
        display: flex;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      
        
            }
`;

export const NavToggler = Styled(NavbarToggler)`

        @media (max-width: 767px) {
            margin: 0 5%;
            }
        @media (max-width: 767px) {
            margin-right: 25%;
            }
            
`;


//images ------------------------------

export const LogoImg = Styled.img.attrs((props) => ({
    src: props.navbarSolid ? Logo : LogoBlack,

}))`
    width: 100%;
    cursor: pointer;
        @media (max-width: 480px) {
        visibility: hidden;
        width:0%;
            }
`;

// EXAMPLE OF LOGO CHANGE USING SATURATION
// export const LogoImg = Styled.img.attrs((props) => ({
//   src: Logo,
// }))`
//     width: 100%;
//     cursor: pointer;
//     filter: saturate(${(props) => (props.navbarSolid ? "100%" : 0)});
//         @media (max-width: 480px) {
//         visibility: hidden;
//         width:0%;
//             }
// `;


//buttons -------------------------


export const DonateButton = Styled(Button)`
    background-image: linear-gradient(to right, #614385 0%, #516395  51%, #614385  100%);
    padding: 15%;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    font-size: .8rem;
    font-weight: 600;
          

        &:hover {
            background-position: right center; 
            color: #fff;
            text-decoration: none;
          }
          
            &:focus, &:visited, &:link, &:active {
            text-decoration: none;
        }
        
        @media(min-width: 768px) and (max-width: 1024px) {
            margin-right: 5%;
            padding: 10% 20%;
            font-size: .7rem;
            }

        @media (max-width: 767px) {
            display:none;

            }
`;


//animations  -----------------------

export const LogoFade = Styled.div`
display:flex;
display: -webkit-box;
padding: 0;
width: 100%;
animation: ${LogoFocusIn} 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
        @media (max-width: 767px) {
        visibility: hidden;
        width:0%;
            }
`;


export const PulsateButton = Styled.div`
animation: ${Pulsate} 2.5s ease-in-out infinite both;

`;