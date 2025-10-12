import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MaintenancePage from "./components/MaintenancePage"; 

export default function App() {
  // --- สถานะ maintenance ---
  const MAINTENANCE = import.meta.env.VITE_MAINTENANCE === "true";

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // --- ถ้าเป็นโหมด maintenance แสดงหน้านี้แทนเลย ---
  if (MAINTENANCE) {
    return <MaintenancePage />;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="container">
        <div className="circle">
          <img src="/logo.png" alt="CPE Logo" className="logo" />
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
