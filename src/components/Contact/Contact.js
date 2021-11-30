import React from "react";
import "./Contact.css";
import contactImg from "../../images/about.jpg";

const Contact = () => {
  return (
    <div className="contact component__space" id="contact">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Hire Me.</h1>
                <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                <p className="hire__text white">
                  <strong>+088 01718562225</strong> or email <strong>aburaihan8721@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <input type="text" className="contact name" placeholder="Your name *" />
                <input type="text" className="contact email" placeholder="Your Email *" />
                <input type="text" className="contact subject" placeholder="Write a Subject" />
                <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={contactImg} alt="" className="contact__img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
