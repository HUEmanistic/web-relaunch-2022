import Styled from "styled-components";
import { Row, Col } from "reactstrap";

export const Page = Styled.body`
display: flex;
background-attachment: fixed;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
align-items: center;
align-content: center;
padding-top: 6%;
font-family: font-family: 'Montserrat', sans-serif;
        @media (max-width: 768px) {
          padding-top:8%;
        }
        @media (max-width: 600px) {
          padding:0;
        }
      @media (max-width: 481px) {
        background-image: none;
        padding:0;
      }

`;


// *divs

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
max-width: 1000px;
justify-content: center;
align-items: center;
align-content: center;
overflow:hidden;

      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }

`;


export const ImageDiv = Styled.img`
display:flex;
width: 40%;
border-radius: 50%;
box-shadow: 5px 5px 8px #BCB8B8;


        @media (max-width: 1200px) {
         margin-right: 8%;
        }
                @media (max-width: 768px) {
         width: 50%;
        }

        @media (max-width: 600px) {
    width:65%;
        }
                @media (max-width: 320px) {
    width:100%;
    
        }


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
align-items: center;
`;

export const SectionHeader = Styled.div`
display: flex;
flex-direction: row;
width: 100%;
background: #ffffffB3;
color:black;
padding: 2%;
margin: 2% 0;
        @media (max-width: 480px) {
    margin-bottom: 15%;
        }
                @media (max-width: 320px) {
              flex-direction: column;
              align-content: center;
              align-items: center;
        }
        
`;

export const ProfileHeaderCol1 = Styled.div`
display:flex;
width:40%;
flex-direction: column;
margin: 2%;
flex-wrap: nowrap;
color: black;
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
`;

// *rows

export const ProfileRow = Styled(Row)`
display:flex;
background: #ffffff80;
flex-wrap: wrap;
width:100%;
padding: 3% 0;
        @media (max-width: 1024px) {
          width 80%;
        }
        @media (max-width: 320px) {
          width 100%;
        }
`;



export const ProfileHeaderRow = Styled(Row)`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;

// *cols

export const ProfileCol = Styled(Col)`
display:none;
margin: 0;
color: black;
flex-direction: column;
width: 50%;
padding:2%;
margin:5%;
border: yellow 1px solid;
`;

export const ProfileCol2 = Styled(Col)`
display:flex;
margin: 0;
color: black;
flex-direction: column;
width: 100%;
padding:2%;
margin:5%;
`;



// *text
export const ProfileName = Styled.h1`
display: flex;
font-weight: 800;
font-size: 2em;
margin: 0 2%;
        @media (max-width: 600px) {
        font-size:1.5rem;
        }

              @media (max-width: 320px) {
        font-size:1rem;
        }
`;

export const HeaderRoleText = Styled.p`
display: flex;
font-weight: 400;
font-size: 1.1rem;
font-style: italic;
line-height: 2;
margin-top: 1%;
        @media (max-width: 600px) {
        font-size: .8rem;
        }
                      @media (max-width: 320px) {
        font-size: .75rem;
        }
`;

//////////////// Learning Annex Style /////////////////////////////
