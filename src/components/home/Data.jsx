import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"M Mughees Saad"} />
      </h1>

      <TypeAnimation
        sequence={[
          "Web Developer",
          3000,
          "MEVN Stack Developer",
          3000,
          "FullStack Developer",
          3000,
        ]}
       
        cursor={false}
        wrapper="span"
        speed={5}
        className="home__subtitle"
        repeat={Infinity}
      />

      <p className="home__description">
        A passionate Full-Stack Developer specializing in the MEVN stack, based
        in Lahore, Pakistan.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
