import Styled from "styled-components";
import { FadeIn, ScaleDown } from "./keyframes";
import Power from "../media/images/intro/power_web.jpg";
import Walk from "../media/images/intro/walk_web.jpg";
import Fashion from "../media/images/intro/fashion_web.jpg";

//buttons -------------------------

export const AwesomeButton = Styled.button`
display: flex;
justify-content: center;
text-align: center;
box-shadow: 5px 5px 8px black;
border-radius: 20px;
font-size: 1rem;
background-color: black;
color:white;

    @media (min-width:1440px) and (max-width:1920px) {
        font-size 1.2rem;
        padding: 8%;
    }
    @media (max-width:1280px) {
        padding:10%;
    }
    @media (min-width: 481px) and (max-width:768px) {
       border-radius: 30px;
    }
    @media (max-width:768px) {
       padding: 5%;
    }
`;

// Divs --------------------------------

export const BackgroundContainer = Styled.div`
display: flex;
width:100%;
height:100%;
background-color: black;
`;

export const TextContainer = Styled.div`
display: flex;
align-items: center;
align-content: center;
flex-direction: column;
justify-content: center;
text-align: justify;
width: 80%;
margin-top: 25%;

    @media (min-width: 481px) and (max-width:768px) {
        width: 50%;
    }
    
`;

export const TitleContainer = Styled.div`
display: flex;
margin-bottom: 10%;
`;



export const HalfContainer = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width:50vw;
height:100vh;
object-fit:cover;
background-image: url(${Power});
overflow: hidden;
background-size: cover;
background-position: center;
    @media (max-width:768px) {
        width:100%;
    
    }
`;

export const HalfContainer2 = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width:50vw;
height:100vh;
object-fit:cover;
background-image: url(${Walk});
overflow: hidden;
background-size: cover;
background-position: center;
    @media (max-width:768px) {
        width:100%;
    
    }
`;

export const HalfContainer3 = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
width:50vw;
height:100vh;
object-fit:cover;
background-image: url(${Fashion});
overflow: hidden;
background-size: cover;
background-position: center;
    @media (max-width:768px) {
        width:100%;
    
    }
`;

export const ButtonContainer = Styled.div`
display:flex;
justify-content: center;
align-items: center;
align-content: center;
margin: 10% 0 15% 0;
width: 15%;

    @media (max-width:1280px) {
        width:20%;
    }

    @media (min-width: 769px) and (max-width:1024px) {
        width: 25%;
    }
        
    @media (max-width:768px) {
        width:50%;
        overflow:none;
        text-overflow:none;
    }
`;

export const HalfContainerText = Styled.div`
display:flex;
flex-direction: column;
align-items: center;
width:50%;
padding-top: 5%;

    
     @media (max-width:1280px) {
        padding-top: 15%;
    }
    @media (min-width: 1025px) and (max-width:1200px) {
        padding-top: 25%;
    }

    @media (min-width: 769px) and (max-width:1024px) {
        padding-top: 30%;
    }
    @media (max-width:768px) {
        width:100%;
    }
     @media (max-width:480px) {
        padding-top: 15%;
    }
`;

export const ContainerRow = Styled.div`
display:flex;
flex-direction: row;
flex-wrap: nowrap;
width:100%;

    @media (max-width:768px) {
        flex-direction:column;
    }

`;

//text ------------------------------------

export const Para = Styled.p`
display:flex;
text-align: center;
color:white;
font-weight: 500;
font-size: 1.5rem;
line-height: 3rem;
        @media (min-width:1440px) and (max-width:1920px) {
        font-size 2rem;
      
    }
`;

export const Para2 = Styled.p`
display:flex;
flex-wrap: nowrap;
justify-content: center;
color:white;
font-size: 1.5rem;
width: 100%;
font-weight: 900;
line-height: 2rem;
`;

export const Para3 = Styled.p`
display:flex;
flex-wrap: nowrap;
justify-content: center;
color:white;
font-size: 1.5rem;
width: 100%;
font-weight: 200;
line-height: 3rem;

    @media (min-width:1440px) and (max-width:1920px) {
        font-size 1.2rem;
    }
    @media (min-width: 481px) and (max-width:768px) {
        font-size 1rem;
    }
    @media (min-width: 320px) and (max-width:480px) {
        font-size 1rem;
        line-height: 2rem;
    }
`;

//images --------------------------------
export const WalkImg = Styled.img.attrs({
  src: `${Walk}`,
})`
        width:50vw;
        height:100vh;
        object-fit:cover;

        @media (max-width:768px) {
            width:100vw;
       
    }
`;

export const PowerImg = Styled.img.attrs({
  src: `${Power}`,
})`
        width:50vw;
        height:100vh;
        object-fit:cover;

        @media (max-width:768px) {
            width:100vw;
       
    }
`;

//animations ------------------------------

export const ScaleDownImg = Styled.div`
display:flex;
animation: ${ScaleDown} 5s cubic-bezier(0.550, 0.085, 0.680, 0.530) reverse both;
    @media (min-width: 481px) and (max-width:768px) {
        width: 100%;
    }
`;
export const FadeInText3 = Styled.div`
display:flex;
animation: ${FadeIn} 3s 1s ease-out reverse both;
`;

export const FadeInText5 = Styled.div`
display:flex;
animation: ${FadeIn} 5s 1s ease-out reverse both;
`;

export const FadeInText8 = Styled.div`
display:flex;
animation: ${FadeIn} 8s 1s ease-out reverse both;
`;

export const FadeInText15 = Styled.div`
display:flex;
justify-content: center;
width: 100%;
animation: ${FadeIn} 10s 1s ease-out reverse both;
`;

export const FadeInText20 = Styled.div`
display:flex;
justify-content: center;
width: 100%;
animation: ${FadeIn} 20s 1s ease-out reverse both;
`;
