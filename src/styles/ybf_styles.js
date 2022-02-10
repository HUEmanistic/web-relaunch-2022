import Styled from "styled-components"
import { Row, Col } from "reactstrap";
import image1 from "../media/images/ybf/edited3.png"
import image2 from "../media/images/ybf/edited7.png";
import image3 from "../media/images/ybf/edited6.png";
import image4 from "../media/images/ybf/edited2.png";
import image5 from "../media/images/ybf/edited1.png";
import image6 from "../media/images/ybf/edited4.png";


export const YBFBody = Styled.body`
display: flex;
justify-content: center;
background: #780206;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #061161, #780206);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 100vw;
height: 100vh;
margin:0;
`;

export const YoutubeVidDiv = Styled.div`
margin-top: 3%;
`;

export const MainCol = Styled(Col)`
display:flex;
flex-direction: column;
width:100%;
padding:0;
margin:0;

        @media(min-width: 1920px) {
                margin-top: 15%;
            }

        @media(max-width: 1440px) {
                margin-top: 5%;
            }
        @media(max-width: 1025px) {
              margin: 0;
            }
        
`;

export const ContentCol = Styled(Col)`
display:flex;
justify-content: center;
align-items: center;
width:100%;
padding-bottom: 3%;
margin: 0 auto;
`;

export const Header = Styled.div`
display:flex;
flex-direction: column;
width:100%;
justify-content: center;
align-items: center;
`;

export const PageTitle = Styled.h2`
font-size: 2.5rem;
margin-top: 5%;
color:white;

        @media(max-width: 520px) {
              font-size: 2rem;
            }
`;

export const PageText = Styled.p`
color:white;
width: 60%;
line-height:1.8rem;
font-size: 1.1rem;
text-align:justify;
margin: 3% 0;
`;

export const StyledRow = Styled(Row)`
display:flex;
flex-direction: row;
justify-content: flex-start;
width:100%;
border-top: 5px red solid;
margin: 3% 0;
filter: brightness(50%);
flex-wrap: wrap;
z-index: -5;
`;

export const StyledRow2 = Styled(Row)`
display:flex;
flex-direction: row;
justify-content: center;
width:100%;

`;

export const StyledRow3 = Styled(Row)`
display:flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -ms-flexbox;
flex-direction: row;
justify-content: flex-end;
width:100%;
border-bottom: 5px red solid;
margin: 3% 0;
// filter: brightness(50%);
flex-wrap: nowrap;

        @media(max-width: 520px) {
              display: none;
              visibility: hidden;
            }
`;


export const BannerImg1 = Styled.img.attrs({
  src: `${image1}`,
})`

        width: 30%;
        border: 2px red solid;

`;
export const BannerImg2 = Styled.img.attrs({
  src: `${image2}`,
})`

        width: 30%;
        border: 2px red solid;
`;
export const BannerImg3 = Styled.img.attrs({
  src: `${image3}`,
})`

        width: 30%;
        border: 2px red solid;

`;

export const BannerImg4 = Styled.img.attrs({
  src: `${image4}`,
})`

        width: 30%;
        border: 2px red solid;

`;
export const BannerImg5 = Styled.img.attrs({
  src: `${image5}`,
})`

        width: 30%;
        border: 2px red solid;

`;
export const BannerImg6 = Styled.img.attrs({
  src: `${image6}`,
})`

        width: 30%;
        border: 2px red solid;

`;

//not being used
export const VideoDiv = Styled.div`
display:flex;
justify-content: center;
align-content: flex-start;
width: 100%;
padding-bottom: 1%;
border-bottom: 2px white dotted;

`;



