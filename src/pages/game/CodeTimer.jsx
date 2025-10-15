import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { codeQuestions } from "./codeQuestions";
import { useJudge } from "./judge-utils";

function shufflePick(arr, n) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

const LANG_CYCLE = ["python", "c", "java"];
const LANG_LABEL = { python: "Python", c: "C", java: "Java" };
function getBuggyStarter(q, lang) {
  return q.starterBug?.[lang] || q.starter?.[lang] || q.solution?.[lang] || "";
}

export default function CodeTimer() {
  const navigate = useNavigate();
  const { loading, evaluateAll } = useJudge();
  const setQs = useMemo(() => shufflePick(codeQuestions, 7), []);
  const [idx, setIdx] = useState(0);
  const q = setQs[idx];
  const lang = LANG_CYCLE[idx % LANG_CYCLE.length];
  const [source, setSource] = useState(getBuggyStarter(q, lang));
  const [pass, setPass] = useState(0);
  const [done, setDone] = useState(false);
  const [spentTotal, setSpentTotal] = useState(0);

  const timerRef = useRef(null);
  const [sec, setSec] = useState(q.suggestedTimeSec || 60);
  useEffect(() => {
    setSource(getBuggyStarter(q, lang));
    setSec(q.suggestedTimeSec || 60);

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setSec((s) => s - 1), 1000);

    return () => clearInterval(timerRef.current);
  }, [q, lang]);

  useEffect(() => {
    if (sec < 0) submit(false);
  }, [sec]);

  async function submit(manual) {
    clearInterval(timerRef.current);

    const used = (q.suggestedTimeSec || 60) - Math.max(0, sec);
    setSpentTotal((t) => t + Math.max(0, used));

    let ok = false;
    if (manual) {
      const res = await evaluateAll(lang, source, q.tests);
      ok = res.passCount === q.tests.length;
    }

    if (ok) setPass((p) => p + 1);

    if (idx < setQs.length - 1) setIdx((i) => i + 1);
    else setDone(true);
  }

  function restart() {
    window.location.reload(); 
  }

  return (
    <div className="app">
      <div className="shell">
        <header className="navbar">
          <div className="brand"><img src="/logo.png" alt="CPE" /></div>
          <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
        </header>

        <main className="content content-page" style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="page-title">code solving game — จับเวลา (แก้บั๊ก)</h2>

          {!done ? (
            <div className="section-card" style={{ maxWidth: 860 }}>
              <div className="section-body">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div><b>ข้อ {idx + 1}/{setQs.length}</b> · ผ่านแล้ว {pass}</div>
                  <div style={{ marginLeft: "auto" }}>
                    <b>ภาษา:</b> {LANG_LABEL[lang]} &nbsp;|&nbsp; <b>เวลาที่เหลือ:</b> {Math.max(0, sec)} s
                  </div>
                </div>

                <div style={{ background: "#f6f9ff", padding: "8px 12px", borderRadius: 8, margin: "10px 0" }}>
                  <b>โจทย์:</b> {q.title} — {q.description}
                  <div style={{ marginTop: 6, color: "#0d1b2a" }}>
                    โหมดนี้ให้ <b>แก้บั๊กในโค้ด {LANG_LABEL[lang]}</b> ให้ผ่านเคสทดสอบที่ซ่อนอยู่ ภายในเวลาที่กำหนด
                    <br />
                    เวลาแนะนำ: ~ {q.suggestedTimeSec || 60} วินาที/ข้อ
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>
                      Source Code ({LANG_LABEL[lang]})
                    </div>
                    <textarea
                      rows={16}
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#2b2b2b",
                        color: "#fff",
                        borderRadius: 8,
                        padding: 10,
                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                      }}
                    />
                    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                      <button type="button" className="more-btn" onClick={() => submit(true)} disabled={loading}>
                        ส่งคำตอบ
                      </button>
                      <button
                        type="button"
                        className="more-btn"
                        onClick={() => submit(false)}
                        style={{ background: "#0b1b2f" }}
                      >
                        ข้าม
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="note-danger" style={{ background: "#eef3ff", color: "#0d1b2a" }}>
                      โหมดจับเวลา: <b>ไม่มีช่อง Input</b> ระบบจะทดสอบด้วยอินพุตที่ซ่อนอยู่
                      <br />
                      ไม่แสดงรายละเอียดผลตรวจ (รู้แค่ว่าผ่าน/ไม่ผ่าน) — ต้องให้ “คอมไพล์ได้ + เอาต์พุตตรงทุกเคส”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="section-card" style={{ maxWidth: 560, margin: "0 auto" }}>
              <div className="section-body" style={{ textAlign: "center" }}>
                <h3>สรุป</h3>
                <p>ผ่าน {pass}/{setQs.length}</p>
                <p>ใช้เวลา ~ {Math.round(spentTotal)} วินาที</p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  <button type="button" className="more-btn" onClick={restart}>เล่นอีก</button>
                </div>
                <div style={{ textAlign: "right", marginTop: 10 }}>
                  <button
                    type="button"
                    className="more-btn"
                    style={{ background: "#0b1b2f" }}
                    onClick={() => navigate("/game")}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
