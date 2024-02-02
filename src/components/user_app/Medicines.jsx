import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
import Navbar from "../Navbar";

const Medicines = () => {
  const Razorpay = useRazorpay();
  const [amount, setAmount] = useState(1);

  // complete order
  const complete_order = (paymentID, orderID, signature) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/user/payment/complete/",
      data: {
        payment_id: paymentID,
        order_id: orderID,
        signature: signature,
        amount: amount,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const razorPay = () => {
    //create order
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/user/payment/create/",
      data: {
        amount: amount,
        currency: "INR",
      },
    })
      .then((response) => {
        // get order id
        var order_id = response.data.data.id;

        // handle payment
        const options = {
          key: "rzp_test_IbESPvslW2YOv2", // Enter the Key ID generated from the Dashboard
          name: "Cardio Care",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            //complete order
            complete_order(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
          },
          checkout: {
            method: {
              netbanking: "1",
              card: "1",
              upi: "1",
              wallet: "1",
            },
          },
          prefill: {
            name: "Asim Thaha",
            email: "iamasimthaha@gmail.com ",
            contact: "8281616294",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
          alert(response.error.metadata.signature);
        });
        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5">hi</div>
      <div className="mt-3">hi</div>
      <div className="mt-5 text-center">
        <h2
          className="mb-12 section-heading wow fadeInDown"
          data-wow-delay="0.3s"
        >
          Medicines
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link className="btn btn-primary" onClick={razorPay}>
                      Pay Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
