"use client";
import "./Login.css";
import React, { useState } from "react";

import axios from "axios";

export default function DoctorRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    phoneNo: "",
    practicingFrom: "",
    specializations: [
      {
        specializationName: "Surgery",
      },
      {
        specializationName: "MRI",
      },
    ],
    lastName: "",
    instituteName: "",
    passingYear: "",
    qualifications: [
      {
        qualificationName: "MBBS",
        instituteName: "AIIMS",
        passingYear: 2020,
      },
    ],
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
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.phoneNo,
      password: formData.password,
      practicingFrom: formData.practicingFrom,
      qualifications: [
        {
          qualificationName: "MBBS",
          instituteName: "AIIMS",
          passingYear: 2020,
        },
      ],
      specializations: [
        {
          specializationName: "Surgery",
        },
        {
          specializationName: "MRI",
        },
      ],
    };
    axios({
      method: "post",
      url: "http://localhost:9091/authenticate/doctor/register",
      data: data,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then(function (response) {
      console.log(response);
    });
  };

  return (
    <div>
      <div>
        <div>
          <form action="#">
            <h1>Doctor Register</h1>

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
              name="practicingFrom"
              placeholder="Year"
              value={formData.practicingFrom}
              onChange={handleInputChange}
            />
            {/* <input
              name="quatlifications"
              placeholder="Qualification"
              value={formData.qualifications}
              onChange={handleInputChange}
            /> */}
            <input
              name="instituteName"
              placeholder="Institute"
              value={formData.instituteName}
              onChange={handleInputChange}
            />
            <input
              name="passingYear"
              placeholder="Passing Year"
              value={formData.passingYear}
              onChange={handleInputChange}
            />
            {/* <input
              name="specializatons"
              placeholder="Specializations"
              value={formData.specializations}
              onChange={handleInputChange}
            /> */}

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
