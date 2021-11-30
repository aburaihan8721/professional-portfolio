import React from "react";
import "./Footer.css";
import footerImg from "../../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="footer d__flex align__items__center justify__content__space__between pz-10"
              style={{ padding: "10px 20px", zIndex: "100" }}
            >
              <img src={footerImg} alt="" className="footer__img pointer" style={{ height: "40px" }} />
              <span className="copyright" style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}>
                Copyright © 2021 Web developer Abu Raihan. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
