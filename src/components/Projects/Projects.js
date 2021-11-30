import React from "react";
import "./Projects.css";
import Project1 from "../../images/portfolio-1.jpg";
import Project2 from "../../images/portfolio-2.jpg";
import Project3 from "../../images/portfolio-3.jpg";

const Projects = () => {
  return (
    <div className="project component__space" id="project">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <h1 className="heading">My Latest Projects</h1>
              <p className="heading p__color">The projects that I have recently completed.</p>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-4">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Exclusive Motors</h5>
                <h4 className="project__text">Buying Car Related Website</h4>
                <a href="https://exclusive-motors-client.web.app/" target="_blank" rel="noreferrer" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Travel Boss</h5>
                <h4 className="project__text">Travel Related Website</h4>
                <a href="https://travel-boss-client-b3b09.web.app/" target="_blank" rel="noreferrer" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">RJ Health Care</h5>
                <h4 className="project__text">Health Care Related Website</h4>
                <a href="https://rj-health-care.web.app/" target="_blank" rel="noreferrer" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
