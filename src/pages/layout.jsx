import "./globals.css";

import { Layout, Typography, Button } from "antd";

const { Title } = Typography;
const { Header } = Layout;

export default function RootLayout({ children }) {
  return (
    <div>
      <Header
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          marginTop: "7em",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              marginTop: "5em",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: "1rem",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiKo1qG9tABSixO2U8JsjMhXE9qv-GDULgwltB1rIlQ&s"
              alt="HealthCare360 Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Title level={3} style={{ color: "#fff", margin: 0 }}>
            HealthCare360
          </Title>
        </div>
      </Header>

      { children }
    </div>
  );
}
