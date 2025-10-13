
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("seenSplash")) return navigate("/home", { replace: true });
        sessionStorage.setItem("seenSplash", "1");
        const t = setTimeout(() => navigate("/home"), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="container">
      <div className="circle">
        <img src="/logo.png" alt="CPE Logo" className="logo" />
      </div>
    </div>
  );
}
