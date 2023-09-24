import React, { useState, useEffect } from "react";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

export default function Payment() {
  const [pay, setpay] = useState({
    name: "",
    cvv: "",
    cardnum: "",
    exp: "",
  });
  const [errors, seterrors] = useState({});
  const [records, setrecords] = useState([]);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setpay({ ...pay, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validation(pay));
    setSubmit(true);
    const isError = validation(pay);
    if (_.isEmpty(isError)) {
      navigate(`/orderplaced`);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      const newpay = {
        ...pay,
      };
      setrecords([...records, newpay]);
    }
  }, [errors]);

  const validation = (pay) => {
    const error = {};
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (!pay.name) {
      error.name = " Name on card is required";
    } else if (pay.name.length > 50) {
      error.name = "Maximum length is 50";
    }
    if (!pay.cardnum) {
      error.cardnum = "Enter the card number";
    } else if (pay.cardnum.length > 16) {
      error.cardnum = "max length is 16";
    } else if (pay.cardnum.length < 9) {
      error.cardnum = "min length is 9 ";
    }

    if (!regex.test(pay.exp)) {
      error.exp = "Enter a valid expiry date";
    }
    if (!pay.cvv) {
      error.cvv = "Please enter your cvv.";
    } else if (pay.cvv.length > 3) {
      error.cvv = "max length is 3";
    } else if (pay.cvv.length < 3) {
      error.cvv = "min length is 3";
    }
    return error;
  };

  return (
    <div className="container">
      <h2>Payment</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              class="custom-control-input"
              checked
              required
            />
            <label for="credit">Credit card</label>
          </div>
          <div>
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              class="custom-control-input"
              required
            />
            <label for="debit">Debit card</label>
          </div>
        </div>
        <div>
          <label>Name on card: </label>
          <input
            type="text"
            value={pay.name}
            onChange={handleInput}
            name="name"
            placeholder="Full name as displayed on card"
          />

          <span>
            <br />

            {errors.name}
          </span>
        </div>

        <div>
          <label>Credit/Debit card number: </label>
          <input
            type="number"
            name="cardnum"
            onChange={handleInput}
            value={pay.cardnum}
            placeholder=" Credit/Debit card number"
          />

          <span>
            <br />

            {errors.cardnum}
          </span>
        </div>

        <div>
          <label>Expiration: </label>
          <input
            type="text"
            name="exp"
            onChange={handleInput}
            value={pay.exp}
            placeholder="mm/yy"
          />
          <span>
            <br />
            {errors.exp}
          </span>
        </div>

        <div>
          <label>CVV: </label>
          <input
            type="text"
            onChange={handleInput}
            value={pay.cvv}
            name="cvv"
            placeholder="123"
          />
          <span>
            <br />

            {errors.cvv}
          </span>
        </div>

        <button
          href="/orderplaced"
          class="btn btn-primary btn-lg btn-block"
          type="submit"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}
