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
  horizon,
  aws_cloud_icon,
  vite,
  shadcnui,
  github_icon,
  springboot,
  docker_icon
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
  {
    title: "Cloud Developer",
    icon: aws_cloud_icon,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Shadcn UI",
    icon: shadcnui,
  },
  {
    name: 'SpringBoot',
    icon: springboot,
  },
  {
    name: 'mySQL',
    icon: mysql,
  },
  {
    name: 'Pytorch',
    icon: pytorch,
  },
  {
    name: "Github",
    icon: github_icon,
  },
  {
    name: "Docker",
    icon: docker_icon,
  },
  {
    name: "AWS",
    icon: aws_cloud_icon,
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
  {
    title: 'Full-Stack Cloud Developer',
    company_name: 'Capstone- SkinGuardian - LU CS department',
    icon: skinGuardian,
    iconBg: '#E6DEDD',
    date: 'September 2024 - Present',
    points: [
      `Developed a multimodal deep learning model that fuses visual features from ResNet50 with clinical metadata via a custom clinical feature extractor with embedding layers and neural network-based fusion layer.`,
      `Achieved 90% test accuracy and weighted F1 score on HAM10000, outperforming baseline single-modality models`,
      `Deployed the model as an AWS SageMaker inference endpoint for real-time skin lesion classification.`,
      `Built a Spring Boot API deployed on an EC2 instance in a public subnet, secured with JWT-based authentication (with public login/signup endpoints).`,
      `Implemented a CI/CD pipeline for the backend using GitHub Actions and Docker. A GitHub workflow script automatically builds the application, creates a Docker image, pushes it to Docker Hub, and deploys it to EC2, ensuring seamless updates and consistency.`,
      `Integrated with an AWS RDS MySQL database (in a private subnet) for application data and an S3 bucket for storing skin lesion images.`,
      `Developed a responsive front end using React, Vite, and TypeScript with Shadcn UI for styling.`,
      `Deployed the website using AWS Amplify, which is linked to a GitHub repository and manages CI/CD automatically.`,
      `Configured a custom domain in Route 53 that points to the ALB, which terminates SSL using an ACM certificate and forwards secure traffic to the backend in the specified EC2 instance target group.`,
      `Deployed AWS WAF to protect against common web vulnerabilities, ensuring only legitimate traffic reaches the ALB. `,
      `Configured security groups so that the EC2 instance only accepts traffic from the ALB, and the RDS instance (in a private subnet) only accepts connections from the EC2 instance’s security group. `,
      `Utilized Spring Security to enforce JWT authentication across secure endpoints.`,
    ],
  },
];

const projects = [
  {
    name: 'SkinGuardian',
    description:
      'This is my SkinGuardian production-version deployed on AWS Ampify for public use.',
    tags: [
      {
        name: 'Full-Stack',
        color: 'blue-text-gradient',
      },
      {
        name: 'AI',
        color: 'green-text-gradient',
      },
      {
        name: 'Cloud',
        color: 'pink-text-gradient',
      },
      {
        name: 'Production',
        color: 'purple-text-gradient',
      }
    ],
    image: skinGuardian,
    source_code_link: 'https://main.d374fmb5qt34h7.amplifyapp.com/',
  },
  {
    name: 'SkinGuardian Front-End',
    description:
      'This is my SkinGuardian front-end developed using React, Vite, Typescript, and Shadcn UI for styling. The front-end is deployed on AWS Amplify, which is linked to the github repo and manages CI/CD automatically.',
    tags: [
      {
        name: 'Front-End',
        color: 'blue-text-gradient',
      },
      {
        name: 'Cloud',
        color: 'pink-text-gradient',
      }
    ],
    image: skinGuardian,
    source_code_link: 'https://github.com/Mohamed-Khalil-Ben-Nasr/SkinGuardian-Front-End',
  },
  {
    name: 'SkinGuardian Back-End',
    description:
      'I built a Spring Boot API deployed on an EC2 instance in a public subnet, secured with JWT-based authentication (with public login/signup endpoints). Implemented a CI/CD pipeline for the backend using GitHub Actions and Docker. A GitHub workflow script automatically builds the application, creates a Docker image, pushes it to Docker Hub, and deploys it to EC2, ensuring seamless updates and consistency. Integrated with an AWS RDS MySQL database (in a private subnet) for application data and an S3 bucket for storing skin lesion images.',
    tags: [
      {
        name: 'Back-End',
        color: 'blue-text-gradient',
      },
      {
        name: 'Cloud',
        color: 'pink-text-gradient',
      }
    ],
    image: skinGuardian,
    source_code_link: 'https://github.com/Mohamed-Khalil-Ben-Nasr/SkinGuardian-Back-End',
  },
  {
    name: 'SkinGuardian AI Model',
    description:
      'This is my SkinGuardian AI model. I Developed a multimodal deep learning model that fuses visual features from ResNet50 with clinical metadata via a custom clinical feature extractor with embedding layers and neural network-based fusion layer. My model Achieved 90% test accuracy and weighted F1 score on HAM10000, outperforming baseline single-modality models. I also Deployed the model as an AWS SageMaker inference endpoint for real-time skin lesion classification',
    tags: [
      {
        name: 'AI',
        color: 'green-text-gradient',
      },
      {
        name: 'Cloud',
        color: 'pink-text-gradient',
      }
    ],
    image: skinGuardian,
    source_code_link: 'https://github.com/Mohamed-Khalil-Ben-Nasr/SkinGuardian-AI-Model',
  },
  {
    name: 'SkinGuardian Documentation',
    description:
      'This is my SkinGuardian documentation repo. It contains documentation for all of SkinGuardian, along with architecture diagrams.',
    tags: [
      {
        name: 'Documentation',
        color: 'blue-text-gradient',
      },
      {
        name: 'AI',
        color: 'green-text-gradient',
      },
      {
        name: 'Cloud',
        color: 'pink-text-gradient',
      }
    ],
    image: skinGuardian,
    source_code_link: 'https://github.com/Mohamed-Khalil-Ben-Nasr/SkinGuardian-Docs',
  },
];

export { services, technologies, experiences, projects };
