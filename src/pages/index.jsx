import Landing from "../../components/Landing";
import RootLayout from "./layout";

export default function Home() {
  return (
    <div>
      <RootLayout children={ <Landing /> } />
    </div>
  );
}
