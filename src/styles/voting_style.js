import Styled from "styled-components";
import background from "../components/special_events/voting/sticker.jpg"
import voting1 from "../components/special_events/voting/images/voting-sign.jpg"
import voting2 from "../components/special_events/voting/images/voting-research.jpg";
import voting3 from "../components/special_events/voting/images/vote-pins.jpg";
import voting4 from "../components/special_events/voting/images/flag.jpg";
import voting5 from "../components/special_events/voting/images/research2.jpg";
import voting6 from "../components/special_events/voting/images/magnifying-glass.jpg";


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
`;

export const SubHead = Styled.h3`
display:flex;
flex-wrap: nowrap;
justify-content: center;
width: 80%;
font-weight: 500;
font-size: 1.4em;
line-height:1.5;
color:black;
`;


export const SubHead2 = Styled.h3`
display:flex;
padding-left:10%;
width: 100%;
font-weight: 500;
font-size: 1.2em;
text-align: center;
color: #CB604C;
`;

export const VotingList = Styled.ul`
display:flex;
flex-direction: column;
width: 90%;
padding-left: 5%;
`



export const VotingPic1 = Styled.img.attrs({
  src: `${voting1}`,
})`
    width: 100%;
    object-fit: cover;
    width: 60%;


`;

export const VotingPic2 = Styled.img.attrs({
  src: `${voting2}`,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    -
`;

export const VotingPic3 = Styled.img.attrs({
  src: `${voting3}`,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
-
`;

export const VotingPic4 = Styled.img.attrs({
  src: `${voting4}`,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  -
`;

export const VotingPic5 = Styled.img.attrs({
  src: `${voting5}`,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -10;
`;

export const VotingPic6 = Styled.img.attrs({
  src: `${voting6}`,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -10;
`;