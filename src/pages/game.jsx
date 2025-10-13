import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();
  const [open, setOpen] = useState({
    time: false,
    code: false,
    binary: false,
  });

  const toggle = (key) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="app">
      <div className="shell">
        <header className="navbar">
          <div className="brand">
            <img src="/logo.png" alt="CPE Logo" />
          </div>
          <div className="brand-text">
            <h1>ALL IN CPE</h1>
            <p>computer engineering</p>
          </div>
        </header>

        <main className="content content-page">
          <h2 className="page-title">Game</h2>
          <div className="section-card">
            <h3>Time challenge game</h3>
            <p>
              ตอบคำถาม 20 ข้อ ข้อละ 10 วินาที ตอบเร็วได้ “พกเวลา”
              ไปข้อถัดไป (สูงสุด 30 วิ/ข้อ)
            </p>
            <button
              className="section-toggle"
              onClick={() => toggle("time")}
            >
              วิธีเล่น
              <i
                className={`fi fi-rr-angle-small-down chev ${
                  open.time ? "up" : ""
                }`}
              ></i>
            </button>
            {open.time && (
              <div className="section-body" style={{ background: "#f5f9ff" }}>
                <ul style={{ marginLeft: 16 }}>
                  <li>เริ่มที่ 10 วิ/ข้อ</li>
                  <li>ตอบก่อนเวลาที่เหลือจะถูกพกไปข้อถัดไป (สูงสุด 30 วิ/ข้อ)</li>
                  <li>กด ข้าม ได้ แต่ไม่มีเพิ่มเวลา</li>
                </ul>
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button className="more-btn" onClick={() => navigate("/game/time")}>Play</button>
            </div>
          </div>

          <div className="section-card">
            <h3>code solving game</h3>
            <p>
              โจทย์เขียนและแก้โค้ด Java, Python, C พร้อมทดสอบอัตโนมัติ
              มีทั้งง่ายและยาก โหมดฝึก (5 ข้อ) และโหมดจับเวลา (10 ข้อ)
            </p>

            <button
              className="section-toggle"
              onClick={() => toggle("code")}
            >
              วิธีเล่น
              <i
                className={`fi fi-rr-angle-small-down chev ${
                  open.code ? "up" : ""
                }`}
              ></i>
            </button>
            {open.code && (
              <div className="section-body" style={{ background: "#f5f9ff" }}>
                <ul style={{ marginLeft: 16 }}>
                  <li>เลือกภาษา → แก้โค้ดในช่อง → กด ทดสอบโค้ด</li>
                  <li>ผ่านครบทุกกรณีจึงไปข้อถัดไป (ตั้งค่าได้ใน Setting)</li>
                  <li>โหมดจับเวลา: ง่าย 1 นาที / ยาก 2 นาที</li>
                </ul>
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button className="more-btn">Practice</button>
              <button
                className="more-btn"
                style={{ background: "#0b1b2f", marginLeft: 10 }}
              >
                Timer
              </button>
            </div>
          </div>
          <div className="section-card">
            <h3>Binary</h3>
            <p>
              แข่งแปลงเลขฐาน 2/10/16 (ตอบเร็วได้โบนัสเวลา) —
              ฝึกพื้นฐาน bit &amp; base ที่ใช้จริงใน CPE
            </p>

            <button
              className="section-toggle"
              onClick={() => toggle("binary")}
            >
              วิธีเล่น
              <i
                className={`fi fi-rr-angle-small-down chev ${
                  open.binary ? "up" : ""
                }`}
              ></i>
            </button>
            {open.binary && (
              <div className="section-body" style={{ background: "#f5f9ff" }}>
                <ul style={{ marginLeft: 16 }}>
                  <li>แปลงค่าตามที่กำหนด (ฐาน 2 → 10 หรือ 10 → 16)</li>
                  <li>ตอบเร็ว = พกเวลาโบนัสไปข้อถัดไป (สูงสุด 300 วิ/ข้อ)</li>
                </ul>
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button className="more-btn" onClick={() => navigate("/game/binary")}>Play</button>
            </div>
          </div>
        </main>

        <nav className="bottom-nav">
          <button onClick={() => navigate("/home")}>
            <i className="fi fi-rr-home"></i>
            <span>Home</span>
          </button>
          <button onClick={() => navigate("/content")}>
            <i className="fi fi-rr-book-alt"></i>
            <span>Content</span>
          </button>
          <button className="active">
            <i className="fi fi-rr-gamepad"></i>
            <span>Game</span>
          </button>
          <button onClick={() => navigate("/major")}>
            <i className="fi fi-rr-graduation-cap"></i>
            <span>Major</span>
          </button>
          <button onClick={() => navigate("/other")}>
            <i className="fi fi-rr-menu-dots"></i>
            <span>Others</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
