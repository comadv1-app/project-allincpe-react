import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TARGET = 20;
const BASE_TIME = 60;   
const CAP_TIME  = 300;   
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const toBase = (n, base) => (base === 2 ? n.toString(2) : base === 16 ? n.toString(16).toUpperCase() : String(n));
const fromBase = (s, base) => parseInt(String(s).trim(), base);

const TYPES = [
  { from: 2,  to: 10 },
  { from: 10, to: 2  },
  { from: 10, to: 16 },
  { from: 16, to: 10 },
  { from: 2,  to: 16 },
  { from: 16, to: 2  },
];

function makeOne() {
  const t = TYPES[randInt(0, TYPES.length - 1)];
  const n = randInt(0, 1023);
  const src = toBase(n, t.from);
  const answer = toBase(n, t.to);
  const id = `bin-${t.from}-${t.to}-${n}-${Math.random().toString(36).slice(2, 7)}`;
  const text = `แปลง ${src} (ฐาน ${t.from}) ➜ ฐาน ${t.to}`;
  return { id, q: text, from: t.from, to: t.to, src, answer };
}

function buildSet() {
  const arr = Array.from({ length: TARGET }, () => makeOne());
  return arr;
}

function normalizeInput(s, base) {
  const v = String(s || "").trim();
  if (base === 10) return v.replace(/^0+(\d)/, "$1"); 
  if (base === 16) return v.toUpperCase();
  return v.replace(/\s+/g, "");
}

export default function Binary() {
  const navigate = useNavigate();
  const questions = useMemo(() => buildSet(), []); 
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(BASE_TIME);
  const [totalTime, setTotalTime] = useState(0);
  const carryRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (done || !questions.length) return;
    const start = Math.min(BASE_TIME + carryRef.current, CAP_TIME);
    setTimeLeft(start);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        setTotalTime((p) => p + 1);
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [idx, done, questions.length]);

  if (!questions.length) {
    return (
      <div className="app">
        <div className="shell">
          <header className="navbar">
            <div className="brand"><img src="/logo.png" alt="CPE" /></div>
            <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
          </header>
          <main className="content content-page">
            <h2 className="page-title">Binary</h2>
            <p>ยังไม่มีโจทย์</p>
            <button className="more-btn" onClick={() => navigate("/game")}>Back</button>
          </main>
        </div>
      </div>
    );
  }

  const q = questions[idx];

  const checkAnswer = () => {
    const user = normalizeInput(input, q.to);
    if (user === "") return;
    let userOk = false;
    try {
      const userAsInt = q.to === 10 ? Number(user) : fromBase(user, q.to);
      const correctAsInt = fromBase(q.answer, q.to);
      userOk = Number.isFinite(userAsInt) && userAsInt === correctAsInt;
    } catch {
      userOk = false;
    }

    if (userOk) {
      setScore((s) => s + 1);
      carryRef.current = Math.max(0, timeLeft); 
    } else {
      carryRef.current = 0;
    }
    gotoNext();
  };

  const handleTimeout = () => {
    carryRef.current = 0;
    gotoNext();
  };

  const gotoNext = () => {
    clearInterval(timerRef.current);
    setInput("");
    if (idx < questions.length - 1) setIdx((v) => v + 1);
    else setDone(true);
  };

  const restart = () => navigate(0);

  const fmt = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")} นาที`;
  };

  return (
    <div className="app">
      <div className="shell">
        <header className="navbar">
          <div className="brand"><img src="/logo.png" alt="CPE" /></div>
          <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
        </header>

        <main className="content content-page" style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="page-title">Binary</h2>

          {!done ? (
            <div className="section-card" style={{ maxWidth: 520, margin: "0 auto" }}>
              <div className="section-body">
                <div style={{display:"flex", gap:10, flexWrap:"wrap", marginBottom:10}}>
                  <Badge>ข้อที่ {idx + 1}/{questions.length}</Badge>
                  <Badge>เวลา: {timeLeft} s</Badge>
                  <Badge>คะแนน: {score}</Badge>
                </div>

                <div style={{margin:"8px 0 12px"}}>{q.q}</div>

                <input
                  type="text"
                  placeholder="คำตอบ"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    width:"100%", border:"1.5px solid #d5deff",
                    borderRadius:8, padding:"10px 12px", marginBottom:10
                  }}
                />

                <div>
                  <button className="more-btn" onClick={checkAnswer}>ยืนยัน</button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{maxWidth:520, margin:"0 auto"}}>
              <div className="section-card">
                <div className="section-body">
                  <div>ทำได้ {score}/{questions.length} ข้อ</div>
                  <div style={{marginTop:6}}>เวลา: {fmt(totalTime)}</div>
                </div>
              </div>
              <div style={{display:"flex", gap:10}}>
                <button className="more-btn" onClick={restart}>เล่นอีก</button>
                <button className="more-btn" style={{background:"#0b1b2f"}} onClick={() => navigate("/game")}>Back</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span style={{
      border: "1px solid #c9d6ff",
      background: "#fff",
      padding: "6px 10px",
      borderRadius: 6,
      fontWeight: 600
    }}>{children}</span>
  );
}
