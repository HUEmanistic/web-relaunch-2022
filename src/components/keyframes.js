import { keyframes } from "styled-components";

export const ScaleDown = keyframes`
 {
  0% {
    -webkit-transform: translateZ(1);
            transform: translateZ(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
`;
// animation: slide-out-fwd-center 5s cubic-bezier(0.550, 0.085, 0.680, 0.530) reverse both;

export const FadeIn = keyframes`

  0% {
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 0;
  }

`;

//animation: fade-out 1s ease-out reverse both;

export const LogoFocusIn = keyframes`
0% {
            transform: scale(2);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
            transform: scale(1);
            filter: blur(0px);
    opacity: 1;
  }
`;

//animation:  animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;

export const BounceIn = keyframes`

  0% {
            transform: translateY(-500px);
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
            transform: translateY(0);
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
            transform: translateY(-65px);
            animation-timing-function: ease-in;
  }
  72% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  81% {

            transform: translateY(-28px);
            animation-timing-function: ease-in;
  }
  90% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  95% {
            transform: translateY(-8px);
            animation-timing-function: ease-in;
  }
  100% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
`;

// animation: bounce-in-top 1.1s both;

export const SlideInLeft = keyframes`
  0% {
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
              transform: translateX(0);
      opacity: 1;
    }

`;


//animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;



export const Pulsate = keyframes`
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
`;

//animation: heartbeat 1.5s ease-in-out infinite both;

export const PopText = keyframes`
  0% {

            filter: blur(0.01);
  }
  100% {

            filter: blur(12px) opacity(0%);
  }
}
@keyframes text-blur-out {
  0% {

            filter: blur(0.01);
  }
  100% {

            filter: blur(12px) opacity(0%);
  }
}
`;
//animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;