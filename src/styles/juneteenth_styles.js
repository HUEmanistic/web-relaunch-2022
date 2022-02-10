import Styled from "styled-components";
import {
  Card,
  CardTitle,
  CardBody,
  UncontrolledCollapse,
} from "reactstrap";
import { Row, Col, Container } from "reactstrap";
import { Flag } from "@styled-icons/icomoon/Flag"
import { BackInTime } from "@styled-icons/entypo/BackInTime";
import { Celebration } from "@styled-icons/material-sharp/Celebration";
import { FoodCake } from "@styled-icons/fluentui-system-regular/FoodCake";
import { BookHeart } from "@styled-icons/boxicons-regular/BookHeart";
import  Header  from "../media/images/research/header.jpg";
import BG from "../media/images/juneteenth/juneteenth-flag-bg.jpg";



export const Page = Styled.body`
display: flex;
background-image: url(${BG});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  position:scroll;
`;


export const MainContainer = Styled(Container)`
display: flex;
`;

export const HeaderImg = Styled.img.attrs({
  src: `${Header}`,
})`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25%;
        z-index: -5;
`;
export const ContentContainer = Styled(Container)`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
padding-top: 15%;
line-height: 2;
`;

export const PageTitle = Styled.h1`
display: flex;
color: #CC0000;
font-size: 2em;
font-weight:600;
            @media (max-width: 350px) {
             font-size: 1.5rem;
            }
`;

export const TitleRow = Styled(Row)`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 2%;
margin: 1% 0;


            @media (max-width: 550px) {
              margin-top: 10%;
            }
            @media (max-width: 420px) {
              margin-top: 20%;
            }
            @media (max-width: 350px) {
              margin-top: 30%;
            }
`;  

export const RowOutline = Styled(Row)`
display:flex;
justify-content: center;
width: 100%;
border: 1px gray dotted;
background-color: #FFFFFF80;
padding: 5%;
margin-bottom: 10%;
`;

export const RowNoOutline = Styled(Row)`
display:flex;
justify-content: center;
padding: 5%;
width: 100%;

       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }

`;



export const DesktopUnControlledCollapse = Styled(UncontrolledCollapse)`
visibility: visible;
display: inline;

        @media (max-width: 991px) {

            
            display: none;
visibility: hidden;

        }
`;


export const Italics = Styled.p`
display:flex;
padding: 2% 0;
font-weight: 500;
font-size: 1.2rem;
font-style: italic;
line-height: 28px;
color:black;
`;

export const ContentCol = Styled(Col)`
display:flex;
flex-direction: column;
width: 100%;

       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }

`;

export const Subcat = Styled.p`
font-weight: 600;
font-size: 1.5rem;
color:navy;
`;

export const Warning = Styled.p`
font-weight: 600;
font-size: 1rem;
color:red;
`;

export const ContentCol2 = Styled(Col)`
display:flex;
flex-direction: column;
align-items: center;
margin:0;


        @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }

`;

export const FlagIcon = Styled(Flag)`
display: flex;
width: 40%;
color: #CC0000;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const Books = Styled(BookHeart)`
display: flex;
width: 40%;
color: #CC0000;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const HistoryIcon = Styled(BackInTime)`
display: flex;
width: 40%;
color: #CC0000;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const EventsIcon = Styled(Celebration)`
display: flex;
width: 40%;
color: #CC0000;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const FoodIcon = Styled(FoodCake)`
display: flex;
width: 40%;
color: #CC0000;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;


export const IconCard = Styled(Card)`
display: flex;
background-color: transparent;
text-align: center;
justify-content: center;
align-items: center;
border: none;
height: 100%;
width:100%;
padding: 0% 10%;
cursor:pointer;
color:gray;
      
      @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const IconCardTitle = Styled(CardTitle)`
display: flex;
color: black;
font-weight: 500;
margin-top: 25%;
font-size: 1rem;

       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const CategoryTitle = Styled.h2`
font-size: 2rem;
font-weight: 600;
margin: 3% 0;

       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const LinkCard = Styled(Card)`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
border: none;
width:100%;
cursor:pointer;
`;

export const ResourceLink = Styled.a`
font-weight: 600;
text-decoration: none;
color:orange;

&:hover {
    color: brown;
    text-decoration:none;
}
`;

// Mobile Styles

export const MobileContentCol2 = Styled(Col)`
  display:flex;
  flex-direction: column;
  align-items: center;

        @media (max-width: 991px) {
          border-bottom: 1px gray dotted;
          padding: 15%;
            }

`;

export const MobileText = Styled.p`
  display: none;
  visibility: hidden;

        @media (max-width: 991px) {
            text-align:center;
            margin-bottom: 2%;
            visibility: visible;
            display: inline;
            font-style: italic;
            font-size: 1rem;

        }

`;

export const MobileCollapse = Styled(UncontrolledCollapse)`
display: none;
visibility: hidden;

        @media (max-width: 991px) {
            visibility: visible;
            display: inline;

        }
`;

export const MobileIconCard = Styled(Card)`
display: none;
visibility: hidden;
  

            @media (max-width: 991px) {
                display: flex;
                visibility: visible;
                background-color: transparent;
                text-align: center;
                justify-content: center;
                align-items: center;
                height: 100%;
                width:100%;
                padding:15%;
                cursor:pointer;
                width: 40%
                border-bottom: 1px gray dotted;
            }
`;

export const MobileIconCardTitle = Styled(CardTitle)`
display: none;
visibility: hidden;

         @media (max-width: 991px) {
            visibility: visible;
            display: inline;
            color: black;
            font-weight:500;
            font-size: 1rem;
        }
`;

export const MobileRowNoOutline = Styled(Row)`
  display: none;
  visibility: hidden;

            @media (max-width: 991px) {
                display:flex;
                visibility: visible;
                flex-direction: column;
                justify-content: center;
                padding: 5%;
                width: 100%;
            }

`;


export const MobileRule = Styled.hr`
  display: none;
  visibility: hidden;

      @media (max-width: 991px) {
          display:flex;
          visibility: visible;
          padding: 5% 15% 0 15%;
          font-size: 2rem;
          color: gray;
          font-weight: 600;
          margin: 3% 0;
      }
`;



export const MobileCategoryTitle = Styled.h2`
  display: none;
  visibility: hidden;

      @media (max-width: 991px) {
          display:flex;
          visibility: visible;
          padding: 5% 15% 0 15%;
          font-size: 2rem;
          font-weight: 600;
          margin: 3% 0;
      }
`;


export const MobileFlag = Styled(Flag)`
  display: none;
  visibility: hidden;

      @media (max-width: 991px) {
          display:flex;
          visibility: visible;
          width: 30%;
          display: flex;
          color:#CC0000;
      }
`;

export const MobileBooks = Styled(BookHeart)`
  display: none;
  visibility: hidden;


      @media (max-width: 991px) {
        display: flex;
        visibility: visible;
        color: #CC0000;
        width: 30%;
      }
`;

export const MobileHistory = Styled(BackInTime)`
  display: none;
  visibility: hidden;

         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: #CC0000;
              width: 30%;
          }
`;

export const MobileFood = Styled(FoodCake)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: #CC0000;
              width: 30%;
          }
`;

export const MobileEvents = Styled(Celebration)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: #CC0000;
              width: 30%;
          }
`;

export const MobileCardBody = Styled(CardBody)`
  display: none;
  visibility: hidden;


          @media (max-width: 991px) {
              display: flex;
              visibility: visible;           
              flex-direction: column; 
              padding: 15%;
              width: 100%;
          }
`;