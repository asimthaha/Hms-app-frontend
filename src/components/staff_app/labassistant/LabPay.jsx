import React from "react";
import { Link } from "react-router-dom";

const LabPay = () => {
  return (
    <>
      <div className="mt-5">hi</div>
      <div className="mt-4">hi</div>
      <div className="text-center mt-5">
        <h2
          className="mb-12 section-heading wow fadeInDown"
          data-wow-delay="0.3s"
        >
          payments
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabPay;
