"use client";
import React, { Component } from "react";
import { Typography, Button } from "antd";
import Login from "./LoginDoctor";
import LoginP from "./LoginPatient";
import { Router, useRouter } from "next/router";
import Link from "next/link";

import styles from "./landing.module.css";

const { Title, Text } = Typography;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDoctorLogin: false,
      showPatientLogin: false,
    };
  }

  handleDoctorLogin = () => {
    this.setState({ showDoctorLogin: true });
  };

  handlePatientLogin = () => {
    this.setState({ showPatientLogin: true });
  };

  render() {
    const { showDoctorLogin, showPatientLogin } = this.state;

    if (showDoctorLogin) {
      return <Login />;
    }

    if (showPatientLogin) {
      return <LoginP />;
    }

    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "99vw",
          backgroundImage:
            "url('https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?w=1060&t=st=1684575855~exp=1684576455~hmac=c802197142bf778ad10e1526d57524521b210d29b2da8a34170b68ffb8af6adf')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, padding: "2rem", textAlign: "center" }}>
          <Title level={2} style={{ marginBottom: "1rem", color: "#fff" }}>
            Welcome to our Healthcare360
          </Title>
          <Text
            style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#fff" }}
          >
            We provide high-quality healthcare services to improve the
            well-being of our patients.
          </Text>
          <Text style={{ color: "#fff" }}>Our services include:</Text>
          <ul style={{ textAlign: "left", margin: "1rem 0", color: "#fff" }}>
            <li>Primary Care</li>
            <li>Specialty Care</li>
            <li>Emergency Care</li>
            <li>Diagnostic Services</li>
          </ul>
          <div style={{ marginTop: "2rem" }}> 
            <Link className={styles.ghost} href="/login_doctor">
              Continue as Doctor
            </Link>

            <Link className={styles.ghost} href="/login_patient">
              Continue as Patient
            </Link> 
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
