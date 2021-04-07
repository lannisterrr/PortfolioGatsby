import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Siddhant | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Siddhant Pandey',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I have been intrested in computer programming since I was 16 and web development is my favorite thing to do.Now, since you define success as where the willingness to learn and skill to make impactful decisions meet, I assure you I fall squarely into the definition.My past work experience testifies to my dedication to learning, and the real-life projects proves my skills and impact.',
  paragraphTwo: 'I have 3+ years experience with Frontend Web Development and I have Strong Emphasis on Javascript and React.',
  paragraphThree: 'Targeting UI / UX , Frontend Focus roles.',
  resume: 'https://drive.google.com/file/d/1ARbHWJ4zugalIaN407fw3aySY-pEW0Vm/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Reciepe App',
    info: 'This app is built with React and utilises all the feature that react has to offer like Hooks , Context , Functional Components , JSX , States , props and many more.',
    info2: 'Working : User can add , update , delete the reciepes and user can see the data changing simultaneously.',
    url: 'https://elated-mcclintock-66de98.netlify.app/',
    repo: 'https://github.com/lannisterrr/cook', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Kanabn Board',
    info: 'This app is inspired by trello.com and was developed in  Pure Vanilla javascript. The app uses Drag & Drop functionality of Javascript language and store data in local storage.',
    info2: 'Working : User can perform CRUD operations and drag & drop different elements.',
    url: 'https://lannisterrr.github.io/kanban/',
    repo: 'https://github.com/lannisterrr/kanban', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Mars Rover Images',
    info: 'A web app that uses NASA API to showcase Mars rover images. Developed in Vanilla Javascript the app uses features like Async & Await , Promises , REST API , Local Storage and much more.',
    info2: 'Working : User can find latest images taken by MARS ROVER and add images they like to a favorites tab.',
    url: 'https://lannisterrr.github.io/MarsRoverImages/',
    repo: 'https://github.com/lannisterrr/MarsRoverImages', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'siddhantp736@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/siddhantjs',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/siddhant4real/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lannisterrr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
