import AlertBanner from "../components/AlertBanner";

export default function Home() {
  return (
    <div className="app">
              <AlertBanner />
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

        <main className="content">
          <img src="/1.png" alt="Hero" className="hero" />
          <h2>สวัสดีครับ ยินดีต้อนรับสู่ <br /> สาขา: Computer Engineering!</h2>

          <div className="menu">
            <button>เนื้อหาการเรียน</button>
            <button>แบบทดสอบ</button>
            <button>เกมท้าทาย</button>
            <button>เลือกวิชาเอก</button>
            <button>สาขาอื่น ๆ</button>
          </div>
        </main>

        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <div className="footer-title">Contact</div>
                    <div className="footer-sub">Computer Engineering, PSRU</div>
                </div>
                <div className="footer-right">
                    <a className="footer-link" href="https://cpe.psru.ac.th/" target="_blank" rel="noreferrer">
                        Website
                    </a>
                    <a className="footer-link" >Email</a>

                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}
