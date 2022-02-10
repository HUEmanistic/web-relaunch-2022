import Styled from "styled-components";
import {
  Card,
  CardTitle,
  CardBody,
  UncontrolledCollapse,
} from "reactstrap";
import { Row, Col, Container } from "reactstrap";
import { PoliceCar } from "@styled-icons/remix-fill/PoliceCar"
import { HandHoldingHeart } from "@styled-icons/fa-solid/HandHoldingHeart";
import { Book } from "@styled-icons/bootstrap/Book";
import { AcademicCap } from "@styled-icons/heroicons-solid/AcademicCap";
import { Film } from "@styled-icons/boxicons-solid/Film"
import { FamilyRestroom } from "@styled-icons/material/FamilyRestroom";
import { Groups } from "@styled-icons/material-outlined/Groups";
import { Random } from "@styled-icons/fa-solid/Random";
import  Header  from "../media/images/research/header.jpg";
import BG from "../media/images/research/bookbg.jpg";
import {PersonFeedback} from "@styled-icons/fluentui-system-filled/PersonFeedback";

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
`;

export const PageTitle = Styled.h1`
display: flex;
color: gray;
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
font-weight: 100;
font-size: 1.2rem;
font-style: italic;
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


        @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }

`;

export const LawEnforcement = Styled(PoliceCar)`
display: flex;
width: 60%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const AntiRacist = Styled(HandHoldingHeart)`
display: flex;
width: 60%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;


export const EducationResources = Styled(AcademicCap)`
display: flex;
width: 80%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const DandI = Styled(Groups)`
display: flex;
width: 80%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const Family = Styled(FamilyRestroom)`
display: flex;
width: 80%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const Books = Styled(Book)`
display: flex;
width: 80%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const Movies = Styled(Film)`
display: flex;
width: 80%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const Various = Styled(Random)`
display: flex;
width: 80%;
color: gray;
 
       @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const Experience = Styled(PersonFeedback)`
display: flex;
width: 80%;
color: gray;
 
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
padding: 0% 15%;
cursor:pointer;
color:gray;
      
      @media (max-width: 991px) {
            visibility: hidden;
            display: none;
        }
`;

export const IconCardTitle = Styled(CardTitle)`
display: flex;
color: gray;
margin: 25%;
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
            color: gray;
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

export const MobileContentCol = Styled(Col)`
  display: none;
  visibility: hidden;

            @media (max-width: 991px) {
              display:flex;
              visibility: visible;
              flex-direction: column;
              width: 100%;
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


export const MobileLawEnforcement = Styled(PoliceCar)`
  display: none;
  visibility: hidden;

      @media (max-width: 991px) {
          display:flex;
          visibility: visible;
          width: 30%;
          display: flex;
          color:gray;
      }
`;

export const MobileAntiRacist = Styled(HandHoldingHeart)`
  display: none;
  visibility: hidden;


      @media (max-width: 991px) {
        display: flex;
        visibility: visible;
        color: gray;
        width: 30%;
      }
`;

export const MobileEducationResources = Styled(AcademicCap)`
  display: none;
  visibility: hidden;

         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: gray;
              width: 30%;
          }
`;

export const MobileDandI = Styled(Groups)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: gray;
              width: 30%;
          }
`;

export const MobileFamily = Styled(FamilyRestroom)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: gray;
              width: 30%;
          }
`;

export const MobileBooks = Styled(Book)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: gray;
              width: 30%;
          }
`;

export const MobileMovies = Styled(Film)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: gray;
              width: 30%;
          }
`;

export const MobileVarious = Styled(Random)`
  display: none;
  visibility: hidden;
  
         @media (max-width: 991px) {
              display: flex;
              visibility: visible;
              color: gray;
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