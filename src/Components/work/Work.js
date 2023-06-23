import React, { useState } from "react";
import "./work.css";
import Data, { Titles } from "./workData";
import nothingFoundImg from "./nothing-found.svg";

const Work = () => {
  const [projectData, setProjectData] = useState(Data[0]);

  const changeData = (e) => {
    const innerTXT = e.target.innerText;
    const newData = Data.filter((currentData) => {
      return currentData[0] === innerTXT;
    });

    if (newData[0][1].length === 0) {
      document.querySelector(
        ".projects-list"
      ).style.backgroundImage = `url(${nothingFoundImg})`;

    } else {
      document.querySelector(".projects-list").style.backgroundImage = "none";
    }

    setProjectData(newData[0]);
  };

  const preview = (e) => {
    const imageURL = `./preview-images/${e.target.innerText.split(" ")[1]}.png`;
    document.querySelector(".image-preview img").src = imageURL;
    document.querySelector(".preview-tab").classList.add("toggle-preview-tab");
    console.log(imageURL);
  }

  return (
    <React.Fragment>
      <div className="work-section" id="work">
        <div className="works">
          <h1 className="projects-heading">My Projects</h1>
          <ul className="title-bar">
            {Titles.map((titleElement, index) => {
              return (
                <li className="title-item" key={index}>
                  <img
                    className="title-item-icon"
                    src={`./${titleElement.toLowerCase()}.svg`}
                    alt={`${titleElement} icon`}
                  />
                  <p
                    onClick={(event) => {
                      changeData(event);
                    }}
                  >
                    {titleElement}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="projects-list">
            {projectData[1].map((currentProject, index) => {
              return (
                <li className="project-item" key={index}>
                  <p className="project-title">{currentProject[0]}</p>
                  <div className="project-link">
                    <a href={currentProject[1]} rel="noreferrer" target="_blank">
                      Open
                    </a>
                  </div>
                  <div className="preview-btn" onClick={ (e) => {preview(e)}}>
                    {currentProject[2]}
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
