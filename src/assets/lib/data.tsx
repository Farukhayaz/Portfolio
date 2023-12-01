import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import tastyMockup from "../../assets/img/gym1.webp";
import instorMockup from "../../assets/img/Sapphire.webp";
import instorMockup2 from "../../assets/img/dog.webp";
import instorMockup3 from "../../assets/img/Home.png";
import instorMockup4 from "../../assets/img/Restudent.png";

import silentmoonMockup from "../../assets/img/amazon.png";
import profilepicture from "../../../public/images/me2.webp.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import eduImgWhite from '../../assets/img/eduImgWhite.svg'
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import education from "../../assets/img/eduImgWhite.svg";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hi, I'm Farukh Ayaz",
  },
  subtitle: "Fullstack Developer ",
  description: {
    en: "I'm Farukh Ayaz, a fullstack developer with the 1 Year of Experience goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "GYM",
    description_EN:
      "This project aims to build an employee management system that consolidates all information of a company. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Figma", icon: figmaicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://fantastic-marigold-439e3d.netlify.app/",
    githuburl: "https://github.com/Farukhayaz/GYM",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Amazon Shop",
     description_EN:
      "This project aims to build an employee management system that consolidates all information of a company React, MongoDB, Javascript, Tailwind, React-Bootstrap, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://agile-jade-coati.cyclic.app/",
    githuburl:
      "https://github.com/Farukhayaz/amazona",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "SPPHIRE",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, Tailwind CSS . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: instorMockup,
    deploymenturl: "https://sapphir.netlify.app/",
    githuburl: "https://github.com/Farukhayaz/Sapphire",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },

 {
    title: "PET-SHOP",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with HTML, CSS, BOOTESTRAP , Media-Query . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Figma", icon: figmaicon },
    ],
    image: instorMockup2,
    deploymenturl: "https://effulgent-raindrop-8072dc.netlify.app/",
    githuburl: "https://github.com/Farukhayaz/Pet-Shop",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },

   {
    title: "HOME-LAND",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, Tailwind CSS . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: instorMockup3,
    deploymenturl: "https://home-nine-sand.vercel.app/",
    githuburl: "https://github.com/Farukhayaz/Home",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "RESTAURANT",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with HTML,  CSS . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Figma", icon: figmaicon },
    ],
    image: instorMockup4,
    deploymenturl: "https://hilarious-marigold-ffbbf7.netlify.app/",
    githuburl: "https://github.com/Farukhayaz/RESTAURANT",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
     
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
     
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;



export const navLinks = [
  { en: "Home", hash: "#home", icon: GoHome },
  { en: "Skills", hash: "#skills", icon: GoStack },
  { en: "Projects", hash: "#projects", icon: GoProject },
  {  en: "About me", hash: "#about-me", icon: GoPerson },
{ en: "Education", hash: "#education", icon: education },

  { en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  {  en: "Imprint", hash: "#imprint", data: <Imprint /> },
  {  en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:farukhayaz999@gmail.com",
  text: "farukhayaz999@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/farukh-ayaz/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Farukhayaz",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:farukhayaz999@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title_EN: "About me",
  description_EN: "A few code snippets about me",
  paragraphs_EN: [
    {
      title: "About Me",
      description:
        "I am a passionate Full Stack Web Developer based in Lahore, Pakistan, with a keen enthusiasm for software development. As a driven and motivated individual, I bring over 1+ years of experience in crafting visually stunning websites, as well as developing impactful web and mobile applications. My expertise lies in frontend technologies and backend technologies, allowing me to deliver comprehensive solutions across the entire development spectrum.",
      icon: hardwareicon,
    },
    {
      title: "About Me",
      description:
        "I specialize in advanced JavaScript, jQuery, React.js, HTML, CSS and backend development using technologies such as Node.js, Express, and serverless architecture. I have a comprehensive understanding of  MySQL databases, including MongoDB and Firebase, and I am proficient in deploying applications on Github. I take great pleasure in customizing development environments to optimize productivity and efficiency.",
      icon: caricon,
    },
   
  ],
};
export const educationmedata = {
  title_EN: "Education",
  description_EN: "A few code snippets about me",
  paragraphs_EN: [
    {
      title: "Virtual Uniersity Of Pakistan",
      course:
        "BSC",
         startYear: '2021',
        endYear: 'Present',
      icon: eduImgWhite,
    },
    {
      title: "Government M.A.O. College Lahore",
      course: 'ICS (Computer Science)',
        startYear: '2019',
        endYear: '2021',
      icon: eduImgWhite,
    },
    {

       title: 'Lahore Model School',
        course: 'Higher Secondary Education',
        startYear: '2009',
        endYear: '2019'
    }
   
  ],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        en: "Your Subject",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
