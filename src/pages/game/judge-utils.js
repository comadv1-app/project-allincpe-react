// /src/pages/game/judge-utils.js
import { useLanguages } from "../../hooks/useLanguages";
import { useRunner } from "../../hooks/useRunner";

// ปรับเอาต์พุตให้เทียบง่าย (ลบ \r, trim)
export const normalize = (s = "") => s.replace(/\r/g, "").trim();

export function useJudge() {
  const { idMap } = useLanguages();
  const runner = useRunner();

  async function runOne(lang, source, stdin) {
    const languageId = idMap[lang];
    // ให้ stdin ลงท้ายด้วย \n เสมอ
    const fixedStdin = (stdin ?? "").endsWith("\n") ? stdin : (stdin ?? "") + "\n";
    await runner.run({ languageId, source, stdin: fixedStdin });
    return runner.result; // {status, stdout, stderr, compile_output, ...}
  }

  // รันทุก test case
  async function evaluateAll(lang, source, tests = []) {
    const details = [];
    let passCount = 0;

    for (const t of tests) {
      const r = await runOne(lang, source, t.in);
      const out = normalize(r?.stdout || "");
      const exp = normalize(t.out || "");
      const ok =
        out === exp &&
        (r?.status?.id ?? 0) >= 3 &&
        !r?.compile_output &&
        !r?.stderr;

      if (ok) passCount++;
      details.push({
        ok,
        out,
        exp,
        status: r?.status?.description,
        raw: r,
      });
    }

    return { passCount, details };
  }

  return { ...runner, runOne, evaluateAll };
}
