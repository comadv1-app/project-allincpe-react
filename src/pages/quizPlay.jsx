// src/pages/quizPlay.jsx
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pool } from "../data/questions";
import { buildQuiz } from "../utils/quiz";

export default function QuizPlay() {
  const nav = useNavigate();
  const { search } = useLocation();

  const mode = useMemo(() => {
    const m = new URLSearchParams(search).get("mode") ?? "fundamentals";
    return ["fundamentals", "major", "other"].includes(m) ? m : "fundamentals";
  }, [search]);

  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      const qs = buildQuiz(mode, pool) || [];
      setQuestions(qs);
      setIdx(0);
      setAnswers({});
      setDone(false);
    } catch (e) {
      console.error("Build quiz error:", e);
      setQuestions([]);
    }
  }, [mode]);

  const score = useMemo(() => {
    if (!done) return 0;
    return questions.reduce((acc, qq) => (answers[qq.id] === qq.answer ? acc + 1 : acc), 0);
  }, [done, answers, questions]);

  const breakdown = useMemo(() => {
    const m = {};
    for (const q of questions) {
      const g = q.group || "อื่น ๆ";
      if (!m[g]) m[g] = { correct: 0, total: 0 };
      m[g].total++;
      if (answers[q.id] === q.answer) m[g].correct++;
    }
    return m;
  }, [answers, questions]); 

  const safeIdx = Math.max(0, Math.min(idx, Math.max(questions.length - 1, 0)));
  const q = questions[safeIdx];

  const modeLabel =
    mode === "fundamentals"
      ? "พื้นฐาน Computer Engineering"
      : mode === "major"
      ? "วิชาเอก "
      : "สาขาอื่น ๆ ";

  const choose = (i) => q && setAnswers((prev) => ({ ...prev, [q.id]: i }));
  const next = () => {
    if (safeIdx < questions.length - 1) setIdx((v) => v + 1);
    else setDone(true);
  };
  const restart = () => {
    const qs = buildQuiz(mode, pool) || [];
    setQuestions(qs);
    setIdx(0);
    setAnswers({});
    setDone(false);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="app">
        <div className="shell">
          <header className="navbar">
            <div className="brand"><img src="/logo.png" alt="CPE" /></div>
            <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
          </header>
          <main className="content content-page">
            <h2 className="page-title">ยังไม่มีคลังข้อสอบเพียงพอ</h2>
            <p>mode: {mode}</p>
            <button className="more-btn" onClick={() => nav("/quiz")}>ย้อนกลับ</button>
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
          <h2 className="page-title">{modeLabel}</h2>

          {!done ? (
            <div>
              <div style={{ marginBottom: 8 }}>ข้อ {safeIdx + 1}/{questions.length}</div>

              <div className="section-card">
                <div className="section-body">
                  <div style={{ marginBottom: 6, fontWeight: 600 }}>
                    {q.group && mode !== "fundamentals" ? `[${q.group}] ` : null}
                  </div>
                  <div style={{ marginBottom: 10 }}>{q.q}</div>

                  {(q.choices ?? []).map((c, i) => {
                    const selected = answers[q.id] === i;
                    return (
                      <button
                        key={i}
                        onClick={() => choose(i)}
                        role="radio"
                        aria-checked={selected}
                        className={`choice-btn ${selected ? "is-selected" : ""}`}
                        style={{ display: "block", width: "100%", margin: "8px 0" }}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <button className="more-btn" onClick={next}>
                  {safeIdx < questions.length - 1 ? "Next" : "ส่งคำตอบ"}
                </button>
              </div>
            </div>
          ) : (
            <Result
              mode={mode}
              score={score}
              total={questions.length}
              breakdown={breakdown}
              onRetry={restart}
              onBack={() => nav("/quiz")}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function Result({ mode, score, total, breakdown, onRetry, onBack }) {
  const pct = Math.round((score / total) * 100);
  let msg = "ดีมาก!";
  if (pct < 40) msg = "พื้นฐานยังอ่อน แนะนำทบทวนก่อน";
  else if (pct < 60) msg = "พอใช้ได้ เสริมพื้นฐานอีกนิด";
  else if (pct < 80) msg = "โอเคเลย ไปต่อได้";

  // สร้างรายการ breakdown อ่านง่าย
  const entries = Object.entries(breakdown || {});

  return (
    <div className="section-card">
      <div className="section-body">
        <div style={{ marginBottom: 10 }}>คะแนน {score}/{total} ({pct}%)</div>
        <div style={{ height: 10, background: "#eee", borderRadius: 6, overflow: "hidden", marginBottom: 10 }}>
          <div style={{ width: `${pct}%`, height: "100%" }} className="bar-success" />
        </div>

        {mode !== "fundamentals" && entries.length > 0 && (
          <ul className="breakdown-list">
            {entries.map(([key, { correct, total }]) => {
              const p = Math.round((correct / total) * 100);
              return (
                <li key={key}>
                  <span className="breakdown-key">{key}</span>
                  {correct}/{total} ({p}%)
                </li>
              );
            })}
          </ul>
        )}

        <p style={{ marginTop: 8 }}>{msg}</p>
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <button className="more-btn" onClick={onRetry}>เริ่มใหม่</button>
          <button className="more-btn" onClick={onBack} style={{ background: "#0b1b2f" }}>ทดสอบอื่น ๆ</button>
        </div>
      </div>
    </div>
  );
}
