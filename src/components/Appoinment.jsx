import React from "react";
import Morning from "./Morning";
import Evening from "./Evening";

const Appoinment = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <di className="row">
          <div className="col">
            <form className="row card needs-validation bg-slate-100">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row my-3">
                  <div className="col">
                    <input
                      type="date"
                      name="date"
                      className="bg-slate-100 border border-3"
                      id=""
                      min={new Date().toLocaleString() + ""}
                      required
                    />
                  </div>
                </div>
                <Morning />
                <Evening />
              </div>
              <div className="col col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center my-3">
                <button type="submit" className="button">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </di>
      </div>
    </div>
  );
};

export default Appoinment;
