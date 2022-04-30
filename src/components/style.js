import Styled from "styled-components";
import { Col } from "reactstrap";
import ColorLogo from "../media/images/color_commentary/CCLogo.png";
import ProfilesLogo from "../media/images/profiles/profiles_logo.png";

// *iframe

export const Frame = Styled.iframe.attrs({
  height: "100%",
  width: "100%",
  frameBorder: "0",
  scrolling: "no",
})`
display: flex;,
margin: 0 auto;

`;

//images
export const ImageDiv = Styled.img`
width: 60%;
border-radius: 50%;
box-shadow: 5px 5px 8px #BCB8B8;
// border: gray 1px solid;

`;

export const CCLogo = Styled.img.attrs({
  src: `${ColorLogo}`,
})`
    display:flex;
    margin: 2% 0;
    height:50%;
    width:auto%;
            }
            @media (max-width: 768px) {
             width: 100%;
            }
`;

export const ProfileLogo = Styled.img.attrs({
  src: `${ProfilesLogo}`,
})`
    display:flex;
    height:50%;
    width:auto;
margin-bottom:3%;

            }
            @media (max-width: 768px) {
             width: 100%;
            }
`;


// *text

export const Para = Styled.p`
display:flex;
color:black;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
font-size: 1.2em;
        @media (max-width: 768px) {
            font-size: 1.5 rem;
            margin-bottom: 15%;
        }
`;


// *columns


export const ContentCol1 = Styled(Col)`
display:flex;
margin: 0;
color: black;
background: white;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
padding:2%;
margin:5%;

        @media (max-width: 768px) {
          margin:0 auto;
          width 50%;
        }

`;


// *divs

export const Section = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
background: #ffffffCC;
color:black;
padding:4%;
margin: 2% 0;
align-items: center;



`;

// *text
export const SectionTitle = Styled.h1`
display: flex;
font-weight: 600;
justify-content: center;
align-items: center;
margin-bottom: 3%;
`;

export const SectionText = Styled.p`
display: flex;
font-weight: 200;
white-space: pre-wrap;
line-height: 2;
`;

// *Lists ul / li

export const UList = Styled.ul`
display:block;
justify-content: center;
align-items: center;
line-height:2;
`;
export const LItem = Styled.li`
display:flex;

`;
