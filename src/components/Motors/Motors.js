import React from "react";
import "./Motors.css";
import motorsHome from "../../images/motors-1.jpg";

const Motors = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <h2 className="text-center py-4">Exclusive Motors</h2>
          <div className="col-md-4">
            <div>
              <img src={motorsHome} alt="" className="img-fluid" />
            </div>
            <h5 class="card-title">Motors Home</h5>
          </div>
          <div className="col-md-4">
            <div>
              <img src={motorsHome} alt="" className="img-fluid" />
            </div>
            <h5 class="card-title">Motors Home</h5>
          </div>
          <div className="col-md-4">
            <div>
              <img src={motorsHome} alt="" className="img-fluid" />
            </div>
            <h5 class="card-title">Motors Home</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motors;
