import {
  CCLogo,
  ProfileLogo,
} from "../styles/main_style";

let ccPodcast = "https://anchor.fm/huemanistic-organization/embed";
let pPodcast =
  "https://anchor.fm/huemanistic-organization9/embed/episodes/HUEmanistic-Profiles---Brandon-Fiquett-e1di003";

export const webBlocks = [
  {
    background: "#4a5dbd",
    title: "What is HUEmanistic?",
    info: "Learn more about our mission to educate one neighbor at a time.",
  },
  {
    background: "#bd4f4a",
    title: "Volunteer",
    info: "Help Wanted! We are looking to expand our team. If you'd like to help Please Apply!",
  },
  {
    background: "#6cbd4a",
    title: "Learning Annex",
    info: "Here's a collection of our research and past podcasts",
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


