import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ai,
  python,
  java,
  tensorflow,
  pytorch,
  kotlin,
  mysql,
  smartTransportHub,
  hackHarvard,
  lawrence,
  beta,
  skinGuardian,
  gymbroai,
  horizon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Researcher",
    icon: ai,
  },
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  {
    name: 'Pytorch',
    icon: pytorch,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: 'mySQL',
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: 'Research Assistant',
    company_name: 'Lawrence University',
    icon: lawrence,
    iconBg: '#383E56',
    date: 'June 2022 - August 2022',
    points: [
      'Presented research findings on combinatorics of stable surfaces at MAA Math Fest 2022.',
      'Prepared and delivered a poster presentation to the academic community.',
    ],
  },
  {
    title: 'Hackathon Participant',
    company_name: 'HackHarvard 2023',
    icon: hackHarvard,
    iconBg: '#E6DEDD',
    date: 'October 2023',
    points: [
      'Collaborated in a team of four to develop GymBro AI, an AI-powered personalized fitness coach.',
      'Designed and implemented an intuitive user interface using Ionic React.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'Smart Transport Hub',
    icon: smartTransportHub,
    iconBg: '#383E56',
    date: 'January 2024 - March 2024',
    points: [
      'Developed a full-stack feedback classification website using React, Node.js, Express, and MySQL.',
      'Integrated a sentiment analysis model with Keras TensorFlow.',
      'Conducted testing, troubleshooting, and documentation to ensure robust performance.',
    ],
  },  
  {
    title: 'Chapter President',
    company_name: 'Beta Theta Pi – Gamma Pi Chapter',
    icon: beta,
    iconBg: '#E6DEDD',
    date: 'September 2024 - Present',
    points: [
      'Managed a $30,000 annual budget to optimize chapter operations and events.',
      'Organized fundraisers and philanthropy events, raising over $1,000 for charity.',
      'Recruited 15 new members in one term, doubling the size and diversity of the chapter.',
    ],
  },
  {
    title: 'AI Researcher',
    company_name: 'Capstone - LU CS department',
    icon: skinGuardian,
    iconBg: '#E6DEDD',
    date: 'September 2024 - Present',
    points: [
      'Developed a multimodal deep learning model for skin lesion classification by integrating visual features from ResNet18 with clinical data using a custom Clinical Feature Extractor.',
      'Implemented a neural network-based fusion layer to effectively combine visual and clinical features, enhancing the models predictive performance.',
      'Integrated an auxiliary super-resolution task using ESRGAN to refine visual feature extraction. This joint optimization improved classification accuracy by focusing on finer image details.',
      'Employed a shared encoder architecture to allow simultaneous learning from classification and super-resolution tasks, enhancing the robustness of feature representations.',
      'Will leverage fine-tuned large language models (e.g., ChatGPT) with Retrieval-Augmented Generation (RAG) to generate accurate and up-to-date clinical diagnoses and descriptions, minimizing hallucinations and ensuring reliability.'
    ],
  },
];

const projects = [
  {
    name: 'SkinGuardian',
    description:
      'An advanced skin lesion classification system utilizing multimodal deep learning for early detection and clinical diagnosis and report generation, aiming to make healthcare more accessible.',
    tags: [
      {
        name: 'Pytorch',
        color: 'blue-text-gradient',
      },
      {
        name: 'AI Research',
        color: 'green-text-gradient',
      },
      {
        name: 'Capstone',
        color: 'pink-text-gradient',
      }
    ],
    image: skinGuardian,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Horizon Banking',
    description:
      'A modern banking platform featuring a finance management dashboard, real-time transactions, and user-to-user money transfers within the platform.',
    tags: [
      {
        name: 'Full Stack Dev',
        color: 'blue-text-gradient',
      },
      {
        name: 'Banking',
        color: 'green-text-gradient',
      },
    ],
    image: horizon,
    source_code_link: 'https://github.com/Mohamed-Khalil-Ben-Nasr/Horizon-Banking',
  },
  {
    name: 'GymBro AI',
    description:
      'An AI-powered personalized fitness coach developed during HackHarvard 2023, focusing on user-friendly interface and tailored fitness plans.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'AI',
        color: 'green-text-gradient',
      },
      {
        name: 'HackHarvard',
        color: 'pink-text-gradient',
      },
    ],
    image: gymbroai,
    source_code_link: 'https://github.com/Mohamed-Khalil-Ben-Nasr/GymBro-AI',
  },
];

export { services, technologies, experiences, projects };
