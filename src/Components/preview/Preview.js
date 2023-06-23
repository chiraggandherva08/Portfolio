import React from "react";
import "./preview.css";
import crossIcon from './cross.svg';

const Preview = () => {
  const removePreview = () => {
    document.querySelector(".preview-tab").classList.remove("toggle-preview-tab");
  }

  return (
    <div className="preview-tab">
      <div className="preview-container">

        <div className="cross-preview-tab">
          <img src={crossIcon} alt="cross-btn" onClick={() => {removePreview()}} />
        </div>

        <h1 className="preview-heading">
          Preview
        </h1>
        
        <div className="image-preview">
          <img alt="project_image" src="./preview-images/none.png" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
