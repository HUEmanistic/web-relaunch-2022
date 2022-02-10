import Styled from 'styled-components';
import {

  Row,
  Col,
  CardTitle,
  CardBody,
    Badge,
  Collapse,
    Card,
} from "reactstrap";
import BG from "../media/images/random/protesting_sm_bg.jpg";





export const MainContainer = Styled.div`
    display: flex;
    flex-direction: column;
align-items: center;
align-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
        
`;


export const Page = Styled.body`
display: flex;
display: -webkit-box;
padding: 0;
margin: 0;
background-image: url(${BG});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  position:scroll;
`;

export const ColorRow = Styled(Row)`
display: flex;
justify-content: center;
flex-wrap: nowrap;
width:90%;

            @media (max-width: 1980px) {
                width: 100%;
            }
            @media (max-width: 768px) {
                width:100%;
                flex-wrap: wrap;
                position:fixed;
                
            }
            @media (max-width: 481px) {
                width: 100%;
                position:absolute;
                left: 15px;
            }

`;

export const ColorRow2 = Styled(Row)`
display: flex;
justify-content: center;
flex-wrap: nowrap;
width:48%;
            @media (max-width: 1440px) {
                width: 63%;
            }
            @media (max-width: 1280px) {
                width: 72%;
            }
            @media (max-width: 1025px) {
                width: 90%;
            }
            @media (max-width: 481px) {
                width: 90%;
                position:absolute;
                top: 200px;
                left: 30px;
            }
`;

export const ColorContainer = Styled(Col)`
display: flex;
width: 100%;
margin-top:10%;
flex-direction: column;
align-items: center;
align-content: center;
flex-wrap: nowrap;



            @media (max-width: 1920px) {
                width: 100%;
            }
            @media (max-width: 768px) {
                margin-top:20%;
            }
            @media (max-width: 481px) {
                margin-top:25%;
            }
            @media (max-width: 320px) {
                margin-top:30%;
            }

`;

export const BioCollapse = Styled(Collapse)`
display: flex;
                
        @media (max-width: 768px) {
          width: 68%;
        }
        @media (max-width: 481px) {
            width: 75%;
        }
        @media (max-width: 481px) {
            width: 100%;
        }
`;


export const ColorSwatch = Styled.div`
display: flex;
justify-content: center;
align-items: center;
height:150px;
width:150px;

        @media (max-width: 1440px) {
            height: 100px;
        }
        @media (max-width: 768px) {
            height: 75px;
        }
        @media (max-width: 320px) {
            width: 30%;
        }

`;

export const Para = Styled.p`
display:flex;
text-align: center;
color:white;
font-weight: 500;
font-size: 1.3em;
line-height: 1.5rem;
        @media (max-width: 768px) {
            font-size: .9rem;
        }
`;


export const ImageDiv = Styled.img`
width: 30%;
border-radius: 50%;
margin: 5%;
box-shadow: 5px 5px 8px FFFFFF80;
        @media (max-width: 768px) {

        }
`;

export const ImgRow = Styled(Row)`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
width:100%;
        @media (max-width: 768px) {

        }

`;

export const MemberTitle = Styled(CardTitle)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: nowrap;
width:100%;
font-weight: 600;
        @media (max-width: 768px) {

        }
`;

export const MemberCard = Styled(Card)`
display: flex;
line-height: 2rem;
box-shadow: 0px 10px 5px grey";
        @media (max-width: 768px) {

        }
`;

export const MemberBadge = Styled(Badge)`
display:flex;
font-size: 1rem;
margin: 1% 0;
        @media (max-width: 768px) {

        }
`;

export const MemberDescription = Styled(CardBody)`
display: flex;
text-align: justify;
line-height: 2rem;
        @media (max-width: 768px) {

        }
`;

