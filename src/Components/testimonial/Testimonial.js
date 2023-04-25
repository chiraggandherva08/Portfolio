import React from "react";
import "./testimonial.css";
import TestimonialData from "./TestimonialData";

const CurrentTestimonial = ({ Data_ }) => {
  return (
    <div className="testimonial">
      <img className="testimonial-picture" src={Data_.profilePic} />
      <p className="testimonial-message">{Data_.message}</p>
      <h3 className="person-name">{Data_.name}</h3>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="testimonial-section" id="testimonials">
      <h1 className="testimonial-heading">Testimonial</h1>
      <div className="testimonials-container">
        {TestimonialData.map((currentObj, index) => {
          return <CurrentTestimonial key={index} Data_={currentObj} />;
        })}
      </div>
    </div>
  );
};

export default Testimonial;
