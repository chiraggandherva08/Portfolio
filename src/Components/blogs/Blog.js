import "./blog.css";
import React from "react";
import BlogData from "./BlogData";
import BlogImage from "./BlogImage/blog-image.jpeg";

const Blog = () => {
  return (
    <div className="go-to-blog-section" id="blog">
      <div className="blog">
        <div className="image-blog">
          <img src={BlogImage} alt="blog-image" />
        </div>

        <ul className="about-blog">
          {BlogData.map((currentElement, index) => {
            return (
              <li className="blog-element" key={index}>
                {currentElement}
              </li>
            );
          })}

          <div className="go-to-link">
            <a href="#">Visit blogs</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
