import LoginPatient from "../../components/LoginPatient";
import RootLayout from "./layout";

export default function LoginPatientPage() {
    return (
        <div>
            <RootLayout children={<LoginPatient />} />
        </div>
    );
}