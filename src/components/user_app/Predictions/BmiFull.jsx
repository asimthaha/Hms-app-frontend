import React from "react";
import BmiCalc from "./BmiCalc";
import BmiCharts from "./BmiCharts";
import DocCharts from "../../staff_app/doctors/DocCharts";

const BmiFull = () => {
  return (
    <>
      <div className="mt-5">hi</div>
      <div className="mt-5">hi</div>
      <div className="container">
        <div className="mt-5 text-center">
          <h2 className="section-heading wow fadeInDown" data-wow-delay="0.3s">
            Bmi Calculator
          </h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col col-8">
                <BmiCalc />
              </div>
              <div className="col col-3 d-flex justify-content-center">
                <div className="row">
                  <div className="col">
                    <BmiCharts />
                  </div>
                  <div className="col">
                    <DocCharts />
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

export default BmiFull;
