import Styled from "styled-components";
import { Row, Col } from "reactstrap";




export const Page = Styled.body`
background-attachment: fixed;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
padding-top: 6%;
font-family: font-family: 'Montserrat', sans-serif;
      @media (max-width: 481px) {
        background-image: none;
        padding:0;
      }

`;


// *divs

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
align-items: center;
// border: blue 1px solid;

      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }

`;


export const ImageDiv = Styled.img`
width: 60%;
border-radius: 50%;
box-shadow: 5px 5px 8px #BCB8B8;
// border: gray 1px solid;

`;


export const ContentRow = Styled.div`
background: #FFFFFF;
width: 100%;
display:flex;
flex-direction: row;
flex-wrap: nowrap;
padding: 3% 0;
            @media (max-width: 1280px) {
              width: 100%;
            }

            @media (max-width: 768px) {
              flex-direction: column;
              align-content: center;
              align-items: center;
            }

`;


export const Section = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
background: #ffffffCC;
color:black;
padding:4%;
margin: 2%;
// border: green 1px solid;
align-items: center;
`;

export const SectionHeader = Styled.div`
display: flex;
flex-direction: row;
width: 100%;
background: #ffffffB3;
color:black;
padding: 2%;
margin: 2%;
// border: green 1px solid;
`;

export const ProfileHeaderCol1 = Styled.div`
display:flex;
width:40%;
flex-direction: column;
margin: 2%;
flex-wrap: nowrap;
color: black;
// border: purple 1px solid;
align-items: flex-end;
`;

export const ProfileHeaderCol2 = Styled.div`
display:flex;
width:60%;
flex-direction: column;
justify-content: center;
align-items: flex-start;
flex-wrap: nowrap;
color: black;
// border: black 1px solid;
`;

// *rows

export const ProfileRow = Styled(Row)`
display:flex;
background: #ffffff80;
flex-wrap: wrap;
padding: 3% 0;
// border: blue 1px solid;
`;



export const ProfileHeaderRow = Styled(Row)`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;

// border: pink 1px solid;
`;

// *cols

export const ProfileCol = Styled(Col)`
display:flex;
margin: 0;
color: black;
flex-direction: column;
width: 50%;
padding:2%;
margin:5%;
// border: yellow 1px solid;
`;

export const ProfileCol2 = Styled(Col)`
display:flex;
margin: 0;
color: black;
flex-direction: column;
width: 100%;
padding:2%;
margin:5%;
// border: red 1px solid;
`;



// *text
export const ProfileName = Styled.h1`
display: flex;
font-weight: 800;
font-size: 2em;
margin: 0 2%;
`;

export const HeaderRoleText = Styled.p`
display: flex;
font-weight: 400;
font-size: 1.1rem;
font-style: italic;
line-height: 2;
margin-top: 1%;
`;

//////////////// Learning Annex Style /////////////////////////////
