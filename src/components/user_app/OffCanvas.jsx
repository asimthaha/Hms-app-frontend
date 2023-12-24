import React from "react";
import Appoinment from "./Appoinment";

const OffCanvas = () => {
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
          <a role="button">
            <i
              class="bi bi-x-square"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </a>
        </div>
        <div className="offcanvas-body">
          <Appoinment />
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
