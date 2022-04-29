import Styled from "styled-components";
import { LogoFocusIn, Pulsate } from "../keyframes";
import { Navbar, Button, NavbarBrand, NavItem } from "reactstrap";
import LogoColor from "../../media/images/logo/logo_no_phrase_shadow.png";
import { Link } from "react-router-dom";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { TShirt2 } from "@styled-icons/remix-fill/TShirt2";

// divs------------------------------
export const SocialMediaDiv = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
width:100%;

    @media(max-width: 1024px) {
margin: 0 auto;
width:50%; 
border-top: black 1px dotted;
        }

    @media(max-width: 990px) {
        justify-content: space-between;
        width:25%;
        padding: 2% 0;
        border-bottom: black 3px dotted;
        }
    @media(max-width: 900px) {
        width:100%;
        border: none;
        }
    @media (max-width: 600px) {
        padding-bottom: 5%;
       border-bottom: black 1px solid;
        }
        
`;

export const HideMe = Styled.div`
display: none;
visibility: hidden;

        @media(max-width: 990px) {
            display:flex;
            visibility: visible;
            color:black;
            font-size:.35em;
            padding: 0 2%;
            font-weight:800;
            align-items: center;
            color:purple;
        }
         @media (max-width: 768px) {
          font-size: .9rem;
        }
                @media (max-width: 480px) {
        }
`;

export const MenuList = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 2%;
    width:100%;

    @media(max-width: 1024px) {
        width:100%;
        background-color:#b3d9ffCC;
        margin: 0 auto; 
    }  
    @media(max-width: 990px) {
        flex-direction: column;
        background-image: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,50) 91.1% );
        padding: 2% 0;
    }
        @media(max-width: 900px) {
justify-content: center;
align-items: center;
align-content: center;
    }

   
`;

export const NavStyle = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap; 
justify-content: space-evenly;
width: 100%;
margin: 0 5%;
text-align: center;
align-content: center;
align-items: center;


            @media(max-width: 1024px) {
                flex-direction: column;
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
                @media(max-width: 1200px) {
              width: 80%;
            }      
                @media(max-width: 1024px) {
              width: 30%;
              padding-top: 15%;
            }     
                            @media(max-width: 900px) {
                                width:30%;
                                  margin: 0 auto;
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
            @media(max-width: 1200px) {
                width: 80%;
            }      
            @media(max-width: 1024px) {
                width: 30%;
                padding-top: 15%;
            }     
            @media(max-width: 900px) {
                width:30%;
                margin: 0 auto;
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
        @media(max-width: 1200px) {
            width: 80%;
        }      
        @media(max-width: 1024px) {
           width: 30%;
            padding-top: 15%;
        }      
        @media(max-width: 900px) {
           width:30%;
            margin: 0 auto;
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
    @media(max-width: 1200px) {
        width: 80%;
    }      
    @media(max-width: 1024px) {
        width: 30%;
        padding-top: 15%;
    }     
    @media(max-width: 900px) {
        width:30%;
          margin: 0 auto;
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
    text-align:center;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 1.3rem;
    color: black;
    width: 100%;
    font-weight: 500;
    margin: 0 22%; 
    &:hover {
    color: #8A2BE2;
    transition: all 0.2s ease-out;
    text-decoration: none;
}
    @media(max-width: 1200px) {
        width:50%;
        font-size: 1rem;
    }      
    @media(max-width: 990px) {
        padding: 5% 0;
        font-size: 1.5rem;
        border-bottom: black 2px solid;
    }
    @media(max-width: 900px) {
        width:100%;
        border: none;
    }

`;

export const DonateLink = Styled(Link)`
    display: flex;
    color: black;
    text-decoration: none;
    

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

        @media(max-width: 1024px) {
            width: 10%;
            margin: 3% 6% 0 0;
        }
        @media(max-width: 900px) {
            margin-bottom: 3%;
            width: 20%;

        }
                @media (max-width: 600px) {
        margin: 0 auto;
        }
                        @media (max-width: 320px) {
        width:30%;
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

// ----- NavBar ------------------------
export const Navigation = Styled(Navbar)`
display: flex;
position: fixed;
padding-right:5%;
width: 100%;
top:0;
left:0;
background-color: hsla(0, 0%, 100%, 1);
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
text-align: center;
z-Index: 10;
margin-bottom: 5%;
font-family: 'Montserrat', sans-serif;
weight:300;
box-shadow: 5px 5px 5px #00000080;
`;

export const NavBrandStyle = Styled(NavbarBrand)`
display: flex;
width: 10%;


            @media(max-width: 1200px) {
                width:20%;
            }
    @media (max-width: 600px) {
        width: 40%;
        }

`;

export const NaviItem = Styled(NavItem)`
display: flex;
width: 100%;
flex-wrap: nowrap;
align-items: center;

            @media(max-width: 1024px) {
                padding: 3% 0;
                border-top: gray 1px dotted;
            }
    @media(max-width: 900px) {
        border-top: black 1px dotted;
        border-bottom: black 1px dotted;
    }
`;

//images ------------------------------

export const LogoImg = Styled.img.attrs({
  src: `${LogoColor}`,
})`
display:flex;
width: 100%;
        }


`;

// export const LogoImg = Styled.img.attrs((props) => ({
//     src: props.navbarSolid ? Logo : LogoColor,

// }))`
//     width: 100%;
//     cursor: pointer;

// `;

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
            @media(max-width: 1024px) {
        margin: 0 auto;
        width:100%;
        }
    @media(max-width: 990px) {
        margin-top: 50%;
        }
            @media(max-width: 900px) {
        width: 100%;
        }
                @media (max-width: 600px) {
margin-top:10%;

        }
        
`;

//animations  -----------------------

export const LogoFade = Styled.div`
    display:flex;
    display: -webkit-box;
    padding: 0;
    width: 100%;
    animation: ${LogoFocusIn} 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`;

export const PulsateButton = Styled.div`
    display:flex;
    width: 10%;
    justify-content: center;
    animation: ${Pulsate} 2.5s ease-in-out infinite both;

    @media(max-width: 1024px) {
        width: 100%;
        margin-top:3%;
        }
                @media (max-width: 600px) {
          margin-bottom: 3%;
        }


`;
