import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Modal = ({ userId }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    doctorid: sessionStorage.getItem("staffid"),
    userid: 0,
    inferences: "",
    medicines_data: [],
  });

  const [formField, setFormField] = useState([
    { meds: "", times: "", days: "" },
  ]);

  const [inference, setInference] = useState("");
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
  };

  const addFields = () => {
    const object = {
      meds: "",
      times: "",
      days: "",
    };
    setFormField([...formField, object]);
  };

  const removeFields = () => {
    const data = [...formField];
    data.splice(formField.length - 1, 1);
    setFormField(data);
  };

  const addMedicine = () => {
    const param = {
      ...data,
      medicines_data: [...formField],
      inferences: inference,
    };
    axios
      .post("http://127.0.0.1:8000/staff/addMedicineDoctor/", param)
      .then((response) => {
        alert(response.data.status);
        navigate("/doctor/viewPatients");
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
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
            <form className="row needs-validation m-1">
              <div className="modal-body">
                <div className="col col-12 was-validated">
                  <label htmlFor="" className="form-label">
                    Inference
                  </label>
                  <textarea
                    required
                    name="inferences"
                    id=""
                    onChange={(ev) => setInference(ev.target.value)}
                    rows="3"
                    className="form-control mb-1"
                    value={inference}
                  ></textarea>
                </div>
                {formField.map((forms, index) => {
                  return (
                    <div key={`form_${index}`} className="row">
                      <div className="col col-1 mt-4">
                        <Link type="button" onClick={removeFields}>
                          <i
                            className="bi bi-trash text-danger ml-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Remove Fields"
                          ></i>
                        </Link>
                      </div>
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
                      <div className="col col-3 was-validated">
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
                      <div className="col col-3 was-validated">
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
                      <div className="col col-1 mt-4">
                        <Link type="button" onClick={addFields}>
                          <i
                            className="bi bi-plus-circle text-primary mr-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add Fields"
                          ></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
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
                      className="bi bi-plus-circle text-primary"
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
