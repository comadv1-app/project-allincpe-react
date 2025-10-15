import { useEffect, useMemo, useState } from "react";
import { codeQuestions } from "./codeQuestions";
import { useJudge, normalize } from "./judge-utils";
import { useNavigate } from "react-router-dom";  




function pickRandom(arr, n) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

export default function CodePractice() {
  const navigate = useNavigate();  
  const [lang, setLang] = useState("python");
  const [setQs] = useState(() => pickRandom(codeQuestions, 5)); 
  const [idx, setIdx] = useState(0);
  const q = setQs[idx];

  const [source, setSource] = useState(q.starter?.[lang] || q.solution?.[lang] || "");
  const [stdin, setStdin] = useState(q.tests?.[0]?.in ?? "");
  const [stdout, setStdout] = useState("");
  const [timeMem, setTimeMem] = useState({ t: "-", m: "-" });
  const [showSol, setShowSol] = useState(false);

  const { runOne, evaluateAll, loading } = useJudge();

  useEffect(() => {
    setSource(q.starter?.[lang] || q.solution?.[lang] || "");
    setStdin(q.tests?.[0]?.in ?? "");
    setStdout("");
    setTimeMem({ t: "-", m: "-" });
    setShowSol(false);
  }, [lang, q]);

  async function onRun() {
    const r = await runOne(lang, source, stdin);
    setStdout(r?.stdout || r?.compile_output || r?.stderr || "");
    setTimeMem({
      t: r?.time ?? "-",
      m: r?.memory ? `${r.memory} KB` : "-",
    });
  }

  async function onCheck() {
    const res = await evaluateAll(lang, source, q.tests);
    const report = res.details.map((d, i) => `#${i + 1} ${d.ok ? "OK" : "X"}\nexpected:\n${d.exp}\nactual:\n${d.out}\n`).join("\n");
    setStdout(report);
    setTimeMem({ t: "-", m: "-" });
  }

  return (
        <div className="app">
          <div className="shell">
            <header className="navbar">
              <div className="brand"><img src="/logo.png" alt="CPE" /></div>
              <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
            </header>
        <main className="content content-page" style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="page-title">code solving game — ฝึก</h2>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div>ข้อ {idx + 1} / {setQs.length} · คะแนนตอนนี้ 0</div>
            <div style={{ marginLeft: "auto" }}>
              ภาษา:{" "}
              <select value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="python">Python</option>
                <option value="c">C</option>
                <option value="java">Java</option>
              </select>
            </div>
          </div>

          <div className="section-card" style={{ maxWidth: 860 }}>
            <div className="section-body">
              <div style={{ background: "#f6f9ff", padding: "8px 12px", borderRadius: 8, marginBottom: 10 }}>
                <b>โจทย์:</b> {q.title} — {q.description}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Source Code</div>
                  <textarea
                    rows={16}
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    style={{ width: "100%", background: "#2b2b2b", color: "#fff", borderRadius: 8, padding: 10 }}
                  />
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Input (stdin)</div>
                    <textarea rows={4} value={stdin} onChange={(e) => setStdin(e.target.value)} style={{ width: "100%" }} />
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                    <button className="more-btn" onClick={onRun} disabled={loading}>Run</button>
                    <button className="more-btn" onClick={onCheck} style={{ background: "#0b1b2f" }} disabled={loading}>ตรวจผล</button>
                    <button className="more-btn" onClick={() => setShowSol(s => !s)}>เฉลย</button>
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>
                    ผลลัพธ์ {loading ? "(กำลังรัน…)" : ""} <span style={{ fontWeight: 400, marginLeft: 8 }}>
                      time: {timeMem.t} s · memory: {timeMem.m}
                    </span>
                  </div>
                  <textarea
                    rows={16}
                    value={stdout}
                    readOnly
                    style={{ width: "100%", background: "#f5f7fb", borderRadius: 8, padding: 10 }}
                  />
                </div>
              </div>

              {showSol && (
                <div style={{ marginTop: 14 }}>
                  <h4>เฉลย</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                    <pre className="section-card" style={{ padding: 10, overflow: "auto" }}><b>Python</b>{"\n"}{q.solution.python}</pre>
                    <pre className="section-card" style={{ padding: 10, overflow: "auto" }}><b>C</b>{"\n"}{q.solution.c}</pre>
                    <pre className="section-card" style={{ padding: 10, overflow: "auto" }}><b>Java</b>{"\n"}{q.solution.java}</pre>
                  </div>
                </div>
              )}

              <div style={{ textAlign: "right", marginTop: 12 }}>
                <button className="more-btn" onClick={() => setIdx(i => Math.min(i + 1, setQs.length - 1))}>ข้อต่อไป</button>
              </div>
            </div>
          </div>
              <div style={{textAlign:"right"}}>
                <button className="more-btn" style={{background:"#0b1b2f"}} onClick={() => navigate("/game")}>Back</button>
              </div>
        </main>
      </div>
    </div>
  );
}
