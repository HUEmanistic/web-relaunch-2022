import Styled from "styled-components";
import blkfrnd from "../media/images/main/grid/ur_blk_friend/ur_blk_frnd_bw.jpg";
import blkfrndcolor from "../media/images/main/grid/ur_blk_friend/ur_blk_frnd.jpg";
import Logo from "../media/images/logo/white_logo.png";
// import Juneteenth from "../media/images/juneteenth/banner/juneteenth_banner.gif";
import MLK from "../media/images/mlk/mlk_banner.jpg";
import background from "../media/images/background/brick.jpg"
// import voteBanner from "../components/special_events/voting/HUEManistic_Vote_Banner.jpg"

import {
  Button,
  Card,
  Row,
  Col,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import { BounceIn } from "./keyframes";

export const LogoImg = Styled.img.attrs({
  src: `${Logo}`,
})`
    width: 80%;
    cursor: pointer;

            }
            @media (max-width: 768px) {
             width: 100%;
            }


`;

export const VideoContainerDiv = Styled.div`
margin: 0 auto;
height: auto;

`;

export const ContentDiv = Styled.div`
margin: 0 auto;
width: 50%;
      @media (max-width: 2560px) {
        width:60%;
      }
      @media (max-width: 1920px) {
        width:75%;
      }
      @media (max-width: 767px) {
        width:100%;
      }
`;

export const Page = Styled.body`
background-image: url(${background});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

      @media (max-width: 481px) {
        background-image: none;
        padding:0;
      }

`;

export const MainDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
padding: 10%;



      @media (max-width: 767px) {
        margin-top: 20%;
      }
      @media (min-width:320px) and (max-width: 480px) {
        margin-top: 30%;
      }

`;

//not in use
export const BackgroundDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
color: #ffffff;
left:0;
top:0;
width: 100%;
height:100%;
`;

export const MainTitle = Styled.h1`
display: flex;
color: #ffffffB3;
font-size: 4rem;
font-weight: 600;
width:100%;
text-shadow: 5px 10px #00000080;

            @media (max-width: 1440px) {
             font-size 3rem;
             padding-left: 10%;
             margin-bottom: 2%;
            }
            @media (max-width: 1280px) {
             font-size 3rem;
             width: 90%;
             margin-bottom: 2%;
            }
            @media (max-width: 1024px) {
             font-size 2rem;
             margin-bottom: 3%;
             text-align: center;
            }
            @media (max-width: 481px) {
             width: 100%;
             text-align: center;

            }



`;

export const MainText = Styled.p`
display:flex;
width:80%;
line-height:2rem;
text-align:justify;
font-size: 1.5rem;


            @media (max-width: 1024px) {
             width: 80%;
            }
            @media (max-width: 768px) {
             width: 90%;
            }
            @media (max-width: 480px) {
              font-size: 1rem;
            }
`;

export const SliderDiv = Styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 60%;
font-size:1.3rem;
padding-top: 5%;
line-height: 2;
font-style: italic;
`;

export const DivText = Styled.div`
font-size:1rem;
font-size:600;
text-decoration:underline;
font-style:none;
`;

export const ContentRow = Styled(Row)`
display:flex;
width: 100%;
justify-content: center;
align-items: center;


            @media (max-width: 480px) {
              margin-top: 20%;
            }
`;


export const ContentCol2 = Styled.div`
background: #b92b27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display:flex;
justify-content: center;
width: 100%;
height:100%;
flex-direction: column;
align-items: center;
`;

export const BannerDiv = Styled.div`
display:flex;
justify-content: center;
width: 100%;
height:100%;
margin-bottom: 10%;
padding: 0;
align-items: center;
`;


export const ContentRow2 = Styled.div`
background: #b92b27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display:flex;
width: 100%;
height:100%;
flex-direction: row;
justify-content: space-between;


            @media (max-width: 1280px) {
              width: 100%;
            }

            @media (max-width: 768px) {
              flex-direction: column;
              align-content: center;
              align-items: center;
            }

`;

export const MainCol = Styled(Col)`
display:flex;
width: 100%;
justify-content: center;

`;

export const ContentCol = Styled(Col)`
display:flex;
margin: 0;
padding:5%;
color: #ffffff;
weight: 500;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


            // @media (max-width: 1920px) {
            //   margin: 6% 0 5% 0;
            // }
            // @media (max-width: 1440px) {
            //   margin: 8% 0 5% 0;
            // }
            // @media (max-width: 768px) {
            //   margin-top: 20%;
            // }
            // @media (max-width: 480px) {
            //   margin: 26%;
            // }

`;

export const PodcastColProfiles = Styled(Col)`
display:flex;
margin: 0;
padding:5%;
color: #ffffff;
weight: 500;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
background-image: linear-gradient( 135deg, #FFDB01 10%, #000000 100%);


            // @media (max-width: 1920px) {
            //   margin: 6% 0 5% 0;
            // }
            // @media (max-width: 1440px) {
            //   margin: 8% 0 5% 0;
            // }
            // @media (max-width: 768px) {
            //   margin-top: 20%;
            // }
            // @media (max-width: 480px) {
            //   margin: 26%;
            // }

`;

export const PodcastSeriesLink = Styled.a`
display:flex;
justify-content: center;
margin-top: 5%;
text-decoration: none;
color: purple;
font-weight:800;
font-size: .8rem;

      &:hover {
        text-decoration: none;
        color: white;
    }

`;

export const PodcastCol = Styled(Col)`
display:flex;
margin: 0;
padding:5%;
color: #ffffff;
weight: 500;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
background-image: linear-gradient( 358.4deg,  rgba(249,151,119,1) -2.1%, rgba(98,58,162,1) 90% );



            // @media (max-width: 1920px) {
            //   margin: 6% 0 5% 0;
            // }
            // @media (max-width: 1440px) {
            //   margin: 8% 0 5% 0;
            // }
            // @media (max-width: 768px) {
            //   margin-top: 20%;
            // }
            // @media (max-width: 480px) {
            //   margin: 26%;
            // }

`;

export const PodcastTitle = Styled.h2`
display: flex;
font-size: 2rem;
display: flex;
color: #ffffffB3;
font-weight: 600;
width:100%;
text-align: center;
justify-content: center;
align-items: center;
align-content: center;


            @media (max-width: 1440px) {
             font-size 2rem;
             margin-bottom: 2%;
            }
            @media (max-width: 1280px) {
             font-size 2rem;
             width: 90%;
             margin-bottom: 2%;
            }
            @media (max-width: 1024px) {
             font-size 1.5rem;
             margin-bottom: 3%;
             text-align: center;
            }
            @media (max-width: 481px) {
             width: 100%;
             text-align: center;

            }



`;

export const PodcastText = Styled.p`
display:flex;
width:80%;
line-height:2rem;
justify-content: center;
text-align:justify;
font-size: 1rem;


            @media (max-width: 1024px) {
             width: 80%;
            }
            @media (max-width: 768px) {
             width: 90%;
            }
            @media (max-width: 480px) {
              font-size: 1rem;
            }
`;


export const PodcastSubHead = Styled.h3`
display:flex;
width:80%;
font-weight: 800;
line-height:2rem;
text-align:justify;
font-size: 1rem;


            @media (max-width: 1024px) {
             width: 80%;
            }
            @media (max-width: 768px) {
             width: 90%;
            }
            @media (max-width: 480px) {
              font-size: 1rem;
            }
`;


export const CardCol = Styled(Col)`
display:flex;
justify-content: center;
`;

export const CategoryCol = Styled(Col)`
display: flex;
flex-direction: column;
height: 100%;
 
`;

export const ContentBody = Styled(CardBody)`
display:flex;
flex-direction: column;
background-color: #FFFFFFCC;
color: black;
`;

export const ChipColor = Styled.div`

 width: 100%;
 background-color: #87675A;
 color: white;
 padding: 2% 3%;
 margin-right: 3%;
 text-align: right;
`;

export const ChipColor2 = Styled.div`

 width: 100%;
 background-color: #D2A18C;
 color: white;
 padding: 2% 3%;
 margin-right: 3%;
 text-align: right;
`;

export const ChipColor3 = Styled.div`

 width: 100%;
 background-color: #2D221E;
 color: white;
 padding: 2% 3%;
 margin-right: 3%;
 text-align: right;
`;

export const ChipColor4 = Styled.div`

 width: 100%;
 background-color: #F0BBA0;
 color: white;
 padding: 2% 3%;
 margin-right: 3%;
 text-align: right;
`;

export const ContentCard = Styled(Card)`
display:flex;
flex-direction: column;
box-shadow:5px 10px #00000080;
background-color: #FFFFFF80;
width: 100%;
margin: 5% 0;
`;

export const ContentCardText = Styled(CardText)`
display:flex;
line-height:1.5rem;
font-size: 1.2rem;
`;

export const CategoryTitle = Styled(CardTitle)`
font-size: 1.5rem;


            @media (max-width: 769px) {
font-size: 1.2rem;
            }
`;
export const CategoryButton = Styled(Button)`
display:flex;
margin-top: 18%;
background-color: slategray;
border: none;
cursor: pointer;
`;

export const YBFImg = Styled(CardImg).attrs({
  src: `${blkfrnd}`,
})`

`;

export const Banner = Styled.img.attrs({
  src: `${MLK}`,
})`
width: 100%;
`;


export const ImgDivBlkFrd = Styled.div`
display:flex;
background-image: url(${blkfrndcolor})
opacity: 0;
  :&hover {
    opacity:1
  }
`;

// animations

export const LogoBounce = Styled.div`
display:flex;
display: -webkit-box;
display:-webkit-flex
display: -moz-box;
display: -ms-flexbox;
animation: ${BounceIn} 1.1s both;
width:20%;
margin:2% 0 2% 2%;

            @media (max-width: 1440px) {
             width: 40%;
             margin-left: 2%;
            }

            @media (max-width: 768px) {
              width: 45%;
             margin-left: 5%;
            }
            @media (max-width: 480px) {
              margin: 8% 0;
              width: 60%;
            }


`;
