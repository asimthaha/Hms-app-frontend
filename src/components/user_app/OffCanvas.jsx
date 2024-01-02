import React from "react";
import Appoinment from "./Appoinment";
import { Link } from "react-router-dom";

const OffCanvas = ({ doctorId }) => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Book Appoinment
          </h5>
          <Link role="button">
            <i
              className="bi bi-x-square"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </Link>
        </div>
        <div className="offcanvas-body">
          <Appoinment doctorId={doctorId} />
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
