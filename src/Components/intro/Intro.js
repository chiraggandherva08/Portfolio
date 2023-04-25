import React from "react";
import "./intro.css";
import profilePic from "./profile-pic.jpg";

const Intro = () => {
  return (
    <div className="indroduction" id="introduction">
      <div className="intro">
        <h1>
          <div className="highlight-name">Hi , I am </div>
          <div className="highlight-name">Chirag Gandherva</div>
        </h1>
        <br />

        <p>
          A web and mobile developer I'm always trying to bring real <br />
          value and define problems with my work Welcome to my <br /> portfolio.
        </p>
      </div>

      <div className="profile-picture">
        <img
          className="profile-picture-img"
          src={profilePic}
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default Intro;
