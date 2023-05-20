import React, { useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Button,
  Modal,
  Form,
  Select,
  DatePicker,
  List,
} from "antd";
import moment from "moment";
import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const PatientDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
    const [doctors, setDoctors] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [appointmentDates, setAppointmentDates] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    setTimeout(() => {
      const response = {
        appointmentDates: [
          "2023-06-01 10:00",
          "2023-06-02 14:30",
          "2023-06-05 09:45",
          "2023-06-06 16:15",
        ],
      };

      setAppointmentDates(response.appointmentDates);
    }, 1000);

    getAllDoctors();
    getAllSymptoms();
  }, []);

  const handleCreateAppointment = () => {
    setIsModalVisible(true);
  };

  const getAllDoctors = () => {
    axios({
      method: "get",
      url: "http://localhost:9091/appointment/doctor/get-all",
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then(function (response) {
      console.log(response);
      let data = response.data;
      let temp = data.map((item) => item.firstName + " " + item.lastName);
      setDoctors(temp);
    });
  };

  const getAllSymptoms = () => {
    axios({
      method: "get",
      url: "http://localhost:9091/appointment/symptoms/get-all",
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then(function (response) {
      console.log(response);
      let data = response.data;
      let temp = data.map((item) => item.name);
      setSymptoms(temp);
    });
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const appointment = {
          id: Date.now(),
          doctor: values.doctor,
          appointmentDate: values.appointmentDate.format("YYYY-MM-DD HH:mm"),
          symptom: values.symptom,
        };
        setAppointments([...appointments, appointment]);
        setIsModalVisible(false);
        console.log("New appointment:", appointment);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleModalCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "2rem" }}>
        <Title level={2}>Patient Dashboard</Title>
        <Button type="primary" onClick={handleCreateAppointment}>
          Create New Appointment
        </Button>
        <Modal
          title="Create Appointment"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <Form form={form}>
            <Form.Item
              name="doctor"
              label="Doctor"
              rules={[{ required: true, message: "Please select a doctor" }]}
            >
              <Select placeholder="Select a doctor">
                {doctors.map((doctor) => (  
                  <Option value={doctor} key={doctor}>
                    {doctor}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="appointmentDate"
              label="Appointment Date"
              rules={[
                {
                  required: true,
                  message: "Please select an appointment date",
                },
              ]}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm"
                disabledDate={(current) => current < moment().endOf("day")}
              />
            </Form.Item>
            <Form.Item
              name="symptom"
              label="Symptom"
              rules={[{ required: true, message: "Please select a symptom" }]}
            >
              <Select placeholder="Select a symptom">
                {symptoms.map((symptom) => (
                  <Option value={symptom} key={symptom}>
                    {symptom}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
        <List
        style={{
          padding: "12px",
        }}
          dataSource={appointments}
          renderItem={(appointment) => (
            <List.Item>
              <div>
                <strong>Doctor:</strong> {appointment.doctor}
              </div>
              <div>
                <strong>Appointment Date:</strong> {appointment.appointmentDate}
              </div>
              <div>
                <strong>Symptom:</strong> {appointment.symptom}
              </div>
            </List.Item>
          )}
        />

        <a href="https://polite-bienenstitch-11182d.netlify.app/call?roomId=12" target="_">Video Call</a>
      </Content>
    </Layout>
  );
};

export default PatientDashboard;
