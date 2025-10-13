import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { timePool } from "./timeQuestions";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TimeChallenge() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [totalTime, setTotalTime] = useState(0);
  const TARGET = 20;
  const BASE_TIME = 10;      
  const CAP_TIME = 30;       
  const questions = useMemo(() => {
    const pool = shuffle(timePool);
    return pool.slice(0, Math.min(TARGET, pool.length));
  }, [search]); 
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);     
  const [answers, setAnswers] = useState({});     
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(BASE_TIME);
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
          handleAutoNext();
          return 0;
        }
        setTotalTime(prev => prev + 1);
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [idx, done, questions.length]);

  const q = questions[idx];

  const submit = () => {
    if (picked == null) return; 
    const correct = picked === q.answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => ({ ...a, [q.id]: picked }));
    carryRef.current = Math.max(0, timeLeft);
    gotoNext(true);
  };

  const skip = () => {
    carryRef.current = 0;
    gotoNext(false);
  };

  const handleAutoNext = () => {
    carryRef.current = 0;
    gotoNext(false);
  };

  const gotoNext = (answered) => {
    clearInterval(timerRef.current);
    setPicked(null);
    if (idx < questions.length - 1) {
      setIdx((i) => i + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    navigate(0);
  };

  if (!questions.length) {
    return (
      <div className="app">
        <div className="shell">
          <header className="navbar">
            <div className="brand"><img src="/logo.png" alt="CPE" /></div>
            <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
          </header>
          <main className="content content-page">
            <h2 className="page-title">Time challenge game</h2>
            <p>ยังไม่มีคลังคำถามเพียงพอ</p>
            <button className="more-btn" onClick={() => navigate("/game")}>เลือกเกม</button>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="shell">
        <header className="navbar">
          <div className="brand"><img src="/logo.png" alt="CPE" /></div>
          <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
        </header>

        <main className="content content-page" style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="page-title">Time challenge game</h2>

          {!done ? (
            <>
              <div style={{display:"flex", gap:10, justifyContent:"center", marginBottom:8}}>
                <Badge>ข้อที่ {idx + 1} / {questions.length}</Badge>
                <Badge>เวลาฯ: {timeLeft}s</Badge>
                <Badge>คะแนน: {score}</Badge>
              </div>

              <div style={{height:4, background:"#e6ebff", borderRadius:4, overflow:"hidden", margin:"6px 12px 12px"}}>
                <div className="bar-success" style={{
                  width: `${((idx) / questions.length) * 100}%`,
                  height: "100%"
                }} />
              </div>

              <div className="section-card">
                <div className="section-body">
                  <div style={{marginBottom:10}}>{q.q}</div>

                  {(q.choices ?? []).map((c, i) => (
                    <label key={i} className="option" style={{display:"block", margin:"8px 0"}}>
                      <input
                        type="radio"
                        name={q.id}
                        checked={picked === i}
                        onChange={() => setPicked(i)}
                      />{" "}
                      {c}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{display:"flex", gap:10, justifyContent:"center"}}>
                <button className="more-btn" onClick={submit}>ยืนยันคำตอบ</button>
                <button className="more-btn" style={{background:"#0b1b2f"}} onClick={skip}>ข้าม</button>
              </div>
            </>
          ) : (
            <div>
              <div className="section-card">
                <div className="section-body">
                  <div>จบเกม</div>
                  <div style={{margin:"6px 0 12px"}}>คะแนน {score}/{questions.length}</div>
                  <div style={{marginBottom:"12px"}}>ใช้เวลา {totalTime} วินาที</div>
                  <button className="more-btn" onClick={restart}>เล่นอีก</button>
                </div>
              </div>
              <div style={{textAlign:"right"}}>
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
