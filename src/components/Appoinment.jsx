import React from "react";
import Morning from "./Morning";
import Evening from "./Evening";

const Appoinment = () => {
  return (
    <div>
      <div className="container">
        <di className="row">
          <div className="col">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <Morning />
                <Evening />
              </div>
            </div>
          </div>
        </di>
      </div>
    </div>
  );
};

export default Appoinment;
