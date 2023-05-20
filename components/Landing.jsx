"use client"
import React, { Component } from 'react';
import { Layout, Typography, Button } from 'antd';
import Login from './Login';
import LoginP from './LoginP';

const { Content, Header } = Layout;
const { Title, Text } = Typography;

class AppointmentBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDoctorLogin: false,
            showPatientLogin: false
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
            <div style={{ minHeight: '100vh', minWidth: '100vw', backgroundImage: "url('https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?w=1060&t=st=1684575855~exp=1684576455~hmac=c802197142bf778ad10e1526d57524521b210d29b2da8a34170b68ffb8af6adf')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
                <Header style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100px', height: '100px', marginTop: '5em', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiKo1qG9tABSixO2U8JsjMhXE9qv-GDULgwltB1rIlQ&s" alt="HealthCare360 Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <Title level={3} style={{ color: '#fff', margin: 0 }}>HealthCare360</Title>
                    </div>
                </Header>
                <div style={{ flex: 1, padding: '2rem', textAlign: 'center' }}>
                    <Title level={2} style={{ marginBottom: '1rem', color: '#fff' }}>Welcome to our Healthcare360</Title>
                    <Text style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#fff' }}>
                        We provide high-quality healthcare services to improve the well-being of our patients.
                    </Text>
                    <Text style={{ color: '#fff' }}>
                        Our services include:
                    </Text>
                    <ul style={{ textAlign: 'left', margin: '1rem 0', color: '#fff' }}>
                        <li>Primary Care</li>
                        <li>Specialty Care</li>
                        <li>Emergency Care</li>
                        <li>Diagnostic Services</li>
                    </ul>
                    <div style={{ marginTop: '2rem' }}>
                        <Button type="primary" className="ghost" onClick={this.handleDoctorLogin}>Continue as Doctor</Button>
                        <Button type="primary" className="ghost" onClick={this.handlePatientLogin}>Continue as Patient</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointmentBooking;
