import PatientRegister from "../../components/PatientRegister";
import RootLayout from "./layout";

export default function RegisterPatientPage() {
  return (
    <div>
      <RootLayout children={<PatientRegister />} />
    </div>
  );
}
