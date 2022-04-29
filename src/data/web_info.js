import { CCLogo, ProfileLogo } from "../components/style";


import HazzaunaProfile from "../media/images/background/hazzauna.jpg";
import SeanProfile from "../media/images/background/sean.jpg";
import MariannaProfile from "../media/images/background/marianna.jpg";
import ChristinaProfile from "../media/images/background/christina.jpg";
import BrandonProfile from "../media/images/background/brandon.jpg";


let ccPodcast = "https://anchor.fm/huemanistic-organization/embed";
let pPodcast =
  "https://anchor.fm/huemanistic-organization9/embed";

export const webBlocks = [
  {
    backgroundColor: "#F4D03F",
    backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
    title: "What is HUEmanistic?",
    info: "Learn more about HUEmanistic's mission to educate one neighbor at a time.",
    link: "/what-is-huemanistic",
  },
  {
    backgroundColor: "#FF3CAC",
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    title: "Volunteer",
    info: "We need Volunteers! If you'd like to volunteer take a look at our listings.",
    link: "/volunteer",
  },
  {
    backgroundColor: "#FF3CAC",
    backgroundImage: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
    title: "Learning Annex",
    info: " Coming Soon! A collection of our research and past podcasts and videos.",
    link: "#",
  },
];

export const slideData = [
  {
    backgroundColor: "#D9AFD9",
    backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E18c 100%)",
    background: "#3fbfbf8c",
    logo: CCLogo,
    src: ccPodcast,
    title: "Color Commentary Podcast",
    width: "100%",
  },
  {
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(19deg, #3EECAC8c 0%, #EE74E1 100%)",
    background: "#813FBF8c",
    logo: ProfileLogo,
    src: pPodcast,
    title: "Profiles Podcast",
    margin: "0 auto",
    logoWidth: "50%",
    width: "100%",
  },
];

export const backgroundImage = [
  {
    backgroundImage1: { HazzaunaProfile },
  },
  {
    backgroundImage2: { BrandonProfile },
  },
  {
    backgroundImage3: { SeanProfile },
  },
  {
    backgroundImage4: { MariannaProfile },
  },
  {
    backgroundImage5: { ChristinaProfile },
  },
];