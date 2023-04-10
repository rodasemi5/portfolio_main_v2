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
    lds,
    everise,
    uscis,
    xara,
    arcane,
    doggos,
    jikan,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Front End Developer",
      company_name: "Lucky Dog Studio",
      icon: lds,
      iconBg: "#383E56",
      date: "April 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Customer Service Representative",
      company_name: "Everise",
      icon: everise,
      iconBg: "#E6DEDD",
      date: "Sept 2028 - Aug 2021",
      points: [
        "Provided excellent customer support to clients.",
        "Provided in-depth feedback to Tax pros on how to solve a client issues.",
        "Solve challenging problems for users/tax pros.",
        "Participating call reviews and providing constructive feedback to other callers.",
      ],
    },
    {
      title: "Data Unit Clerk",
      company_name: "USCIS",
      icon: uscis,
      iconBg: "#383E56",
      date: "Mar 2013 - Sept 2017",
      points: [
        "Update client’s information on government database (Name, DOB, SS, Address).",
        "Provided files for officers and update any information if needed.",
        "Deliver files to different offices located in the Miami-Dade County.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Arcane Valley Staking Site",
      description:
        "A responsive Ui/UX staking site.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "solana",
          color: "pink-text-gradient",
        },
      ],
      image: arcane,
      source_code_link: "https://github.com/Lucky-Dog-Studios/arcane-valley-staking",
    },
    {
      name: "Xara City Site V2",
      description:
        "Functional UI/UX site build with minting and collection viewing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: xara,
      source_code_link: "https://github.com/Lucky-Dog-Studios/xara-city-site-v2",
    },
    {
      name: "Jikan Dashboard",
      description:
        "Created a responsive dashboard to show price of cryto currency and solana nfts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jikan,
      source_code_link: "https://github.com/Lucky-Dog-Studios/jikan-dashboard",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };