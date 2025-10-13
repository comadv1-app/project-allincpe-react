import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const TRACKS = ["All", "Software", "Security", "Data", "AI", "Graphics", "Infra/Network"];

const MAJORS = [
  {
    name: "Computer Science",
    tracks: ["Software", "AI", "Data"],
    desc:
      "พื้นฐานวิทยาการคอมพิวเตอร์ เข้มด้านอัลกอริทึม โครงสร้างข้อมูล คณิตศาสตร์ และทฤษฎีคอมพิวเตอร์",
    roles: ["Software Engineer", "Algorithm Engineer", "Research Engineer"],
    url: "https://muic.mahidol.ac.th/thai/%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%94-computer-science/",
  },
  {
    name: "Software Engineering",
    tracks: ["Software", "Infra/Network"],
    desc:
      "โฟกัสกระบวนการพัฒนาซอฟต์แวร์ทั้งระบบ ตั้งแต่การเก็บความต้องการ ออกแบบ ทดสอบ และดีพลอย",
    roles: ["Full-stack Developer", "QA/Automation Engineer", "DevOps Engineer"],
    url: "https://th.jobsdb.com/th/career-advice/article/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%95%E0%B9%8C%E0%B9%81%E0%B8%A7%E0%B8%A3%E0%B9%8C",
  },
  {
    name: "Information Technology",
    tracks: ["Software", "Infra/Network", "Security"],
    desc:
      "เน้นระบบสารสนเทศ โครงสร้างพื้นฐานองค์กร งานไอทีซัพพอร์ต และการบูรณาการระบบ",
    roles: ["IT Support/Administrator", "System Analyst", "IT Project Coordinator"],
    url: "https://www.techtarget.com/searchdatacenter/definition/IT",
  },
  {
    name: "Data Science",
    tracks: ["Data", "AI", "Software"],
    desc:
      "วิเคราะห์ข้อมูลเชิงลึก การสร้างแบบจำลองทางสถิติ และการนำเสนออินไซต์เพื่อการตัดสินใจ",
    roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
    url: "https://aws.amazon.com/what-is/data-science/",
  },
  {
    name: "Artificial Intelligence",
    tracks: ["AI", "Data", "Software"],
    desc:
      "เรียนการสร้างโมเดล AI/ML, Deep Learning, Computer Vision, NLP และระบบอัจฉริยะ",
    roles: ["ML Engineer", "Computer Vision Engineer", "NLP Engineer"],
    url: "https://www.ibm.com/think/topics/artificial-intelligence",
  },
  {
    name: "Cybersecurity",
    tracks: ["Security", "Infra/Network"],
    desc:
      "การป้องกัน ตรวจจับ และตอบสนองภัยคุกคามด้านความมั่นคงปลอดภัยของระบบและเครือข่าย",
    roles: ["Security Analyst (Blue Team)", "Penetration Tester (Red Team)", "SOC Engineer"],
    url: "https://www.ibm.com/think/topics/cybersecurity",
  },
  {
    name: "Computer Graphics & Game Development",
    tracks: ["Graphics", "Software"],
    desc:
      "กราฟิกคอมพิวเตอร์ เอนจินเกม ฟิสิกส์เกม เทคนิคเรนเดอร์ และ UX/UI สำหรับงานอินเทอร์แอคทีฟ",
    roles: ["Game Developer", "Technical Artist", "Graphics/Rendering Engineer"],
    url: "https://www.coursera.org/articles/computer-graphics",
  },
];

export default function Other() {
  const navigate = useNavigate();
  const [activeTrack, setActiveTrack] = useState("All");
  const [open, setOpen] = useState(null);

  const filteredMajors = useMemo(() => {
    if (activeTrack === "All") return MAJORS;
    return MAJORS.filter((m) => m.tracks.includes(activeTrack));
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
          <h2 className="page-title">สาขาอื่น ๆ</h2>

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
                  aria-expanded={isOpen}
                >
                  {m.name}
                  <span className={`chev ${isOpen ? "up" : ""}`}>▾</span>
                </button>

                {isOpen && (
                  <div className="section-body">
                    <p className="major-desc">{m.desc}</p>
                    <div className="roles-title">สายงานที่รองรับ</div>
                    <ul className="roles-list">
                      {m.roles.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>

                    <div className="tags">
                      {m.tracks.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                      <a
                        className="more-btn"
                          href={m.url}
                          target="_blank"
                          rel="noreferrer"
                      >เพิ่มเติม</a>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </main>

        <nav className="bottom-nav">
          <button onClick={() => navigate(-1)} aria-label="Back">
            ←
          </button>
          <button onClick={() => navigate("/home")}>
            <i className="fi fi-rr-home"></i>
            <span>Home</span>
          </button>
          <button onClick={() => navigate("/content")}>
            <i className="fi fi-rr-book-alt"></i>
            <span>Content</span>
          </button>
          <button onClick={() => navigate("/game")}>
            <i className="fi fi-rr-gamepad"></i>
            <span>Game</span>
          </button>
          <button onClick={() => navigate("/other")} className="active">
            <i className="fi fi-rr-menu-dots"></i>
            <span>Others</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
