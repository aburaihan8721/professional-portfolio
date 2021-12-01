import React from "react";
import "./Health.css";
import heathHome from "../../images/healthHome.png";

const Health = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div>
              <img src={heathHome} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
