import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ userId }) => {
  const [data, setData] = useState({
    doctorid: sessionStorage.getItem("staffid"),
    userid: 0,
    inferences: "",
    medicines_data: [],
  });

  const [formField, setFormField] = useState([
    { meds: "", times: "", days: "" },
  ]);

  useEffect(() => {
    setData({
      ...data,
      userid: userId,
    });
  }, [userId]);

  const inputHandler = (event, index) => {
    const data = [...formField];
    data[index][event.target.name] = event.target.value;
    setFormField(data);
    // setData(data);
  };

  const addFields = () => {
    const object = {
      meds: "",
      times: "",
      days: "",
    };
    setFormField([...formField, object]);
  };

  const removeFields = (index) => {
    const data = [...formField];
    data.splice(index, 1);
    setFormField(data);
  };

  useEffect(() => {
    if (data.medicines_data.length > 0) {
      console.log("Submitting");
    }
  }, [data.medicines_data]);

  const addMedicine = () => {
    setData({
      ...data,
      medicines_data: [...formField],
    });
    console.log(data);
    // axios
    //   .post("http://127.0.0.1:8000/staff/addMedicineDoctor/", data)
    //   .then((response) => {
    //     alert(response.data.status);
    //   });
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Medicine
              </h5>
            </div>
            <div className="modal-body">
              <form className="row needs-validation">
                <div className="col col-12 was-validated">
                  <label htmlFor="" className="form-label">
                    Inference
                  </label>
                  <textarea
                    required
                    name="inferences"
                    id=""
                    rows="3"
                    className="form-control mb-1"
                    value={data.inferences}
                  ></textarea>
                </div>
                {formField.map((forms, index) => {
                  return (
                    <div key={`form_${index}`} className="row">
                      <div className="col col-4 was-validated">
                        <label htmlFor="" className="form-label">
                          Medicine
                        </label>
                        <input
                          type="text"
                          required
                          name="meds"
                          onChange={(event) => inputHandler(event, index)}
                          value={forms.meds}
                          className="form-control"
                        />
                      </div>
                      <div className="col col-4 was-validated">
                        <label htmlFor="" className="form-label">
                          Times
                        </label>
                        <input
                          type="number"
                          required
                          name="times"
                          onChange={(event) => inputHandler(event, index)}
                          value={forms.times}
                          className="form-control"
                        />
                      </div>
                      <div className="col col-4 was-validated">
                        <label htmlFor="" className="form-label">
                          Days
                        </label>
                        <input
                          type="number"
                          required
                          name="days"
                          onChange={(event) => inputHandler(event, index)}
                          value={forms.days}
                          className="form-control"
                        />
                      </div>
                    </div>
                  );
                })}
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div>
                <Link type="button" onClick={removeFields}>
                  <i
                    className="bi bi-trash text-danger mr-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove Fields"
                  ></i>
                </Link>
                <Link type="button" onClick={addFields}>
                  <i
                    className="bi bi-bag-plus-fill text-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add Fields"
                  ></i>
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary mr-1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={addMedicine}
                  className="btn btn-outline-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
