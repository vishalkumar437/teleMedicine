import Login from "../../components/Login";
import PatientRegister from "../../components/patientRegister";
import DoctorRegister from "../../components/DoctorRegister"
import { Axios } from "axios";
  export default function Home() {
  return (
    <div>
      <PatientRegister/>
    </div>
  );
}
