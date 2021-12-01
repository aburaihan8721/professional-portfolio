import React from "react";
import "./Travel.css";
import travelHome from "../../images/travelHome.png";

const Travel = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div>
              <img src={travelHome} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
