import React from "react";
import "./about.css";
import { files, resume, work2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={work2} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
          With a focus on delivering high‑performance web solutions, I bridge front‑end innovation and backend robustness as a MEVN Stack Developer at Satus Systems. I craft responsive interfaces in Vue.js and architect scalable, maintainable APIs using Nest.js, Node.js, and Express. My deep understanding of JavaScript, TypeScript, and SQL enables me to design clean data models, implement efficient business logic.
          <br /><br />
          Whether you are a recruiter, entrepreneur, or tech enthusiast, I am eager to connect and explore new opportunities. Lets collaborate to create something amazing and build the future of Web Applications together!
          </p>
          <a
            download="MugheesSaad_Resume.pdf"
            href={resume}
            className="button button--flex"
          >
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
