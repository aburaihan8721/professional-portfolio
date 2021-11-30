import React from "react";
import "./Home.css";
import logo from "../../images/logo.png";

const Home = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="home__bg" id="home">
      <nav className="navbar navbar-expand-lg navbar-dark header">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="60" height="30" class="d-inline-block align-text-top" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link c__link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link c__link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link c__link" href="#project">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link c__link" href="#contact" tabindex="-1" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* HOME CONTENT */}

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="home__content">
                <div className="home__meta">
                  <h1 className="home__text py__10">WELCOME TO MY WORLD</h1>
                  <h2 className="home__text py__10">Hi, I’m Abu Raihan</h2>
                  <h3 className="home__text sweet py__10">JS Developer.</h3>
                  <h4 className="home__text py__10">based in BD.</h4>
                </div>
                <div className="about__button d__flex align__items__center">
                  <a href="https://drive.google.com/file/d/13wSdFwdFqVYxHOHqsk8dfF4bC2Nnh6rt/view?export=download">
                    <button className="about btn pointer">Download Cv</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
