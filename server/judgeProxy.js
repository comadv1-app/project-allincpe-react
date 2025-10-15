//server/judgeProxy.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json({ limit: "200kb" }));

const JUDGE_BASE = (process.env.JUDGE_BASE || "https://ce.judge0.com").replace(/\/+$/,"");
const RAPID_HEADERS = {};
if (process.env.RAPIDAPI_KEY) {
  RAPID_HEADERS["X-RapidAPI-Key"] = process.env.RAPIDAPI_KEY;
  RAPID_HEADERS["X-RapidAPI-Host"] = process.env.RAPIDAPI_HOST || "judge0-ce.p.rapidapi.com";
}
const JSON_HEADERS = { "Content-Type": "application/json", ...RAPID_HEADERS };

app.get("/api/health", (_,res)=>res.json({ ok:true }));

app.get("/api/languages", async (_req, res) => {
  try {
    const r = await fetch(`${JUDGE_BASE}/languages`, { headers: RAPID_HEADERS });
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "languages_fail", detail: e.message });
  }
});

app.post("/api/run", async (req, res) => {
  try {
    const { languageId, source, stdin } = req.body;
    if (!languageId || !source) return res.status(400).json({ error: "missing_params" });

    const created = await fetch(`${JUDGE_BASE}/submissions?base64_encoded=false&wait=false`, {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({ language_id: languageId, source_code: source, stdin })
    }).then(r => r.json());

    const token = created.token;
    if (!token) return res.status(500).json({ error: "no_token", raw: created });

    let result = null;
    for (let i=0;i<24;i++) {
      await new Promise(r => setTimeout(r, 700));
      const r = await fetch(`${JUDGE_BASE}/submissions/${token}?base64_encoded=false`, { headers: RAPID_HEADERS });
      result = await r.json();
      if ((result.status?.id ?? 0) >= 3) break; // 3=Finished
    }
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: "run_fail", detail: e.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Judge proxy running on :${PORT}`));
