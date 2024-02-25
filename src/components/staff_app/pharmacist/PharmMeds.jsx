import React, { useEffect, useState } from "react";
import PharmNavbar from "./PharmNavbar";
import axios from "axios";

export const MedStatus = {
  Accept: "Accept",
  Decline: "Decline",
};

const PharmMeds = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/staff/viewMedicinePharmacist/")
      .then((response) => {
        changeData(response.data);
      });
  };

  const updateHandler = (total_rate, index) => {
    const updatedData = [...data]; // Create a copy of the data array
    updatedData[index] = { ...updatedData[index], total_rate: total_rate };
    changeData(updatedData);
  };

  const updateValue = (data, total_rate) => {
    const param = {
      medicineid: data.medicineid,
      total_rate: total_rate,
    };

    axios
      .put("http://127.0.0.1:8000/staff/updateMedicinePharmacist/", param)
      .then((response) => {
        changeData(response.data);
        fetchData();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PharmNavbar />
      <div className="container">
        <div className="mt-5">hi</div>
        <div className="mt-5">hi</div>

        <div className="text-center my-5">
          <h2 className="section-heading wow fadeInDown" data-wow-delay="0.3s">
            Medicines
          </h2>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-around">
            <table className="table table-bordered w-3/4">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Medcines</th>
                  <th scope="col">Rate</th>
                  <th className="d-flex justify-content-center" scope="col">
                    Accept
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.length > 0 &&
                  data.map((value, index) => {
                    return (
                      <tr key={`booking_${index}`}>
                        <th scope="row">{value.user.name}</th>
                        <td>{value.date}</td>
                        <td>
                          {value.medicines_data.map((meds, index) => {
                            return (
                              <ul key={`med_${index}`}>
                                <li>
                                  {meds.meds}, {meds.times} times, {meds.days}{" "}
                                  days
                                </li>
                              </ul>
                            );
                          })}
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={value.total_rate}
                            onChange={(e) =>
                              updateHandler(e.target.value, index)
                            }
                          />
                        </td>
                        <td className="d-flex justify-content-center">
                          <button
                            className="btn btn-outline-success mr-2"
                            type="button"
                            onClick={() => updateValue(value, value.total_rate)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmMeds;
