import Styled from "styled-components";
import background from "../components/special_events/mlk/mlk.jpg"


export const Page = Styled.body`
background-image: url(${background});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

    @media (max-width: 768px) {
        background-image: none;
            }

    @media (max-width: 481px) {
        background-image: none;
            }

`;

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
padding: 5%;
background-color: hsla(0, 100%, 100%, 0.75);
// border: red solid 1px;




      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }

`;

export const Container = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
align-items: center;
justify-content: center;
align-items: center;
// border: green solid 1px;
`;

export const Para = Styled.p`
display:flex;
flex-direction: column;
text-align: left;
color:black;
font-size: 1rem;
line-height: 2.5rem;
padding: 0 10% 5% 10%;
`;



export const Header = Styled.h1`
display:flex;
flex-wrap: nowrap;
justify-content: center;
font-weight: 800;
font-size: 2em;
text-align: center;
margin-bottom: 5%;
padding-top: 10%;
line-height: 2;
`;

export const SubHead = Styled.h3`
display:flex;
flex-wrap: nowrap;
justify-content: center;
width: 80%;
font-weight: 500;
font-size: 1rem;
line-height:1.5;
color:black;
`;


export const SubHead2 = Styled.h3`
display:flex;
padding-left:10%;
width: 100%;
font-weight: 500;
font-size: 1.2em;
text-align: left;
line-height:1.5;
color: #CB604C;
`;

export const LinkList = Styled.ul`
display:flex;
flex-direction: column;
width: 90%;
padding-left: 5%;
`



