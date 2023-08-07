import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';
import Work7 from './assets/project-7.png';
import Work8 from './assets/project-8.png';
import Work9 from './assets/project-9.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Udhayasooriyan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kesavamurthy',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '29 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Location : ',
    description: 'Chennai',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91-7639718893',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'usraising@mail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'Suriya-Kesavamurthy',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Tamil, Hindi, Malayalam',
  },
];

export const stats = [
  {
    id: 1,
    no: '9+',
    title: 'Years of <br /> Experience',
  },
  {
    id: 4,
    no: '2+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Mar 2023 - Present',
    title: 'Full Stact Developer <span> Guvi </span>',
    desc: 'Learning Full Stack Developer (MERN).',
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Dec 2022 - Feb 2023',
    title: 'Career Break',
    desc: 'Trying to change my Career & learning Programming languages (self Learning).',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jan 2017 - Dec 2022',
    title: 'Technical Admin <span> Imdaad.LLC, U.A.E </span>',
    desc: 'I joined as a technician, then with my performance and skill set, I was promoted to lead technician and carry out all the jobs related to system updates in Maximo & SAP. And also create reports in MS Office (Excel & Word). Also won 2 times employee of the year from Client.',
  },
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Nov 2015 - June 2016',
    title: 'Technician <span> AL Ahelia Switchgears, Kuwait </span>',
    desc: 'Worked as a Technician.',
  },
  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jun 2012 - Oct 2013',
    title: 'Technician <span> EFS, Chennai </span>',
    desc: 'Worked as a Technician.',
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Apr 2023 - Prresent',
    title: 'Bacholar in Computer Application <span> Kalasalingam University </span>',
    desc: 'Currently Pursuing',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Jun 2009 - May 2012',
    title: 'Diploma in Electrical & Electronics <span> AVC College </span>',
    desc: 'First Class with Distinction & 89% ',
  },

  {
    id: 8,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2008-2009',
    title: 'SSLC <span> Swami Vivekananda High School </span>',
    desc: 'Scored 83% with Centum in Mathematics',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '85',
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '90',
  },
  {
    id: 3,
    title: 'JavaScript',
    percentage: '85',
  },
  {
    id: 4,
    title: 'React',
    percentage: '85',
  },
  {
    id: 14,
    title: 'Redux',
    percentage: '85',
  },
  {
    id: 5,
    title: 'Bootstrap',
    percentage: '70',
  },
  {
    id: 6,
    title: 'TailWind',
    percentage: '70',
  },
  {
    id: 7,
    title: 'NodeJs',
    percentage: '75',
  },
  {
    id: 8,
    title: 'ExpressJs',
    percentage: '85',
  },
  {
    id: 9,
    title: 'MongoDB',
    percentage: '85',
  },
  {
    id: 13,
    title: 'AWS',
    percentage: '70',
  },
  {
    id: 11,
    title: 'Git',
    percentage: '85',
  },
  {
    id: 10,
    title: 'MySql',
    percentage: '60',
  },
  {
    id: 12,
    title: 'SASS',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'URL Shortner',
    details: [
      {
        icon: <FiFileText />,
        title: 'Description : ',
        desc: 'URL Shotner App, where You can shorten any URL using this App. These app created with Login and authentications.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/urlshortener-frontend-vite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://url-shortner-vite-version.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'React, Nodejs, ExpressJs, Bootstrap, Axios, CSS, NPM Packages, MongoDB',
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: 'Code-Pen Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Creative SignIn Form',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/React-Codepen-Practice',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://codepen-clone-sk7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'HTML, CSS',
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: 'Library Hub',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Library Hub',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/Dashboard_Library_management',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://library-management-sk7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'React JS, Axios, CSS, React-icons',
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: 'Task Creator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Task Creator',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/Interview-Task-all-time-design',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://alltimebest-task.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'React Js, Material UI, CSS, React-Router-DOM, DOM API',
      },

    ],
  },
  {
    id: 4,
    img: Work4,
    title: 'Todo App with MondoDB',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Todo App',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/TodoApp_FrontEnd_with_MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://todoapp-suriya-k7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'ReactJs, NodeJs, ExpressJs, Bootstrap, Axios, CSS, MongoDB',
      },

    ],
  },
  {
    id: 5,
    img: Work5,
    title: 'Weather App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather App',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/WeatherApp_using_API',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://weather-app-using-api-sk7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'HTML, CSS, JavaScript, Web Api',
      },
    ],
  },
  {
    id: 6,
    img: Work6,
    title: 'Expence Tracker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Expence Tracker',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/urlshortener-frontend-vite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://income-expence-tracker-suriya-k7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'HTML, CSS, Javascript, DOM API',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'TodoApp (local storage)',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'TodoApp',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/urlshortener-frontend-vite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://to-do-list-suriya-k7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'HTML, CSS, JavaScript, DOM API',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Creative SignIn Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Creative SignIn Form',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/Suriya-K7/urlshortener-frontend-vite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://login-form-bg-animation-suriya-k7.netlify.app/',
      },
      {
        icon: <FaCode />,
        title: 'Tech Used : ',
        desc: 'HTML, CSS',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
