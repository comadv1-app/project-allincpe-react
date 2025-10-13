// src/pages/quiz.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("fundamentals"); 
  const start = () => navigate(`/quiz/play?mode=${mode}`);

  const ModeBtn = ({ value, children }) => (
    <button
      className={`track-chip ${mode === value ? "active" : ""}`}
      style={{ width: "100%", marginBottom: 12 }}
      onClick={() => setMode(value)}
      aria-pressed={mode === value}
    >
      {children}
    </button>
  );

  return (
    <div className="app">
      <div className="shell">
        <header className="navbar">
          <div className="brand"><img src="/logo.png" alt="CPE Logo" /></div>
          <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
        </header>

        <main className="content content-page">
          <h2 className="page-title">แบบทดสอบ</h2>

          <ModeBtn value="fundamentals">พื้นฐาน Computer Engineering</ModeBtn>
          <ModeBtn value="major">เลือกวิชาเอก</ModeBtn>
          <ModeBtn value="other">สาขาอื่น ๆ</ModeBtn>

          <button className="more-btn" onClick={start}>เริ่มทำแบบทดสอบ</button>
        </main>

        <nav className="bottom-nav">
          <button onClick={() => navigate("/home")}><i className="fi fi-rr-home"></i><span>Home</span></button>
          <button onClick={() => navigate("/content")}><i className="fi fi-rr-book-alt"></i><span>Content</span></button>
          <button onClick={() => navigate("/game")}><i className="fi fi-rr-gamepad"></i><span>Game</span></button>
          <button onClick={() => navigate("/major")}><i className="fi fi-rr-graduation-cap"></i><span>Major</span>
          </button>
          <button onClick={() => navigate("/other")}><i className="fi fi-rr-menu-dots"></i><span>Others</span></button>
        </nav>
      </div>
    </div>
  );
}
