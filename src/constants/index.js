import {
    backend,
    frontend,
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
    youtube,
    threejs,
    self_learning,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Personal Projects",
      company_name: "Self-learning",
      icon: self_learning,
      iconBg: "#383E56",
      date: "November 2022 - Current",
      points: [
        "Building and maintaining web applications using React.js and other modern technologies.",
        "Independently working on frontend projects, utilizing frameworks like Tailwind CSS and Material UI for responsive and aesthetic designs.",
        "Integrating APIs with tools like Axios and ensuring seamless data flow between frontend and backend.",
        "Deploying projects on GitHub and managing version control using Git.",
      ]      
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Priyansu was an absolute pleasure. They delivered a stunning website on time and exceeded our expectations.",
      name: "John Doe",
      designation: "CEO",
      company: "TechSpark",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      testimonial:
        "Priyansu's attention to detail and commitment to quality made our project a resounding success.",
      name: "Emily Carter",
      designation: "Marketing Manager",
      company: "Bright Future Inc.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      testimonial:
        "Our company's online presence transformed completely thanks to Priyansu's incredible skills in web development.",
      name: "Michael Lee",
      designation: "Managing Director",
      company: "Global Solutions",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      testimonial:
        "Priyansu consistently demonstrated professionalism, creativity, and a deep understanding of our needs. Highly recommended!",
      name: "Sophia Turner",
      designation: "Product Owner",
      company: "NextWave",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      testimonial:
        "The website Priyansu built for us has significantly increased our customer engagement and sales. Truly amazing work!",
      name: "David Johnson",
      designation: "Head of Sales",
      company: "EcoVentures",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
];

  
  const projects = [
    {
        name: "YouTube Clone",
        description: 
          "A web-based application that replicates core YouTube functionalities, allowing users to search and watch videos using Rapid API for data, styled with Material UI and Tailwind CSS for a modern and responsive design.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "material-ui",
            color: "green-text-gradient",
          },
          {
            name: "rapid-api",
            color: "orange-text-gradient",
          },
        ],
        image: youtube,
        source_code_link: "https://github.com/priyansudash1999",
      },
      
      {
        name: "Portfolio",
        description: 
          "A personal portfolio website showcasing my skills, projects, and experience, built using Next.js with responsive design and a focus on modern UI/UX principles.",
        tags: [
          {
            name: "nextjs",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindcss",
            color: "green-text-gradient",
          },
          {
            name: "typescript",
            color: "pink-text-gradient",
          },
        ],
        image: portfolio,
        source_code_link: "https://github.com/priyansudash1999",
      },
      
      {
        name: "To-Do List App",
        description: 
          "A user-friendly to-do list application that helps users organize and manage tasks effectively, featuring options to add, edit, delete, and mark tasks as complete, built with React and styled using Bootstrap for responsiveness.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindcss",
            color: "purple-text-gradient",
          },
        ],
        image: todolist,
        source_code_link: "https://github.com/priyansudash1999",
      }
      
  ];
  
  export { services, technologies, experiences, testimonials, projects };