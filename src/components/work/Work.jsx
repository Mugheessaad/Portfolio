import React, { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  disney,
  eventplanner360,
  exedoestate,
  foodeli,
  gemini,
  modernbank,
  nike,
  shoppingcart,
  smarthost,
  crown,
  simi,
} from "../../assets/projects";

const projects = [
  {
    name: "Simi Connect",
    description:
      "A full-stack e-commerce store with Stripe payment integration, serverless backend on Netlify, and Firebase authentication.",
    stacks: ["Vue.js", "Bootstrap Vue", "Stripe","Canva", "Twilio" ,"Firebase", "Nest.js", "SQL"],
    link: "https://simiconnect.com/",
    github: "https://github.com/Mugheessaad",
    image: simi, // Replace with the appropriate image variable or path
    category: "Fullstack",
  },
  {
    name: "Crown Clothing",
    description:
      "A full-stack e-commerce store with Stripe payment integration, serverless backend on Netlify, and Firebase authentication.",
    stacks: ["Vue", "Vuex Toolkit", "Stripe", "Firebase", "Netlify"],
    link: "https://crown-clothing-be9922.netlify.app/",
    github: "https://github.com/Mugheessaad",
    image: crown, // Replace with the appropriate image variable or path
    category: "Fullstack",
  },
  {
    name: "Foodeli",
    description:
      "A food ordering platform built with the MERN stack, featuring user authentication, shopping cart, and Stripe integration.",
    stacks: ["Vue", "Node.js", "Express.js", "SQL", "Stripe"],
    link: "https://foodeli-frontend.onrender.com/",
    github: "https://github.com/Mugheessaad",
    image: foodeli,
    category: "Fullstack",
  },
  // {
  //   name: "EventPlanner360",
  //   description:
  //     "EventPlanner360 is a full-stack web application designed to help users plan and manage events efficiently. It allows users to create, update, and manage events, guests, and schedules, providing a seamless experience for event planning.",
  //   stacks: ["React", "Node.js", "Express.js", "SQL", "Nodemailer", "JWT"],
  //   link: "https://eventplanner-frontend-sdjb.onrender.com/",
  //   github: "https://github.com/Mugheessaad/CBT-CIP",
  //   image: "path_to_image",
  //   category: "Fullstack",
  // },
  {
    name: "Exedo Estate",
    description:
      "A property listing application using the MERN stack with secure authentication and CRUD operations for managing property listings.",
    stacks: ["Vue", "Vuex Toolkit", "Node.js", "Express.js", "SQL"],
    link: "https://real-estate-mhee.onrender.com",
    github: "https://github.com/Mugheessaad",
    image: exedoestate,
    category: "Fullstack",
  },
  // {
  //   name: "Mentorow Technology Website",
  //   description:
  //     "Developed a dynamic website using Node.js, Express.js, and React.js. Designed and animated engaging UI components using Framer Motion, reducing bounce rate by 20%.",
  //   stacks: ["Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "React.js", "SQL", "Context API"],
  //   link: "https://footer-mu.vercel.app/",
  //   github: "https://github.com/Mugheessaad",
  //   image: "path_to_image",
  //   category: "Fullstack",
  // },
  {
    name: "SmartHost",
    description:
      "A responsive website for the architectural sector with an animated navigation bar using Framer Motion",
    stacks: ["Vue.js", "Framer Motion", "Tailwind CSS", "Nodemailer"],
    link: "http://www.smarthost.org.uk",
    github: "https://github.com/Mugheessaad",
    image: smarthost,
    category: "React",
  },
  {
    name: "ModernBank",
    description:
      "A responsive UI for a banking web application, designed to enhance user satisfaction with effective UI/UX practices.",
    stacks: ["Vue", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://modern-bankapp.vercel.app/",
    github: "https://github.com/Mugheessaad",
    image: modernbank,
    category: "React",
  },
  {
    name: "Disney+ Clone",
    description:
      "A Vue-based clone of Disney+, optimized with Vue Router and Axios for dynamic content fetching.",
    stacks: ["Vue", "TMDB API", "Axios", "Styled-Components", "Tailwind CSS"],
    link: "https://disney-clone-sable-one.vercel.app",
    github: "https://github.com/Mugheessaad",
    image: disney,
    category: "React",
  },
  {
    name: "Gemini",
    description:
      "A generative AI application utilizing the Gemini API, with efficient state management via Context API.",
    stacks: ["Vue", "Gemini API", "Vercel"],
    link: "https://gemini-kappa-azure.vercel.app/",
    github: "https://github.com/Mugheessaad",
    image: gemini,
    category: "React",
  },
  {
    name: "Small Shopping Cart",
    description:
      "A small shopping cart page built with Vue, featuring a functional cart page for managing items.",
    stacks: ["Vue", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://small-shopping-cart-peach.vercel.app",
    github: "https://github.com/Mugheessaad",
    image: shoppingcart,
    category: "React,",
  },
  {
    name: "Nike Poster",
    description:
      "A front page for Nike, showcasing a visually engaging design with Vue.",
    stacks: ["Vue"],
    link: "https://nike-front-dusky.vercel.app",
    github: "https://github.com/Mugheessaad",
    image: nike,
    category: "React",
  },
  {
    name: "EventPlanner360",
    description:
      "An event planning platform for creating events, managing vendors and guests, tracking RSVPs, and sending invitations.",
    stacks: ["Vue.js", "Node.js", "Express", "SQL", "Nodemailer"],
    link: "https://eventplanner-frontend-sdjb.onrender.com/",
    github: "https://github.com/Mugheessaad",
    image: eventplanner360,
    category: "Fullstack",
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="work__filters container grid">
        <button
          className={`work__item ${
            selectedCategory === "All" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          ALL
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Fullstack" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Fullstack")}
        >
          FULLSTACK
        </button>
        <button
          className={`work__item ${
            selectedCategory === "React" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("React")}
        >
          Vue
        </button>
      </div>

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
