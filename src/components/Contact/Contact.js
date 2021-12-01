import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import contactImg from "../../images/about.jpg";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_gmredqd", "template_4n2tlci", form.current, "user_dok71YYOkH45NqWB4rswb").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setSuccess(true);
    e.target.reset();
  };

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
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" className="contact name" placeholder="Your name *" />
                <input type="email" name="email" className="contact email" placeholder="Your Email *" />
                <input type="text" name="subject" className="contact subject" placeholder="Write a Subject" />
                <textarea name="message" id="message" placeholder="Write Your message" />
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
                {success && (
                  <div className="alert alert-primary" role="alert">
                    Your message has been submitted successfully!
                  </div>
                )}
              </form>
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
