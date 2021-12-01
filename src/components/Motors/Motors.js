import React from "react";
import "./Motors.css";
import motorsHome from "../../images/motorsHome.png";

const Motors = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div>
              <img src={motorsHome} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motors;
