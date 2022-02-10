import Styled from "styled-components";
import Marianna from "../media/images/experiences/Marianna.jpg"

export const MainContainer = Styled.html`
display: flex;
flex-direction: column;
flex-wrap: wrap;
background-color: lightgray;
height: 100vh;
padding: 10%;
text-align: center;
`;

export const Title = Styled.h1`
font-size: 1.3rem;
font-weight: 600;
margin-bottom: 10%;
`;

export const SecondaryTitle = Styled.h1`
font-size: 1rem;
font-weight: 600;
margin-bottom: 10%;
`;

export const BoldText = Styled.p`
font-weight: 800;
font-size: 1rem;
`;

export const MainDiv = Styled.div`
display:flex;
justify-content: space-between;
border: 1px red solid;
`;

export const LeftDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 40%;
text-align:center;
`;

export const RightDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 40%;
text-align:center;
`;

export const StoryImg = Styled.img.attrs({
  src: `${Marianna}`,
})`
padding-bottom: 3%;
        width: 100%;
        z-index: 1;
`;