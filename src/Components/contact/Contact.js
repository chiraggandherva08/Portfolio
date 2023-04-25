import React from "react";
import "./contact.css";

const Contact = () => {
  const contactItems = [
    [
      "./contact/discord.svg",
      "Connect with me on discord",
      "https://discord.gg/gdMh4w8d",
    ],
    [
      "./contact/linkedin.svg",
      "Connect with me on linkedin",
      "https://www.linkedin.com/in/chirag-gandherva-283696252/",
    ],
  ];

  return (
    <>
      <h1 className="contact-heading">Contact</h1>

      <div className="contact-section" id="contact">
        <ul className="contact-links">
          {contactItems.map((disc, index) => {
            return (
              <li className="contact-link-item" key={index}>
                <img className="contact-img" src={disc[0]} alt="icon" />
                <a className="contact-disc" target="_blank" href={disc[2]}>
                  {disc[1]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="contact-form">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            required
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input id="check-box" type="checkbox" />
          <label htmlFor="check-box">
            I want you to wark on a project for me
          </label>
          <input type="submit" value="Submit" id="submit-btn" />
        </div>
      </div>
    </>
  );
};

export default Contact;
