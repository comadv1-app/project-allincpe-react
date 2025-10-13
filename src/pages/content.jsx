import { useNavigate } from "react-router-dom";

export default function Content() {
  const navigate = useNavigate();

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
          <h2 className="page-title">เนื้อหาการเรียน</h2>

          <section className="section-card">
            <div className="section-head section-deep">วิชาพื้นฐาน</div>
            <ul className="syllabus-list">
              <li><span className="bullet" />calculus (I, II)</li>
              <li><span className="bullet" />physics (I, II Emphasis on electrical circuits)</li>
              <li><span className="bullet" />Chemistry</li>
              <li><span className="bullet" />Basic programming (C, Python)</li>
            </ul>
          </section>

          <section className="section-card">
            <div className="section-head section-primary">วิชาแกน</div>
            <ul className="syllabus-list">
              <li><span className="bullet" />Data Structures and Algorithms</li>
              <li><span className="bullet" />Digital Systems</li>
              <li><span className="bullet" />Electrical and Electronic Circuits</li>
              <li><span className="bullet" />Computer Architecture</li>
              <li><span className="bullet" />Operating Systems</li>
              <li><span className="bullet" />Database Systems</li>
              <li><span className="bullet" />Computer Networks</li>
              <li><span className="bullet" />Probability and Statistics for Engineers</li>
              <li><span className="bullet" />Engineering Mathematics</li>
              <li><span className="bullet" />Microprocessor and Microcontroller Systems</li>
            </ul>
          </section>

          <section className="section-card">
            <div className="section-head section-primary">วิชาเอก</div>
            <ul className="syllabus-list">
              <li><span className="bullet" />Robotics & Automation</li>
              <li><span className="bullet" />Advanced Software Engineering</li>
              <li><span className="bullet" />Cybersecurity</li>
            </ul>
          </section>

          <div className="note-danger">
            <strong>หมายเหตุ</strong><br />
            รายวิชาอาจมีการเปลี่ยนแปลงขึ้นอยู่กับโครงสร้างหลักสูตรของแต่ละมหาวิทยาลัย และนโยบายของคณะวิศวกรรมศาสตร์ 
            ทั้งนี้ รายวิชาที่แสดงเป็นเพียงตัวอย่างของวิชาพื้นฐาน วิชาแกน และวิชาเอกที่มักเปิดสอนในสาขาวิศวกรรมคอมพิวเตอร์ 
            เพื่อให้ผู้เรียนเห็นภาพรวมของเนื้อหาที่จะศึกษาในระดับปริญญาตรี
          </div>
        </main>

        <nav className="bottom-nav">
          <button onClick={() => navigate("/home")}>
            <i className="fi fi-rr-home"></i>
            <span>Home</span>
          </button>

          <button onClick={() => navigate("/content")} className="active">
            <i className="fi fi-rr-book-alt"></i>
            <span>Content</span>
          </button>

          <button onClick={() => navigate("/game")}>
            <i className="fi fi-rr-gamepad"></i>
            <span>Game</span>
          </button>

          <button onClick={() => navigate("/major")}>
            <i className="fi fi-rr-graduation-cap"></i><span>Major</span>
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
