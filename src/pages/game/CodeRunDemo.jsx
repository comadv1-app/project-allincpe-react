import { useEffect, useMemo, useState } from "react";
import { useRunner } from "../../hooks/useRunner";
import { useLanguages } from "../../hooks/useLanguages";

const STARTER = {
  python: `n = int(input())\nprint("Even" if n % 2 == 0 else "Odd")\n`,
  c: `#include <stdio.h>\nint main(){int n; if(scanf("%d",&n)!=1) return 0; printf("%s\\n", (n%2==0)?"Even":"Odd"); return 0;}\n`,
  java: `import java.util.*; class Main{ public static void main(String[] a){ Scanner sc=new Scanner(System.in); int n=sc.nextInt(); System.out.println( (n%2==0)?"Even":"Odd" ); } }\n`
};

export default function CodeRunDemo() {
  const { idMap, loading: langLoading } = useLanguages();
  const { loading, result, error, run } = useRunner();

  const [lang, setLang] = useState("python");
  const [source, setSource] = useState(STARTER.python);
  const [stdin, setStdin] = useState("8\n");

  useEffect(() => {
    setSource(STARTER[lang]);
    if (lang === "python") setStdin("8\n");
    if (lang === "c") setStdin("8\n");
    if (lang === "java") setStdin("8\n");
  }, [lang]);

  const languageId = useMemo(() => idMap[lang], [idMap, lang]);
  const canRun = !!languageId && !loading && !langLoading;

  const statusText = result?.status?.description || (langLoading ? "loading languages..." : loading ? "Running..." : "");

  const stdout = result?.stdout || "";
  const stderr = result?.stderr || result?.compile_output || "";
  const time   = result?.time || "";
  const memory = result?.memory || "";

  const runNow = () => {
    if (!languageId) return alert("languageId not ready");
    run({ languageId, source, stdin });
  };

  return (
    <div className="app">
      <div className="shell">
        <header className="navbar">
          <div className="brand"><img src="/logo.png" alt="CPE" /></div>
          <div className="brand-text"><h1>ALL IN CPE</h1><p>computer engineering</p></div>
        </header>

        <main className="content content-page" style={{maxWidth: 840, margin: "0 auto"}}>
          <h2 className="page-title">code solving game — Runner Demo</h2>

          <div className="section-card" style={{maxWidth: 760}}>
            <div className="section-body">
              <div style={{display:"flex", gap:12, alignItems:"center", marginBottom:10}}>
                <label>Language:</label>
                <select value={lang} onChange={(e)=>setLang(e.target.value)}>
                  <option value="python">Python</option>
                  <option value="c">C (GCC)</option>
                  <option value="java">Java</option>
                </select>
                <div style={{marginLeft:"auto", fontWeight:600}}>{statusText}</div>
              </div>

              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
                <div>
                  <div style={{fontWeight:700, marginBottom:6}}>Source Code</div>
                  <textarea
                    rows={16}
                    value={source}
                    onChange={(e)=>setSource(e.target.value)}
                    style={{width:"100%", background:"#2b2b2b", color:"#fff", borderRadius:8, padding:10}}
                  />
                  <div style={{marginTop:10}}>
                    <div style={{fontWeight:700, marginBottom:4}}>Input (stdin)</div>
                    <textarea
                      rows={4}
                      value={stdin}
                      onChange={(e)=>setStdin(e.target.value)}
                      style={{width:"100%"}}
                    />
                  </div>
                  <button className="more-btn" onClick={runNow} disabled={!canRun} style={{marginTop:10}}>
                    {loading ? "Running..." : "Run"}
                  </button>
                </div>

                <div>
                  <div style={{fontWeight:700, marginBottom:6}}>Output (stdout)</div>
                  <textarea rows={6} value={stdout || ""} readOnly style={{width:"100%"}} />
                  {stderr ? (
                    <>
                      <div style={{fontWeight:700, margin:"10px 0 6px"}}>Messages</div>
                      <textarea rows={6} value={stderr} readOnly style={{width:"100%", color:"#b00"}} />
                    </>
                  ) : null}
                  <div style={{marginTop:8, fontSize:12, opacity:.8}}>
                    time: {time || "-"} s · memory: {memory || "-"} KB
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
