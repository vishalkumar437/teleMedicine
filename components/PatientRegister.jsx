"use client";

import Axios from "axios";
import "./Login.css";
import React, { useState } from "react";

export default function PatientRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    phoneNo: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const patientData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.phoneNo,
      password: formData.password,
    };

    Axios({
      method: "post",
      url: "http://localhost:9091/authenticate/patient/register",
      data: patientData,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then(function (response) {
      console.log(response)
    });
  };
  return (
    <div>
      <div>
        <div>
          <form action="#">
            <h1>Patient Register</h1>
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              name="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={handleInputChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </form>

          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </div>
  );
}
