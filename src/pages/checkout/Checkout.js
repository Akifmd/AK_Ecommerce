import React, { useState, useEffect } from "react";
import "./Check.css";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

export default function Checkout() {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    emailid: "",
    address: "",
    phonenumber: "",
  });
  const [errors, seterrors] = useState({});
  const [records, setrecords] = useState([]);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validation(user));
    setSubmit(true);
    const isError = validation(user);
    if (_.isEmpty(isError)) {
      navigate(`/payment`);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      const newuser = {
        ...user,
        id: new Date().getTime().toString(),
      };
      setrecords([...records, newuser]);
    }
  }, [errors]);

  const validation = (user) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error = {};

    if (!user.firstname) {
      error.firstname = "Enter a Firstname";
    } else if (user.firstname.length > 50) {
      error.firstname = "Maximum length is 50";
    }

    if (!user.lastname) {
      error.lastname = "Enter a Lastname";
    } else if (user.lastname.length > 50) {
      error.lastname = "max length is 50";
    }
    if (!user.phonenumber) {
      error.phonenumber = "Enter a phonenumber";
    }
    if (user.phonenumber.length != 10) {
      error.phonenumber = "Enter a valid phonenumber";
    }
    if (!regex.test(user.emailid)) {
      error.emailid = "Enter a valid email";
    }
    if (!user.address) {
      error.address = "Please enter your shipping address.";
    } else if (user.address.length > 50) {
      error.address = "max length is 50";
    }

    return error;
  };
  return (
    <div className="container">
      <h2>Checkout form</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname: </label>
          <input
            type="text"
            value={user.firstname}
            onChange={handleInput}
            name="firstname"
            id="firstname"
            required
          ></input>
          <span>
            <br />
            {errors.firstname}
          </span>
        </div>

        <div>
          <label htmlFor="lastname">Lastname: </label>
          <input
            type="text"
            value={user.lastname}
            onChange={handleInput}
            name="lastname"
            id="lastname"
            required
          ></input>
          <span>
            <br />
            {errors.lastname}
          </span>
        </div>

        <div>
          <label htmlFor="emailid">Email-Id: </label>
          <input
            type="text"
            value={user.emailid}
            onChange={handleInput}
            name="emailid"
            id="emailid"
            required
          ></input>
          <span>
            <br />
            {errors.emailid}
          </span>
        </div>

        <div>
          <label htmlFor="phonenumber">PhoneNumber: </label>
          <input
            type="number"
            value={user.phonenumber}
            onChange={handleInput}
            name="phonenumber"
            id="phonenumber"
            required
          ></input>
          <span>
            <br />
            {errors.phonenumber}
          </span>
        </div>

        <div>
          <label for="address">Address: </label>
          <input
            value={user.address}
            type="text"
            onChange={handleInput}
            class="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
            required
          />
        </div>
        <div>
          <label for="country">Country: </label>
          <select class="custom-select d-block w-100" id="country" required>
            <option value="">Choose...</option>
            <option>India</option>
          </select>
        </div>
        <div>
          <label for="state">State: </label>
          <select class="custom-select d-block w-100" id="state" required>
            <option value="">Choose...</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>

        <div>
          <label for="zip">Zip Code: </label>
          <input
            type="number"
            class="form-control"
            id="zip"
            placeholder=""
            required
          />
        </div>
        <br />
        <hr />

        <div class="checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="same-address"
          />
          <label class="custom-control-label" for="same-address">
            Shipping address is the same as my billing address
          </label>
        </div>
        <div class="checkbox">
          <input type="checkbox" class="custom-control-input" id="save-info" />
          <label class="custom-control-label" for="save-info">
            Save this information for next time
          </label>
        </div>

        <button
          href="/payment"
          class="btn btn-primary btn-lg btn-block"
          type="submit"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
