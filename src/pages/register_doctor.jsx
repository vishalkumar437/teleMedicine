import DoctorRegister from "../../components/DoctorRegister";
import RootLayout from "./layout";

export default function RegisterDoctorPage() {
  return (
    <div>
      <RootLayout children={<DoctorRegister />} />
    </div>
  );
}
