import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const TRACKS = ["All", "Hardware", "Software", "Security", "AI and Automation"];

const MAJORS = [
  {
    name: "Robotics & Automation",
    track: ["Hardware","AI and Automation"],
    desc: "ศึกษาการออกแบบ พัฒนา และควบคุมระบบหุ่นยนต์และระบบอัตโนมัติ โดยบูรณาการความรู้ด้านอิเล็กทรอนิกส์ คอมพิวเตอร์ และการควบคุม เพื่อให้เครื่องจักรสามารถทำงานได้อย่างอัจฉริยะและอัตโนมัติ (รองรับระบบ ROS)",
    skills: { Coding: 4, Hardware: 5, Mathematics: 4 },
    careers: [
      "Automation Engineer",
      "Robotics Engineer",
      "Embedded System Developer",
      "IoT Engineer",
      "Mechatronics Engineer",
    ],
    highlight: ["Embedded Systems (STM32 / ESP32)", "Control Systems", "PLC / Automation", "MQTT / Modbus"],
    url: "https://www.roboticsbusinessreview.com/",
  },
  {
    name: "Advanced Software Engineering",
    track: "Software",
    desc: "ศึกษาหลักการและเทคนิคขั้นสูงของการพัฒนาซอฟต์แวร์และจัดการซอฟต์แวร์ รวมถึงกระบวนการ Agile, DevOps, และ Cloud-native Development เพื่อสร้างซอฟต์แวร์คุณภาพสูงในระดับอุตสาหกรรม",
    skills: { Coding: 5, Hardware: 2, Mathematics: 3 },
    careers: [
      "Software Architect",
      "Full-stack Developer",
      "DevOps Engineer",
      "QA Automation Engineer",
      "System Analyst",
    ],
    highlight: ["Agile / Scrum", "Cloud Platforms (AWS / Azure)", "Containerization (Docker / Kubernetes)", "Version Control (Git)"],
    url: "https://www.computer.org/education/bodies-of-knowledge/software-engineering",
  },
  {
    name: "Cybersecurity",
    track: "Security",
    desc: "ศาสตร์และเทคโนโลยีด้านปกป้องระบบคอมพิวเตอร์ เครือข่าย และข้อมูลจากการถูกโจมตี การเข้าถึงโดยไม่ได้รับอนุญาต หรือการรั่วไหล โดยมุ่งสร้างบุคลากรที่มีทักษะทั้งด้านรับมือและเชิงรุก",
    skills: { Coding: 3, Hardware: 3, Mathematics: 4 },
    careers: [
      "Cybersecurity Analyst",
      "Penetration Tester",
      "SOC Engineer",
      "Network Security Engineer",
      "Digital Forensics Specialist",
    ],
    highlight: ["Network Security", "Ethical Hacking", "Incident Response", "Digital Forensics"],
    url: "https://owasp.org/",
  },
  {
    name: "AI and Machine Learning",
    track: "AI and Automation",
    desc: "มุ่งเน้นการพัฒนาอัลกอริทึมเพื่อการเรียนรู้ของเครื่องและการตัดสินใจอัตโนมัติ ครอบคลุม Deep Learning, NLP และ Computer Vision",
    skills: { Coding: 5, Hardware: 2, Mathematics: 5 },
    careers: [
      "AI Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Computer Vision Engineer",
      "NLP Engineer",
    ],
    highlight: ["Python / TensorFlow / PyTorch", "Data Preprocessing", "Model Optimization", "Statistics & Linear Algebra"],
    url: "https://www.deeplearning.ai/",
  }, 
];

export default function Major() {
  const navigate = useNavigate();
  const [activeTrack, setActiveTrack] = useState("All");
  const [open, setOpen] = useState(null);

  const filteredMajors = useMemo(() => {
    if (activeTrack === "All") return MAJORS;
    return MAJORS.filter((m) =>
      Array.isArray(m.track) ? m.track.includes(activeTrack) : m.track === activeTrack
    );
  }, [activeTrack]);

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
          <h2 className="page-title">เลือกวิชาเอก</h2>
          <div className="track-filter">
            {TRACKS.map((t) => (
              <button
                key={t}
                className={`track-chip ${activeTrack === t ? "active" : ""}`}
                onClick={() => setActiveTrack(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {filteredMajors.map((m, idx) => {
            const isOpen = open === idx;
            return (
              <section className="section-card" key={m.name}>
                <button
                  className="section-head section-primary section-toggle"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  {m.name}
                  <span className={`chev ${isOpen ? "up" : ""}`}>▾</span>
                </button>

                {isOpen && (
                  <div className="section-body">
                    <p className="major-desc">{m.desc}</p>
                    <div className="ratings">
                      {Object.entries(m.skills).map(([k, v]) => (
                        <p key={k}>
                          {k}: {"⭐".repeat(v)}{"☆".repeat(5 - v)}
                        </p>
                      ))}
                    </div>

                    <div className="roles-title">สายงานที่รองรับ</div>
                    <ul className="roles-list">
                      {m.careers.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>

                    <div className="roles-title">ทักษะเด่น</div>
                    <ul className="roles-list">
                      {m.highlight.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>

                    <a href={m.url} className="more-btn" target="_blank" rel="noreferrer">
                      เพิ่มเติม
                    </a>
                  </div>
                )}
              </section>
            );
          })}
        </main>

        <nav className="bottom-nav">
          <button onClick={() => navigate("/home")}>
            <i className="fi fi-rr-home"></i><span>Home</span>
          </button>
          <button onClick={() => navigate("/content")}>
            <i className="fi fi-rr-book-alt"></i><span>Content</span>
          </button>
          <button onClick={() => navigate("/game")}>
            <i className="fi fi-rr-gamepad"></i><span>Game</span>
          </button>
          <button onClick={() => navigate("/major")} className="active">
            <i className="fi fi-rr-graduation-cap"></i><span>Major</span>
          </button>
          <button onClick={() => navigate("/other")}>
            <i className="fi fi-rr-menu-dots"></i><span>Others</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

