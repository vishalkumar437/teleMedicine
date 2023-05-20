import LoginDoctor from "../../components/LoginDoctor";
import RootLayout from "./layout";

export default function LoginDoctorPage() {
    return (
        <div>
            <RootLayout children={<LoginDoctor />} />
        </div>
    );
}